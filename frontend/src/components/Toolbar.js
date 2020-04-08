const { withStyles, Toolbar } = window.MaterialUI;

export const styles = theme => ({
    root: {
        height: 64,
        [theme.breakpoints.up('sm')]: {
            height: 70,
        },
    },
});

export default withStyles(styles)(Toolbar);