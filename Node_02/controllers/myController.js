var express=require('express');
var router=express.Router();

// /hello와 함께 path mapping이 된다.
router.get("/",function(req,res){
    // write() 함수를 사용해서 web브라우저에 
    // 문자열 형태로 데이터를 표시하도록 하기
    // write() 문자열들을 잔송하고 끝에 반드시 end()를 전송해 주어야한다.
    // 한줄의 문자열만 전송할때는 write()없이 
    // end() 만 잔송하면 된다.
    res.write("Hello")
    res.end();
})
const retData={
    nation:"korea",
    name:"Hong",
    age:30
}
router.get("/json",function name(req,res) {

    res.json(retData)
})

// router의 callback 함수의 파라메터
// 첫번째 파라매터는 web에서 전송되는 req 정보가 담긴 변수
// 두번째 파라메터(res)는 서버에서 web에게 응답할때 데이터를 담거나 여러
// 정보를 담아서 보낼 객체.
router.get("/view",function name(req,res) {
    res.render("myview",{
        nation:"Korea",
        name:"Hong",
        age:22
    })
})
router.get("/model",function name(req,res) {
    res.render("mymodel",{mydata:retData})
})

// 서버에 req 요청할때 query string 으로 데이터를 보내면
// req.query 객체를 참조하여 값을 받을수 있다.
router.get("/insert",function name(req,res) {
    let name=req.query.name
    let nation=req.query.nation
    let retData={name:name,nation:nation}
    res.json(retData)
})

// path variable 방식으로 데이터를 받기
router.get("/update/:id/:age",function name(req,res) {
    let id=req.params.id
    let age=req.params.age
    let retData={id:id,age:age}
    res.json(retData)
})

router.get("/add",function name(req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.end("숫자가 없어서 덧셈 불가")
})
router.get("/add/:num1",function name(req,res) {
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
    res.end("덧셈을 수행하려면 2개의 숫자를 붙여 보내세요")
})

router.get("/add/:num1/:num2",function name(req,res) {
    let intNum1=parseInt(req.params.num1)
    let intNum2=parseInt(req.params.num2)
    let ret={숫자1:intNum1,숫자2:intNum2,합계:intNum2+intNum1}
    res.json(ret)
})
module.exports=router;