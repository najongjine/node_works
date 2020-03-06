var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bookRouter=require("./routes/bookRouter")
var crudRouter=require("./routes/crudRouter")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// book 이라는 데이터 관점(지향에서) 바라본 path 구조
// 일반적으로 익숙한 http req path를 restfull 방식으로 구현한것
// localhost:3000/book/list
// localhost:3000/book/insert
// localhost:3000/book/update
// localhost:3000/book/delete
app.use("/book",bookRouter)

// 내가 'CRUD'를 수행하고 싶은데
// 어떤 '데이터'를 '어떻게' 할것인가에 관점(지향)을 둔
// Restfull 에서 권장하는 path 구현 방식
// Resource 지향 Restfull 이라고 한다.
// localhost:3000/crud/:id/list
//-->/crud/book/list
//-->/crud/member/list
//-->/crud/address/list
app.use("/crud",crudRouter)

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
