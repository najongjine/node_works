var naverBookVO=require('../models/naverBookVO')
var dbSearch=(searchName,offset,pageLimit)=>{
    naverBookVO.find({title:RegExp(searchName,'ig')})
        .limit(pageLimit)
        .skip(offset)
        .sort({title:'asc'})
        .exec((err,data)=>{
            if(err){
                console.log("DB 가져오는중 error")
            }
            else{
                return data
        }
    })
}
module.exports=dbSearch