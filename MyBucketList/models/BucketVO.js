var mongoose = require("mongoose");
var bucketVO = mongoose.Schema({
  bName: String,
  bDate: String,
  bPrice: Number,
  bText: String,
  bUploadedFName: String, //이미지를 업로드할때 변환된 이름
  bOriginalFName: String
});
module.exports = mongoose.model("tbl_bucket", bucketVO);
