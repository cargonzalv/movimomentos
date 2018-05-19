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
  Report,
  Comment
} from "@material-ui/icons";
import {
  FacebookShareButton,
  GooglePlusShareButton,
  TwitterShareButton,
  FacebookIcon,
  TwitterIcon,
  TelegramIcon,
  WhatsappIcon,
  GooglePlusIcon,
  LinkedinIcon,
  PinterestIcon,
  VKIcon,
  OKIcon,
  RedditIcon,
  TumblrIcon,
  LivejournalIcon,
  MailruIcon,
  EmailIcon,
} from 'react-share';
import { withStyles, Grid, Hidden } from "material-ui";
import  io from 'socket.io-client'; 
import {
  StatsCard,
  ChartCard,
  TasksCard,
  RegularCard,
  IconButton,
  Table,
  ItemGrid,
  CommentList,
  CommentForm
} from "components";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts";

import dashboardStyle from "assets/jss/material-dashboard-react/dashboardStyle";
import Twitter from 'material-ui-next-community-icons/icons/twitter';

const socket = io()  

let colors = {
  "Hoy aprendí": "orange",
  "Me conmovió":"green",
  "Que loco que":"red",
  "Un héroe en el transporte":"blue",
  "Una alternativa para todos":"purple"
};
class DetailedDashboard extends React.Component {

 componentDidMount(){
    fetch("/posts/"+this.props.match.params.id)
    .then((res)=> res.json())
    .then((jsonRes)=> {
      this.setState({post:jsonRes.result});
    })

  }
  state = {
    value: 0,
    post:[],
    showComments:{}
  };
  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };

  handleThumbs(postId,index,likes,dislikes){
   // this emits an event to the socket (your server) with an argument of 'red'
    
    socket.emit('updatePost', {
        likes: likes, 
        dislikes:dislikes,
        postId:postId,
        index: index
      }) 
     
  }
  handleComments(id){
    let showComments = this.state.showComments;
    showComments[id] = showComments[id] != undefined ? !showComments[id] : true
    this.setState({showComments:this.state.showComments})
     
  }
  handleCommentSubmit(post, index,  comment){
    let newComments = post.comments;
    newComments.push(comment);
    socket.emit('updatePost', {
        comments: newComments,
        postId: post._id
      }) 
  }
  render() {
    const { classes } = this.props;
    socket.on('errorUpdating', (result) => {
      if(result.id == socket.id){
        console.log(result)
        this.setState({errorMessages:result.error.errors})
    }
    })
    
    socket.on('postUpdated', (result) => {
      if(result.newPost._id == this.state.post){
        this.setState({post:result.newPost})
      }
    })
    let post = this.state.post ? this.state.post : "";
          let url = post != "" ?  window.location.href: "";
    let string = post.title + " " + post.comment + "\n";
    return (
      <div>
        <Grid container>
          <ItemGrid xs={12} sm={12} md={12} >
            <RegularCard
              headerColor={colors[post.title]}
              cardTitle={post.title}
              cardSubtitle={post.comment}

          footer={
            <div className = {classes.container}>
            <ItemGrid xs={12} sm={12} md={12}  >
            <IconButton
              color="success"
              onClick = {()=>this.handleThumbs(post._id,post.likes + 1, post.dislikes)}
              aria-label="Dashboard"
              className={classes.buttonLink}>
              <ThumbUp className={classes.links} />
              <p className={classes.linkText}>{post.likes}</p>
              </IconButton>
            <IconButton
              color="danger"
              onClick = {()=>this.handleThumbs(post._id,post.likes,post.dislikes + 1)}
              aria-label="Dashboard"
              className={classes.buttonLink}>
              <ThumbDown className={classes.links} />
              <p className={classes.linkText}>{post.dislikes}</p>
              </IconButton>

            <IconButton
              color="warning"
              aria-label="Dashboard"
              onClick = {()=>this.handleComments(post._id)}
              className={classes.buttonLink}>
              <Comment className={classes.links} />
            </IconButton>
            </ItemGrid>
            <ItemGrid xs={12} sm={12} md={12} className={classes.container} >
              <TwitterShareButton
                url={url}
                title={string}
                via={"movimomentos"}
                className={classes.twitter}>
                <TwitterIcon
                  size={40}
                  round />
          </TwitterShareButton>
              </ItemGrid>
          </div>}
            />

            {this.state.showComments[post._id] && <div className="commentBox">
            <CommentList data = {post.comments} />
            <CommentForm  post = {post} onCommentSubmit={this.handleCommentSubmit} />
          </div>}
          </ItemGrid>       
        </Grid>
        
      </div>
    );
  }
}

DetailedDashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(DetailedDashboard);
