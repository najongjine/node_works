var express = require("express");
var router = express.Router();
var bbsVO = require("../models/bbsVO");
var moment = require("moment");
var cors = require("cors");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");

var app = express();
app.use(cors());
var corsOption = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200 // IE 버전때문에
};

router.get("/", cors(corsOption), (req, res) => {
  /*
  cors 모듈없이 CORS 정책을 허용하기위한 설정
  모든 router에 공통으로 설정을 해야한다.
  */
  //res.header("Access-Control-Allow-Origin", "*");
  //res.header("Access-Control-Allow-Headers", "X-requested-With");
  bbsVO.find({}).exec((err, data) => {
    res.json(data);
  });
});
router.post("/insert", cors(corsOption), (req, res) => {
  console.log("title: ", req.body.b_title);
  req.body.b_date = moment().format("YYYY[-]MM[-]DD");
  req.body.b_time = moment().format("HH:mm:ss");
  var bbs = new bbsVO(req.body);
  bbs.save((err, data) => {
    res.json(data);
  });
});
module.exports = router;
