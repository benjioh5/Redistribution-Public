import { styles } from '../utils/styles';
const { withStyles, OutlinedInput, InputLabel, FormControl, Paper, Grid } = window.MaterialUI;

function ApiForm(props) {
    const { label, value, onChange, placeholder, classes, labelWidth, disabled } = props;
    const id = Math.random();
    return <Grid item lg={6}>
        <Paper className={classes.paper} elevation={0}>
            <FormControl fullWidth className={classes.margin} variant="outlined">
                <InputLabel htmlFor={id}>{label}</InputLabel>
                <OutlinedInput
                    id={id}
                    value={value}
                    labelWidth={labelWidth}
                    required
                    onChange={(e) => {
                        onChange(e);
                    }}
                    placeholder={placeholder}
                    disabled={disabled}
                />
            </FormControl>
        </Paper>
    </Grid>
}

export default withStyles(styles)(ApiForm);