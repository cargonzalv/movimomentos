import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import {
  ContentCopy,
  Store,
  InfoOutline,
  Warning,
  DateRange,
  LocalOffer,
  Update,
  ArrowUpward,
  AccessTime,
  Accessibility,
  ThumbUp,
  ThumbDown,
  Report
} from "@material-ui/icons";
import { withStyles, Grid, Hidden } from "material-ui";

import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  IconButton,
  Table,
  ItemGrid
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";

let colors = {
  "Hoy aprendí": "orange",
  "Me conmovió":"green",
  "Que loco que":"red",
  "Un héroe en el transporte":"blue",
  "Una alternativa para todos":"purple"
};
class Dashboard extends React.Component {

  componentDidMount(){
    fetch("/posts")
    .then((res)=> res.json())
    .then((jsonRes)=> {
      this.setState({posts:jsonRes.result});

    })

  }
  state = {
    value: 0,
    posts:[]
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    console.log(classes)
    return (
      <div>
        <Grid container>
        {this.state.posts.map((post,i)=>{
          var tit = post.title + "..."
          return (
          <ItemGrid xs={12} sm={12} md={4} key = {i}>
            <RegularCard
              headerColor={colors[post.title]}
              cardTitle={tit}
              cardSubtitle={post.comment}

          footer={
            <div className = {classes.container}>
            <IconButton
              color="info"
              aria-label="Dashboard"
              className={classes.buttonLink}>
              <ThumbUp className={classes.links} />
              <Hidden mdUp>
                  <p className={classes.linkText}>Dashboard</p>
                </Hidden>
              </IconButton>
            <IconButton
              color="danger"
              aria-label="Dashboard"
              className={classes.buttonLink}>
              <ThumbDown className={classes.links} />
              <Hidden mdUp>
                  <p className={classes.linkText}>Dashboard</p>
                </Hidden>
              </IconButton>
            <IconButton
              color="warning"
              aria-label="Dashboard"
              className={classes.buttonLink}>
              <Report className={classes.links} />
              <Hidden mdUp>
                <p className={classes.linkText}>Dashboard</p>
              </Hidden>
            </IconButton>
          </div>}
            />
          </ItemGrid>


            )
        })}
          
        </Grid>
        
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
