import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Tabs, Tab, Icon } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  admin: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

export default function NavigationBar(props) {
  const classes = useStyles();
  const username = props.username;

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit">
            Single-Store : { username }
          </Typography>
        </Toolbar>
        <Tabs>
            <Tab label="Dashboard" />
            <Tab label="Products" />
          <Tab label="Contact" />
          <div className={classes.admin} />
          <Tab label="Admin" />
        </Tabs>
      </AppBar>
    </div>
  );
}
