import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { Grid, InputLabel, withStyles , Select, MenuItem, FormControl, FormHelperText, Input, TextField} from "material-ui";

import commentStyle from "assets/jss/material-dashboard-react/commentStyle";
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "../../components";
class CommentForm extends React.Component {

	state = {
    text: "",
    author:"",
  };
  handleInputChange(e) {
    this.setState({[e.target.name]: e.target.value});
  }
    
  handleSubmit() {
    var author = this.state.author.trim();
    var text = this.state.text.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit(this.props.post, this.props.index, {author: author, text: text});
    this.setState({author: '', text: ''});
  }
   render() {
  const { classes } = this.props;
  return (
  	<RegularCard
            cardTitle="Nuevo comentario"
            cardSubtitle="Completa el formulario  "
            content={
    	<form className="commentForm">
    	<FormControl className={classes.text}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                value = {this.state.author}
                name="author"
          		onChange={(e) => this.handleInputChange(e)}
                rowsMax={2}
                placeholder="Autor"
                />
         </FormControl>
    	<FormControl className={classes.text}>
              <TextField
                InputLabelProps={{
                  shrink: true,
                }}
                value = {this.state.text}
                name="text"
          		onChange={(e) => this.handleInputChange(e)}
                rowsMax={2}
                placeholder="Comentario"
                />
         </FormControl>
      </form>}
      footer={<Button onClick={() => { this.handleSubmit()}} className={classes.button} color="success">Enviar Comentario</Button>}
      />
      );
	}
}

export default withStyles(commentStyle)(CommentForm);