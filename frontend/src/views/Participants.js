import Typography from "../components/Typography";
import CONFIG from '../../../backend/server/config';
import { returnsToList } from "../utils/functools";
const { grey } = window.MaterialUI.colors;

const { withStyles, Container, List, ListItem, Card } = window.MaterialUI;
const { useState, useEffect, useRef } = window.React;

const styles = theme => ({
    container: {
        textAlign: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
    participants: {
        width: '100%',
        padding: theme.spacing(1),
        background: grey[600],
        textAlign: 'center',
    },
    participantWrapper: {
        height: '600px',
        overflow: 'auto',
    },
    blockNum: {
        float: 'left',
        marginLeft: theme.spacing(3),
    },
    answer: {
        float: 'right',
        marginRight: theme.spacing(3),
    }
});

function Participants(props) {
    const { classes } = props;
    const value = useRef([]);
    const [events, setEvents] = useState(value.current);

    useEffect(() => {
        let prevBlockNum = 0;

        (async () => {
            prevBlockNum = await caver.klay.getBlockNumber();
            setInterval(async () => {
                const currentBlockNum = await caver.klay.getBlockNumber();
                const results = (await Ahri.getEvents('kumiho.klay/redistribution/event/Vote', prevBlockNum + 1, currentBlockNum)).map(event => {
                    return {
                        answer: event.data[0],
                        user: event.data[1],
                        blockNumber: event.blockNumber,
                        logIndex: event.logIndex,
                    }
                });
                prevBlockNum = currentBlockNum;
                console.log(value.current);
                let reversed = [];
                [...results].forEach(x => {
                    reversed = [x, ...reversed];
                })
                reversed = reversed.filter(item => !value.current.map(i => `${i.user}${i.blockNumber}${i.logIndex}`).includes(`${item.user}${item.blockNumber}${item.logIndex}`))
                value.current = [...reversed, ...value.current];
                setEvents(value.current);
            }, 1000);
        })();
    }, [])
    return (
        <Container className={classes.container}>
            <Typography variant={'h3'}>
                Participants
            </Typography>
            <List className={classes.participantWrapper}>
                {value.current.map((item) => {
                    return (<ListItem key={`participants-${item.user}-${item.blockNumber}-${item.logIndex}`}>
                        <Card className={classes.participants}>
                            <Typography variant="h6">{item.user}</Typography>
                            <Typography variant="h6" className={classes.blockNum}>Block: #{item.blockNumber}</Typography>
                            <Typography variant="h6" className={classes.answer}>Answer: {parseInt(item.answer).toString(16).toUpperCase()}</Typography>
                        </Card>
                    </ListItem>)
                })}
            </List>

        </Container>
    );
}

export default withStyles(styles)(Participants);
