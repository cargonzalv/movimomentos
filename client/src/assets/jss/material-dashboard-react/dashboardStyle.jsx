// ##############################
// // // Dashboard styles
// #############################


import {
  grayColor,
  roseColor,
  primaryColor,
  infoColor,
  successColor,
  warningColor,
  dangerColor,
  defaultFont
} from "assets/jss/material-dashboard-react.jsx";

const dashboardStyle =  theme => ({
  successText: {
    color: successColor
  },
  upArrowCardCategory: {
    width: 14,
    height: 14
  },
 buttonLink: {
        margin:"10 10 10 10",
    width:"500px !important",
    height:"500px", 
    [theme.breakpoints.down("sm")]: {
      marginLeft: "30px",
    }
  },
    linkText: {
    zIndex: "4",
    ...defaultFont,
    fontSize: "14px"
  },
  links: {
    width: "20px",
    height: "20px",
    zIndex: "4",

    [theme.breakpoints.down("sm")]: {
      display: "block",
      width: "30px",
      height: "30px",
      color: "#a9afbb",
      marginRight: "15px"
    }
  },
  container:{
    display: "flex",
   
  }
});

export default dashboardStyle;
