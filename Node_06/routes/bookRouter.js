//express framework를 사용한
//router 생성
var express=require("express")
var router=express.Router()
var bookVO=require("../models/bookVO")
//selectAll
router.get("/",function(req,res){
    bookVO.find({},function(err,books){
        res.render("book/list",{books:books})
    })
})
router.get("/insert",function(req,res){
    var book=new bookVO()
    res.render("book/write",{book:book,formTitle:"INSERT"})
})
router.post("/insert",function(req,res){
    var book=new bookVO(req.body)
    book.save({book:book},function(err,data){
        res.redirect("/book")
    })
})
router.get("/update/:id",function(req,res){
    bookVO.findOne({_id:req.params.id},function(err,book){
        res.render("book/write",{book:book,formTitle:'UPDATE'})
    })
})
router.post("/update/:id",function(req,res){
    let id=req.params.id
    bookVO.update({_id:id},{$set:req.body},function(err,data){
        res.redirect("/book")
    })
})
router.get("/delete/:id",function(req,res){
    let id=req.params.id
    bookVO.deleteOne({_id:id},function(err,data){
        res.redirect("/book")
    })
})
module.exports=router