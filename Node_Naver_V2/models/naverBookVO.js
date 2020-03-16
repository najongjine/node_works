/*
"title": "<b>Undefined</b>",
"link": "http://book.naver.com/bookdb/book_detail.php?bid=6115486",
"image": "https://bookthumb-phinf.pstatic.net/cover/061/154/06115486.jpg?type=m1&udate=20091102",
"author": "Kristina Dizard",
"price": "22500",
"discount": "",
"publisher": "Authorhouse",
"pubdate": "20090430",
"isbn": "1438954387 9781438954387",
"description": "When th
*/
var mongoose=require('mongoose')
var naverBookVO=mongoose.Schema({
    search:String,//검색어로 사용하기 위한 칼럼
    title:String,
    link:String,
    image:String,
    author:String,
    price:Number,
    discount:Number,
    publisher:String,
    pubdate:String,
    isbn:{
        type:String,
        unique:true//같은 도서 저장 금지
    },
    description:String
})
module.exports=mongoose.model('tbl_naverBook',naverBookVO)