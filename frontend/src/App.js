import Typography from './components/Typography';
import AppAppBar from './views/AppAppBar';
import withRoot from './utils/withRoot';
import CurrentBlock from './views/CurrentBlock';
import LastWinners from './views/LastWinners';
import Participants from './views/Participants';
const { makeStyles, Container, CssBaseline, Grid, StylesProvider, createGenerateClassName } = window.MaterialUI;

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary">
            {'Copyright © kumiho.org 2020.'}
        </Typography>
    );
}

const generateClassName = createGenerateClassName({seed: 'red'});

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.grey[300],
    },
    main: {
        marginTop: theme.spacing(4),
        marginBottom: theme.spacing(2),
    },
    footer: {
        padding: theme.spacing(3, 2),
        marginTop: 'auto',
        backgroundColor: theme.palette.grey[300],
        color: theme.palette.grey[800]
    },
}), {generateClassName: generateClassName});

function App() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <StylesProvider generateClassName={generateClassName}>
            <AppAppBar />
            <CssBaseline />
            <Container component="main" className={classes.main} maxWidth="sm">
                <CurrentBlock />
            </Container>
            <Container component="main" className={classes.main} maxWidth="lg">
                <Grid container spacing={3}>
                    <Grid item lg={6}>
                        <Participants />
                    </Grid>
                    <Grid item lg={6}>
                        <LastWinners />
                    </Grid>
                </Grid>
            </Container>
            <footer className={classes.footer}>
                <Grid container spacing={3}>
                    <Grid item lg={4}></Grid>
                    <Grid item lg={4}>
                        <Typography variant="body1">support@mail.kumiho.org</Typography>
                        <Typography variant="body2" color="textSecondary">
                            {'Copyright © kumiho.org 2020.'}
                        </Typography>
                    </Grid>
                </Grid>
            </footer>
            </StylesProvider>
        </div>
    );
}

export default withRoot(App);