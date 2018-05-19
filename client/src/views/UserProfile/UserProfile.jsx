import React from "react";
import { Grid, InputLabel, withStyles , Select, MenuItem, FormControl, FormHelperText, Input, TextField} from "material-ui";

import PropTypes from "prop-types";
import  io from 'socket.io-client'; 
import {
  ProfileCard,
  RegularCard,
  Button,
  CustomInput,
  ItemGrid
} from "components";

import avatar from "assets/img/faces/marc.jpg";
import userProfileStyle from "assets/jss/material-dashboard-react/userProfileStyle";

const socket = io()  

const frases = [
                "Hoy aprendí",
                "Me conmovió",
                "Que loco que",
                "Un héroe en el transporte",
                "Una alternativa para todos"
                ]

class UserProfile extends React.Component {

 state = {
    prefix: '',
    text:'',
    errorMessages:"",
  };
  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value , errorMessages : ""});
  };

  handleClick(){
    
    // this emits an event to the socket (your server) with an argument of 'red'
    
    socket.emit('addPost', {
        title: this.state.prefix, 
        comment: this.state.text
      }) 
     
  }
  render(){
    socket.on('errorSaving', (result) => {
      if(result.id == socket.id){
        console.log(result)
      this.setState({errorMessages:result.error.errors})
    }
    })
    socket.on('PostAdded', (result) => {

      if(socket.id == result.id){
        console.log(result)

      this.props.history.push("/dashboard");
    }
    })

     const {classes} = this.props;
     var titleError = this.state.errorMessages.title ? this.state.errorMessages.title.message : "Con este prefijo empezará tu comentario";
      var commentError = this.state.errorMessages.comment ? this.state.errorMessages.comment.message : "Ingresa tu comentario";
    return (
    <div>
      <Grid container className = {classes.content}>
        <ItemGrid xs={8} sm={8} md={8}>
          <RegularCard
            cardTitle="Nuevo comentario"
            cardSubtitle="Completa el formulario  "
            content={
             <form className={classes.root} autoComplete="on">
              
              <FormControl className={classes.formControl} error={this.state.errorMessages.title ? true: false}>
                <InputLabel htmlFor="prefix-helper">Prefijo</InputLabel>
                <Select
                  value={this.state.prefix}
                  onChange={this.handleChange}
                  input={<Input name="prefix" id="prefix-helper" />}


                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {frases.map((frase,i)=>{
                    var fraseMostrar = frase + "...";
                    return(
                      <MenuItem key = {i} value={frase}>{fraseMostrar}</MenuItem>

                      )
                  })
                }

                </Select>
                <FormHelperText>{titleError}</FormHelperText>
              </FormControl>
                            <br />

              <FormControl className={classes.text}>
              <TextField
                multiline={true}
                InputLabelProps={{
                  shrink: true,
                }}
                value = {this.state.text}
                name="text"
                error={this.state.errorMessages.comment ? true: false}
                onChange={this.handleChange}
                rowsMax={2}
                placeholder="Comentario"
                helperText={commentError}
                />
                </FormControl>
              
            </form>
            }
            footer={<Button onClick={() => { this.handleClick()}} className={classes.button} color="success">Enviar Comentario</Button>}
          />
        </ItemGrid>
      </Grid>
    </div>
  );
  }
 
}

UserProfile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(userProfileStyle)(UserProfile);
