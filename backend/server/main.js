import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import caver from './caver';
import cors from 'cors';
import voteWatcher from './VoteWatcher';
import lodash from 'lodash';
import { toHex32, send } from './util/functools';
import CONFIG from './config';

const difficulty = CONFIG.difficulty;
const prize = CONFIG.prize

function isCorrect(answer, hash) {
    // return true;
    return answer.substr(answer.length - difficulty) === hash.substr(hash.length - difficulty);
}

voteWatcher.watchVote(CONFIG.watchInterval, async (block, events) => {
    const sortedEvents = lodash.reverse(lodash.sortBy(events, ['blockNumber', 'logIndex']));
    const correctEvents = sortedEvents.filter(event => {
        const answer = toHex32(event.answer);
        const hash = block.hash;
        return isCorrect(answer, hash);
    });

    const winners = lodash.zip(correctEvents, prize).filter(r => r[0]);

    for (let winner of winners) {
        const result = await send(winner[0].user, winner[1], CONFIG.prizeUnit);
        console.log(result);
    }

    if (!fs.readdirSync('./').includes('winners')) {
        fs.mkdirSync('./winners');
    }

    fs.writeFile(`./winners/${block.number}.json`, JSON.stringify(winners), (err) => {
        if (err) console.log(err);
    });
});

const app = express();

let port = 3333;

app.use(cors());
app.use(bodyParser.urlencoded())
app.use(bodyParser.json());

app.get('/winners', async (req, res) => {
    const prevWinnerFiles = await fs.promises.readdir('./winners');
    const lastWinnerFile = prevWinnerFiles.sort()[prevWinnerFiles.length - 1];
    // const lastWinnerFile = '0x1530ff6.json';
    const lastWinners = await fs.promises.readFile(`./winners/${lastWinnerFile}`);
    const result = JSON.parse(lastWinners.toString());
    res.send(result);
})

const server = app.listen(port, () => {
    console.log('Express listening on port', port);
});
