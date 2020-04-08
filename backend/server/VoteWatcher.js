import caver from './caver';
import CONFIG from './config';
import { returnsToList } from './util/functools';

class VoteWatcher {
    constructor() {
        this.prevBlockNumber = -1;
        this.term = CONFIG.term;

        (async () => {
            const currentBlockNumber = parseInt(await caver.klay.getBlockNumber());
            const residual = currentBlockNumber % this.term;
            this.prevBlockNumber = currentBlockNumber - residual;
        })()
    }

    async watchVote(interval, callback) {

        interval = Math.min(interval * 1000, this.term / 2 * 1000);

        console.log(`Watching vote ${interval} interval`);

        setInterval(async () => {
            const currentBlockNum = parseInt(await caver.klay.getBlockNumber());
            const residual = currentBlockNum % this.term;
            if (currentBlockNum - residual > this.prevBlockNumber) {
                this.prevBlockNumber = currentBlockNum - residual;

                const logOptions = {
                    fromBlock: currentBlockNum - residual - this.term,
                    toBlock: currentBlockNum - residual - 1,
                    address: CONFIG.voteAddress,
                    topics: [CONFIG.voteTopic],
                }

                const pastLogs = await caver.klay.getPastLogs(logOptions);
                const results = pastLogs.map(event => {
                    const hexString = event.data;
                    const returns = caver.klay.abi.decodeParameters(CONFIG.voteReturn, hexString);
                    const rawResult = returnsToList(returns);
                    const result = {
                        answer: rawResult[0],
                        user: rawResult[1],
                        blockNumber: event.blockNumber,
                        logIndex: event.logIndex,
                    }
                    return result;
                });
                const answerBlock = await caver.klay.getBlock(currentBlockNum - residual);
                console.log(`currentBlockNum ${currentBlockNum}, residual ${residual}`);
                console.log(`Answer block #${parseInt(answerBlock.number)} hash ${answerBlock.hash}`);
                console.log(`Events between ${parseInt(logOptions.fromBlock)} to ${parseInt(logOptions.toBlock)}`);
                console.log(results.map(r => JSON.stringify(r)).join('\n'));
                console.log('------------------------------');


                callback(answerBlock, results);
            }
        }, interval);
    }
}

export default new VoteWatcher();