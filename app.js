var express = require('express'),
    app = express(),
    path = require('path');
    bodyParser = require('body-parser'),
    logger = require('morgan'),
    methodOverride = require('method-override');

require('locus');

// view engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '/views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// routes

var users = require('./routes/users');
var posts = require('./routes/posts');
app.use('/users/:id/posts', posts);
app.use('/users', users);

// start server
app.set('port', (process.env.PORT || 9001));
app.listen(app.get('port'),() => {
  console.log('The Server is OVER 9000!!!');
});
