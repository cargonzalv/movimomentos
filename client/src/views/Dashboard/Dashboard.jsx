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

class Dashboard extends React.Component {
  state = {
    value: 0
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
          <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
              headerColor="orange"
              cardTitle="loremExercitation eu reprehenderit cupidatat tempor laborum veniam dolore consectetur elit ex ut in duis in ut."
              cardSubtitle="Dolore id occaecat ut."

          footer={
          <div>
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
          <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
              headerColor="blue"
              cardTitle="loremExercitation eu reprehenderit cupidatat tempor laborum veniam dolore consectetur elit ex ut in duis in ut."
              cardSubtitle="Dolore id occaecat ut."

          footer={
            <div>
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
          </div>
        }
            />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={4}>
            <RegularCard
              headerColor="red"
              cardTitle="loremExercitation eu reprehenderit cupidatat tempor laborum veniam dolore consectetur elit ex ut in duis in ut."
              cardSubtitle="Dolore id occaecat ut."

          footer={
            <div>
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
          </div>
          }
            />
          </ItemGrid>
        </Grid>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={6}>
            <TasksCard />
          </ItemGrid>
          <ItemGrid xs={12} sm={12} md={6}>
            <RegularCard
              headerColor="orange"
              cardTitle="Employees Stats"
              cardSubtitle="New employees on 15th September, 2016"
              content={
                <Table
                  tableHeaderColor="warning"
                  tableHead={["ID", "Name", "Salary", "Country"]}
                  tableData={[
                    ["1", "Dakota Rice", "$36,738", "Niger"],
                    ["2", "Minerva Hooper", "$23,789", "Curaçao"],
                    ["3", "Sage Rodriguez", "$56,142", "Netherlands"],
                    ["4", "Philip Chaney", "$38,735", "Korea, South"]
                  ]}
                />
              }
            />
          </ItemGrid>
        </Grid>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
