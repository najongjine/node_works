var express = require("express");
var router = express.Router();
var moment = require("moment");
require("moment-timezone");
moment.tz.setDefault("Asia/Seoul");
var path = require("path");
var multer = require("multer");
var bucketVO = require("../models/BucketVO");
//파일을 '어디에 어떻게' 업로드 할것인가를 설정하는 객체만들기
// destination:어디에 저장할 것인가 에 대한 실행코드
// filename:업로드할때 원본파일이름->uploadFileName으로 변경하는 코드가 있고
// 그 코드에서 filename을 생성해준다
// filename:업로드할때 변환된 파일정보
var saveOptions = multer.diskStorage({
  destination: (req, file, callBackFunc) => {
    //현재 폴더에서 한단계 위로 올라가서 public폴더를 찾고 upload폴더를 찾아라
    //Node_Gallery_V1/public/uploads 형식으로 문자열 생성
    var uploadPath = path.join(__dirname, "/../", "public", "uploads");
    console.log("!!! uploadpath:" + uploadPath);
    callBackFunc(null, uploadPath);
  },
  filename: (req, file, callBackFunc) => {
    // 업로드된 파일이름을 변환하여 해킹에 대비
    var uploadFileName = Date.now() + "_" + file.originalname;
    callBackFunc(null, uploadFileName);
  }
});

//multer 라는 함수(클래스)에 json 매개변수를 넘겨줌.
// 이 개념 통째를 saveFile 이라는 객체로 정의. JS에선 객체 자체가 1급 함수임.
//실제로 파일을 업로드하는 함수
var saveFile = multer({ storage: saveOptions }).single("bOriginalFName");

router.get("/", (req, res) => {
  bucketVO.find({}).exec((err, data) => {
    res.render("index", { bucketList: data });
  });
});
router.get("/detail/:id", (req, res) => {
  let id = req.params.id;
  bucketVO.findById({ _id: id }).exec((err, data) => {
    res.render("myBucketList/detail", { bucketVO: data });
  });
});
router.get("/insert", (req, res) => {
  var bucketvo = new bucketVO();
  res.render("myBucketList/upload", { bucketVO: bucketvo });
});

router.post("/insert", (req, res) => {
  //saveFile 이라는 1급 객체를 실행하면서 (req, res) 를 매개변수로 주고, ()=> callback func에 err를 넘겨줌.
  // 최상위 함수에서 전달받은 값을 callback 함수에서 공유해서 쓰고 있는 구조.
  saveFile(req, res, err => {
    if (err) {
      console.log(err);
      res.send("파일 업로드 오류");
    } else {
      // 원래 req.file 객체는 web form에서 업로드한 파일에 대한 정보만 담겨있다.
      // 그중 .originalname 은 원본 파일 이름이다.
      if (req.file != null) {
        let originalname = req.file.originalname;
        req.body.bOriginalFName = originalname;
        req.body.bUploadedFName = req.file.filename;
      }

      var vo = new bucketVO(req.body);
      var _bDate = moment().format("YYYY[-]MM[-]DD");
      console.log("날짜: ", _bDate);
      vo.bDate = _bDate;

      //vo 객체에서 save라는 함수를 실행하고 나서 call back 함수에 err, data를 넘겨줌.
      vo.save((err, data) => {
        res.redirect("/myBucketList");
      });
    }
  });
});
router.get("/update/:id", (req, res) => {
  let id = req.params.id;
  bucketVO.findOne({ _id: id }, (err, data) => {
    res.render("myBucketList/upload", { bucketVO: data });
  });
});
router.post("/update/:id", (req, res) => {
  let id = req.params.id;
  saveFile(req, res, err => {
    if (err) {
      console.log(err);
      res.send("파일 업로드 오류");
    } else {
      if (req.file != null) {
        let originalname = req.file.originalname;
        req.body.bOriginalFName = originalname;
        req.body.bUploadedFName = req.file.filename;
      }
      bucketVO.update({ _id: id }, { $set: req.body }, (err, data) => {
        if (err) {
          res.send("에러발생 : ", err);
        } else {
          res.redirect("/myBucketList");
        }
      });
    }
  });
});
router.get("/delete/:id", (req, res) => {
  let id = req.params.id;
  bucketVO.deleteOne({ _id: id }).exec((err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.redirect("/myBucketList");
    }
  });
});

module.exports = router;
