import React from "react";
import PropTypes from "prop-types";
import { Menu } from "@material-ui/icons";
import { NavLink } from "react-router-dom";
import {Add} from "@material-ui/icons";

import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button,
  ListItem,
  Icon,
  ListItemIcon,
  ListItemText,
} from "material-ui";
import cx from "classnames";

import headerStyle from "assets/jss/material-dashboard-react/headerStyle.jsx";

import HeaderLinks from "./HeaderLinks";

function Header({ ...props }) {

  const { classes, color } = props;
  const appBarClasses = cx({
    [" " + classes[color]]: color
  });
  return (
    <AppBar className={classes.appBar + appBarClasses}>
      <Toolbar className={classes.container}>
        <div className={classes.flex}>

        <NavLink className={classes.title}
            to="/home"
          >
        MoviMomentos
        </NavLink>

         
          <NavLink className={classes.add}
            to="/add"
          >
           <Button className={classes.button} variant="raised" color="primary">
           Añadir Comentario
              <Add className={classes.rightIcon} />
            </Button>
          </NavLink>
        </div>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
