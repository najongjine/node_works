var express=require("express")
var router=express.Router()

var bookModel=require("../model/book")

router.get("/",function(req,res){
    bookModel.find({},function(err,list){
        res.render("bookList",{bookList:list})
    })
})
router.get("/insert",function(req,res){
    var book=new bookModel()
    res.render("bookInput",{book:book,mode:"insert"})
})
router.post("/insert",function(req,res){
    var newBookModel=new bookModel(req.body)
    newBookModel.save(newBookModel,function(err,data){
        res.redirect("/")
    })
})
router.get("/update/:_id",function(req,res){
    var _id=req.params._id
    bookModel.findById(_id,function(err,data){
        res.render("bookInput",{book:data,mode:"update"})
    })
})
router.post("/update/:_id",function(req,res){
    var _id=req.params._id
    console.log("!!! update post:"+_id)
    bookModel.update({_id:_id},{$set:req.body},function(err,data){
        res.redirect("/")
    })
})
router.get("/delete/:_id",function(req,res){
    var _id=req.params._id
    console.log("!!! delete get:"+_id)
    bookModel.deleteOne({_id:_id},function(err,data){
        res.redirect("/")
    })
})

module.exports=router