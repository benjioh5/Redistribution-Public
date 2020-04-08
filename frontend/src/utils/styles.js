export const styles = theme => ({
    container: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
    },
    link: {
        margin: theme.spacing(1, 1.5),
    },
    message: {
        fontWeight: 'bold',
    },
    except: {
        marginTop: theme.spacing(3),
    },
    margin: {
        margin: theme.spacing(1),
    },
    apiItem: {
        width: '100%',
    },
    paper: {
        width: '100%',
        padding: theme.spacing(3),
    },
    marginTop: {
        marginTop: theme.spacing(3),
    },
    delButton: {
        position: 'absolute',
        top: '0px',
        right: '8px',
    },
    cardHeader: {
        backgroundColor:
            theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    cardPricing: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'baseline',
        marginBottom: theme.spacing(2),
    },
    tableRow: {
        cursor: 'pointer',
    },
    footerLink: {
        margin: theme.spacing(0, 2),
    }
});