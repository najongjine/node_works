var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '반갑' });
});

router.post('/insert',function(req,res){
	//내용처리
})

router.get('/hello',function(req,res){
	res.write("반갑")
	res.end()
})
module.exports = router;
