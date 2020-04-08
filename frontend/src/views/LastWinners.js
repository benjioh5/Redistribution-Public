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
    }
});

function LastWinners(props) {
    const { classes } = props;
    const value = useRef([]);
    const [prevWinners, setPrevWinners] = useState(value.current);

    const updateWinners = async () => {
        setPrevWinners(await (await fetch('http://kumiho.org:3333/winners')).json());
    }

    useEffect(() => {
        updateWinners();
        setInterval(() => {
            updateWinners();
        }, 30000);
    }, [])
    return (
        <Container className={classes.container}>
            <Typography variant={'h3'}>
                Last Winners
            </Typography>
            <List className={classes.participantWrapper}>
                {prevWinners.map((item) => {
                    return (<ListItem key={`participants-${item[0].user}-${item[0].blockNumber}-${item[0].logIndex}`}>
                        <Card className={classes.participants}>
                            <Typography variant="h6">{item[0].user}</Typography>
                            <Typography variant="h6">{item[1] / 1000} KLAY</Typography>
                        </Card>
                    </ListItem>)
                })}
            </List>

        </Container>
    );
}

export default withStyles(styles)(LastWinners);
