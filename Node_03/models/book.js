/*
js 의 변수 선언자
var: 전역변수, 현재 모듈(*.js) 어디에서나
값을 읽고 쓸수있는 선언.

const: 상수, 현재 모듈 어디에서나 값을 읽을수 있고
 최초 한번만 값을 할당할수 있다.

 let: 지역변수, 현재 함수 내에서만 값을 읽고 쓸수 있으며 함수를 벗어나면 변수가 해제된다.
*/
var mong=require("mongoose")
var bookModel=mong.Schema({
    BName:{
       type: String,
       require:true, // not null
       unique:true, // unique
       trim:true
    },
    BComp:String,
    BWriter:String,
    BPrice:Number,
    BYear:{
        type:String,
        lowercase:true
    }
})
/*
model()의 설정하는 document(book) 이름을 반드시 단수로 지정하는것이 좋다.
실제 DB에 저장 될때는 document이름이 복수로 변경되어 저장.
mongo consol에서 조회를할때는 다음과같이
db.books.find({})
*/
module.exports=mong.model("book",bookModel)