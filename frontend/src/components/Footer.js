import { styles } from '../utils/styles';
const { withStyles, Grid, Link } = window.MaterialUI;
import Typography from './Typography';
const ReactLink = window.ReactRouterDOM.Link;

function Footer(props) {
    const { classes } = props;
    const id = Math.random();
    return <footer className={classes.footer}>
        <Grid container spacing={3}>
            <Grid item lg={4}></Grid>
            <Grid item lg={4}>
                <Typography variant="body1">support@mail.kumiho.org</Typography>
                <Typography variant="body2" color="textSecondary">
                    {'Copyright © kumiho.org 2020.'}
                </Typography>
            </Grid>
            <Grid item lg={4}>
                <Link color="inherit" component={ReactLink} to={'/about_us'} className={classes.footerLink}>
                    About Us
                </Link>
                <Link target="_blank" color="inherit" href={'https://kumiho.readthedocs.io/en/latest/'} className={classes.footerLink}>
                    Document
                </Link>
            </Grid>
        </Grid>
    </footer>
}

export default withStyles(styles)(Footer);