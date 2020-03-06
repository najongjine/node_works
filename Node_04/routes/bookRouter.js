var express = require('express');
var router = express.Router();

router.get("/:data/list",function(req,res){
    let data=req.params.data
    if(data=='book'){
        bookVO.find({},function(err,data){
            res.json(data)
        })
    }
    else if(data=='member'){
        memberVO.find({},function(err,data){
            res.json(data)
        })
    }
    else if(data=='address'){
        addressVO.find({},function(err,data){
            res.json(data)
        })
    }
    res.end("list")
})
router.get("/:data/insert",function(req,res){
    //res.render("write")
    res.end("insert")
})
router.post("/:data/insert",function(req,res){
    // id를 기준으로 1개의 데이터를 조회
    // render에 건네주는 코드
    res.end("insert_post")
})
router.get("/:data/:id/update",function(req,res){
    res.end("update")
})
router.put("/:data/:id/update",function(req,res){
    res.end("update_put")
})
router.get("/:data/:id/delete",function(req,res){
    res.end("delete_delete")
})

module.exports=router