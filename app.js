var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//  Handlebars partials support
const hbs = require('hbs');

//  Route files
var indexRouter = require('./app_server/routes/index');
var travelRouter = require('./app_server/routes/travel'); 
console.log('travelRouter is:', travelRouter);

var app = express();

//  View engine setup (pointing to app_server/views)
app.set('views', path.join(__dirname, 'app_server', 'views'));
app.set('view engine', 'hbs');

//  Register partials directory
hbs.registerPartials(path.join(__dirname, 'app_server', 'views', 'partials'));

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//  Routes
app.use('/', indexRouter);
app.use('/travel', travelRouter); 

// 404 handler
app.use(function(req, res, next) {
  next(createError(404));
});

// Error handler
app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;