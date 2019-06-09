import React, { Component } from "react";
import {
  Paper,
  withStyles,
  Typography,
  FormGroup,
  TextField,
  Button
} from "@material-ui/core";

const styles = theme => ({
  root: {
    flexGrow: 1
  },
  FormGroup: {
    margin: theme.spacing.unit
  },
  TextField: {
    marginTop: theme.spacing.unit,
    marginBottom: theme.spacing.unit
  },
  Button: {
    marginBottom: theme.spacing.unit
  }
});

class SignUpForm extends Component {
  state = {
    username: undefined,
    password: undefined,
    confirmPassword: undefined
  };

  handleChange = e => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Paper>
          <Typography variant={"h6"}>SignUp Form</Typography>
          <form onSubmit={this.handleSubmit}>
            <FormGroup className={classes.FormGroup}>
              <TextField
                id="username"
                className={classes.TextField}
                label="Username"
                variant="outlined"
                onChange={this.handleChange}
              />
              <TextField
                id="password"
                className={classes.TextField}
                type="password"
                label="Password"
                variant="outlined"
                onChange={this.handleChange}
              />
              <TextField
                id="confirmPassword"
                className={classes.TextField}
                type="password"
                label="Confirm Password"
                variant="outlined"
                onChange={this.handleChange}
              />
            </FormGroup>
            <Button
              className={classes.Button}
              type="submit"
              variant="outlined"
              color="primary"
            >
              Register
            </Button>
          </form>
        </Paper>
      </div>
    );
  }
}

export default withStyles(styles)(SignUpForm);
