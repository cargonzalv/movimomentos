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
    posts:[],
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
    // Within the render method, we will be checking for any sockets.
    // We do it in the render method because it is ran very often.
    socket.on('PostAdded', (result) => {
      let posts = this.state.posts;
      posts.push(result.newPost);
      this.setState({posts:posts});
    })
    socket.on('postUpdated', (result) => {
      let posts = this.state.posts;
      posts[result.index] = result.newPost;
      this.setState({posts:posts});
    })
    return (
      <div>
        <Grid container>
        {this.state.posts.map((post,i)=>{
          console.log(post)
          var tit = post.title + "..."
          let url = post != "" ? window.location.href.replace("home","post/") + post._id : "";
          let string = post.title + " " + post.comment + "\n";
          return (
          <ItemGrid xs={12} sm={12} md={4} key = {i} >
            <RegularCard
              headerColor={colors[post.title]}
              cardTitle={tit}
              cardSubtitle={post.comment}

          footer={
            <div className = {classes.container}>
            <ItemGrid xs={12} sm={12} md={12}  >
            <IconButton
              color="success"
              onClick = {()=>this.handleThumbs(post._id,i,post.likes + 1, post.dislikes)}
              aria-label="Dashboard"
              className={classes.buttonLink}>
              <ThumbUp className={classes.links} />
              <p className={classes.linkText}>{post.likes}</p>
              </IconButton>
            <IconButton
              color="danger"
              onClick = {()=>this.handleThumbs(post._id,i,post.likes,post.dislikes + 1)}
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
                title= {string}
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
            <CommentForm index = {i} post = {post} onCommentSubmit={this.handleCommentSubmit} />
          </div>}
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
