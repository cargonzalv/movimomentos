import React from "react";
import PropTypes from "prop-types";
import Comment from "./Comment"
import commentStyle from "assets/jss/material-dashboard-react/commentStyle";
import RegularCard from "../Cards/RegularCard"
import {
  withStyles,
  Card,
  CardContent,
  CardHeader,
  CardActions
} from "material-ui";
import cx from "classnames";

class CommentList extends React.Component {

  render() {

  const { classes,
    headerColor,
    plainCard,
    cardTitle,
    cardSubtitle,
    content,
    footer } = this.props;
  const plainCardClasses = cx({
    [" " + classes.cardPlain]: plainCard
  });
   const cardPlainHeaderClasses = cx({
    [" " + classes.cardPlainHeader]: plainCard
  });
  var commentNodes = this.props.data.map(function(comment,i) {
    let author = "Posted by: " + comment.author;
      return (
        <CardHeader key = {i}
        classes={{
          root:
            classes.cardHeader +
            " " +
            classes[headerColor + "CardHeader"] +
            cardPlainHeaderClasses,
          title: classes.cardTitle,
          subheader: classes.cardSubtitle
        }}
        title={comment.text}
        subheader={comment.author}
      />
      );
    });
  return (
    	<div>
                {commentNodes}
      	</div>
  		);
	}
}

CommentList.defaultProps = {
  headerColor: "green"
};

export default withStyles(commentStyle)(CommentList);
