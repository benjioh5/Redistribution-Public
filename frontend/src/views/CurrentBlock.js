import Typography from "../components/Typography";

const { withStyles, Container, ButtonGroup, Button } = window.MaterialUI;
const { useState, useEffect } = window.React;

const styles = theme => ({
    container: {
        textAlign: 'center',
    },
    margin: {
        margin: theme.spacing(1),
    },
});

function CurrentBlock(props) {
    const { classes } = props;

    const [currentBlock, setCurrentBlock] = useState(0);
    const [term, setTerm] = useState(3600);

    const getCurrent = async () => {
        const currentBlock = parseInt(await caver.klay.getBlockNumber());
        setCurrentBlock(currentBlock);
    }

    useEffect(() => {
        getCurrent();
        setInterval(() => {
            getCurrent()
        }, 1000);
    }, [])

    const nextDraw = currentBlock - (currentBlock % term) + term;

    return (
        <Container className={classes.container}>
            <Typography variant={'h3'}>
                Current Block<br />
                #{currentBlock}
            </Typography>
            <Typography variant={'h5'}>
                Expect last nubmer of #{nextDraw} block hash
            </Typography>
            <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" className={classes.margin}>
                {
                    ['0', '1', '2', '3', '4', '5', '6', '7'].map(val => {
                        return (<Button
                            key={`answer-${val}`}
                            onClick={async (e) => {
                                Ahri.callByUrl('kumiho.klay/redistribution/vote', 'POST', [`0x0000000${val}`], 0, { gas: 30000 })
                            }}
                        >{val}</Button>);
                    })
                }
            </ButtonGroup>
            <ButtonGroup variant="contained" color="primary" aria-label="outlined primary button group" className={classes.margin}>
                {
                    ['8', '9', 'A', 'B', 'C', 'D', 'E', 'F'].map(val => {
                        return (<Button
                            key={`answer-${val}`}
                            onClick={async (e) => {
                                Ahri.callByUrl('kumiho.klay/redistribution/vote', 'POST', [`0x0000000${val}`], 0, { gas: 30000 })
                            }}
                        >{val}</Button>);
                    })
                }
            </ButtonGroup>
            <Typography variant="body2">transaction fee: 0.000654525KLAY</Typography>
            <Typography variant="body2">
                Later expectation will get higher score.
            </Typography>
            <Typography variant="body2" className={classes.margin}>
                PRIZE: 1st-3KLAY 2nd-2KLAY 3rd-1KLAY 4th~43th-0.1KLAY
            </Typography>
        </Container>
    );
}

export default withStyles(styles)(CurrentBlock);
