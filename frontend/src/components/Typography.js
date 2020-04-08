const { withStyles } = window.MaterialUI;
const MuiTypography = window.MaterialUI.Typography;

const styles = theme => ({
    markedH2Center: {
        height: 4,
        width: 73,
        display: 'block',
        margin: `${theme.spacing(1)}px auto 0`,
        backgroundColor: theme.palette.secondary.main,
    },
});

const variantMapping = {
    h1: 'h1',
    h2: 'h1',
    subtitle1: 'h3',
};

function Typography(props) {
    const { children, classes, marked = false, variant, ...other } = props;

    return (
        <MuiTypography variantMapping={variantMapping} variant={variant} {...other}>
            {children}
            {marked ? (
                <span />
            ) : null}
        </MuiTypography>
    );
}

export default withStyles(styles)(Typography);