// ##############################
// // // Header styles
// #############################

import {
  container,
  defaultFont,
  primaryColor,
  defaultBoxShadow,
  infoColor,
  successColor,
  warningColor,
  dangerColor
} from "assets/jss/material-dashboard-react.jsx";

const headerStyle = theme => ({
  appBar: {
    backgroundColor: "transparent",
    boxShadow: "none",
    borderBottom: "0",
    marginBottom: "0",
    position: "absolute",
    width: "100%",
    paddingTop: "10px",
    zIndex: "1029",
    color: "#555555",
    border: "0",
    borderRadius: "3px",
    padding: "10px 0",
    transition: "all 150ms ease 0s",
    minHeight: "50px",
    display: "block"
  },
  container: {
    ...container,
    minHeight: "50px",
    margin:"0 auto",
    textAlign: "center"
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  flex: {
    flex:1
  },
  title: {
    lineHeight: "30px",
    paddingLeft:"5vw",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",

    float:"left",
    fontFamily: "times, Times New Roman, times-roman, georgia, serif",
      margin: "0",
      padding: "0px 0px 6px 0px",
      fontSize: "40px",
      lineHeight: "44px",
      letterSpacing: "-2px",
      fontWeight: "bold"
  },
  add:{
    ...defaultFont,
    width: "Xu",
    height: "Yu",
    position: "absolute",
    left: "42%",
    fontSize: "18px",
    borderRadius: "3px",
    textTransform: "none",
    color: "inherit",
    "&:hover,&:focus": {
      background: "transparent",
    },
  },
  appResponsive: {
    top: "8px"
  },
  primary: {
    backgroundColor: primaryColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  info: {
    backgroundColor: infoColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  success: {
    backgroundColor: successColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  warning: {
    backgroundColor: warningColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  danger: {
    backgroundColor: dangerColor,
    color: "#FFFFFF",
    ...defaultBoxShadow
  },
  button:{
      borderRadius:"12px"
  }
});

export default headerStyle;
