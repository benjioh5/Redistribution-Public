const { withStyles } = window.MaterialUI;
const MuiTable = window.MaterialUI.Table;

const styles = theme => ({
    root: {
        color: theme.palette.common.gray,
    },
});

function Table(props) {
    return <MuiTable {...props} />;
}

export default withStyles(styles)(Table);