// ##############################
// // // App styles
// #############################

import { drawerWidth, transition, container } from "assets/jss/material-dashboard-react.jsx";

const userProfileStyle = theme => ({
  wrapper: {
    position: "relative",
    top: "0",
    height: "100vh"
  },
  mainPanel: {

    overflow: "auto",
    position: "relative",
    ...transition,
    maxHeight: "100%",
    width: "100%",
    overflowScrolling: 'touch'
  },
  content: {
    flex: "1",
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: "calc(100% - 123px)"
  },
  item:{
    margin:"100px",
    position:"absolute"
  },
  container,
  map: {
    marginTop: "70px"
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  text: {
    minWidth: 400,
    marginTop:"3%",
    marginLeft:"5%"
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },

});

export default userProfileStyle;
