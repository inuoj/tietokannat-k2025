var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

//var indexRouter = require('./routes/index');
//var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//app.use('/', indexRouter);
//app.use('/users', usersRouter);

module.exports = app;

const opiskelijaRouter = require('./routes/opiskelija');
app.use('/opiskelija', opiskelijaRouter);

const arviointiRouter = require('./routes/arviointi');
app.use('/arviointi', arviointiRouter);

const opintojaksoRouter = require('./routes/opintojakso');
app.use('/opintojakso', opintojaksoRouter);