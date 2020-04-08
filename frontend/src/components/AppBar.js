const { withStyles } = window.MaterialUI;
const MuiAppBar = window.MaterialUI.AppBar;

const styles = theme => ({
    root: {
        color: theme.palette.common.white,
    },
});

function AppBar(props) {
    return <MuiAppBar elevation={0} position="static" {...props} />;
}

export default withStyles(styles)(AppBar);