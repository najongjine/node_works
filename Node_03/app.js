// 미들웨어 설정하기
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose=require("mongoose")
//미들웨어

// mongoDB 연결설정 객체 가져오기
// mongoose를 통해서 mongoDB와 연결하여 어떤 기능을 수행할때
// 정상수행, 오류발생등의 감시를 하기위한 객체 선언
var dbConn=mongoose.connection

// dbConn에게 감시 이벤트 선언
dbConn.on("error",function(){
  console.err
})

// 프로젝트 시작될때 한번만 감시를 하고
// 이후 연결이 유지되면 더이상 감시하지 말라.
dbConn.once("open",function(){
  console.log("MongoDB opened")
})
dbConn.on("disconnected",function(){
  console.log("mongoDB closed")
})
dbConn.on("connected",function(){
  console.log("mongoDB connected")
})
// 커넥션 생성
mongoose.connect("mongodb://localhost/mydb")

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

// 작성한 myRouter.js를 사용할수 있도록 등록하기
// require로 요청할때는 .js는 일반적으로 생략.
// 객체 생성
var myRouter=require("./routes/myRouter")

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.use("/book",myRouter)

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
