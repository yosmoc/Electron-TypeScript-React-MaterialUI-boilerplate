import * as React from "react";
import { Theme, withStyles, WithStyles } from "material-ui/styles";
import TextField from "material-ui/TextField";

const styles = (theme: Theme) => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
});

interface Props {
  labelName: string;
}

type PropsWithStyles = Props & WithStyles;

const DatePicker: React.SFC<PropsWithStyles> = props => {
  const { classes, labelName } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="datetime-local"
        label={labelName}
        type="datetime-local"
        defaultValue="2017-05-24T10:30"
        className={classes.textField}
        InputLabelProps={{
          shrink: true
        }}
      />
    </form>
  );
};

export default withStyles(styles as React.CSSProperties)<Props>(DatePicker);
