import React from "react";
import { withStyles, Button } from "material-ui";
import PropTypes from "prop-types";
import cx from "classnames";

import commentStyle from "assets/jss/material-dashboard-react/commentStyle";

class Comment extends React.Component {
  
   render() {
  const { classes } = this.props;
  return (
      <div className="comment">
        <h2 className="commentAuthor">
          {this.props.author}
        </h2>
        {this.props.children}
      </div>
    );
	}
}

export default withStyles(commentStyle)(Comment);