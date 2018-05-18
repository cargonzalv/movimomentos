import React from "react";
import PropTypes from "prop-types";
import { Menu } from "@material-ui/icons";
import { NavLink } from "react-router-dom";

import {
  withStyles,
  AppBar,
  Toolbar,
  IconButton,
  Hidden,
  Button,
  ListItem,
  ListItemIcon,
  ListItemText
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
            to="/dashboard"
          >
        MoviMomentos
        </NavLink>

         
          <NavLink className={classes.add}
            to="/user"
          >
           Añadir Comentario
          </NavLink>
          
        </div>
        <Hidden smDown implementation="css">
          <HeaderLinks />
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.appResponsive}
            color="inherit"
            aria-label="open drawer"
            onClick={props.handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf(["primary", "info", "success", "warning", "danger"])
};

export default withStyles(headerStyle)(Header);
