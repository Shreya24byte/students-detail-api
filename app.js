//Modules imported
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//Routes
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

//Instance of express
const app = express();

//NPM module related code
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Route definitions
app.use('/', indexRouter);
app.use('/student', usersRouter);

module.exports = app;
