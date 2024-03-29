var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./src/index');
var postsRouter = require('./src/posts/PostRouter');



//importing our db connection
var db = require("./config/Connection");

var app = express();



// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.resolve(__dirname, './client/build')));

app.use('/', indexRouter);
app.use('/posts', postsRouter);

//To make sure all your routes are handled by React after defining all you express routes we will make sure 
//any route that is not handled in express app will be redirected to the index.html in the react app to be handeled like so:
app.get('*', (req, res) => {                       
  res.sendFile(path.resolve(__dirname, "./client/build", 'index.html'));                               
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
