var naver = require("../config/naver_sec")
var express = require('express')
var router = express.Router()
var request = require('request')
var bookVO = require('../models/naverBook')

var reqOptions = (api_url) => {
    var options = {
        url: api_url,
        headers: {
            'X-Naver-Client-Id': naver.client_id,
            'X-Naver-Client-Secret': naver.client_secret
        }
    }
    return options
}

/*
module.exports=function(){} 의 구조
이 모듈을 사용하는 곳에서 
어떤 값을 매개변수로 전달하고자할때
사용하는 코드
*/
// modue.exports=function(){}
// 화살표 함수. ES5 이상에서 사용할수 있는 단축형 함수
// 한가지 단점이 변수 scope가 상당히 민감하다. 특히 this라는 키워드의 변수는
// scope때문에 사용하면서 많은 데스트를 수행해야한다.
// 이유는 function 방식의 함수와는 다르게 작동되기 때문이다.

//router.get("/",function(req,res){
router.get("/", (req, res) => {
    res.render("index")
    //res.end("a")
})
router.post('/book', (req, res) => {
    /*
    router.get 방식으로 form에서 값을 전달하면
    req.query에 변수가 담겨서 전달괴오
    router.post 방식으로 form에서 전달하면 req.body에 담겨서 온다.
    */
    let searchName = req.body.search
    let api_url = naver.book_url
    api_url += '?query=' + encodeURI(searchName)

    /*
    검색을 실행했을때
    1. DB에 해당한느 검색어가 저장되어 있는지 찾아보고
    2. 있으면 DB 내용을 화면에 보여주고
    3. 만약 없으면 naver에서 조회하여 가져온후
    4. DB에 저장
    5. 결과를 화면에 보여라
    */

    bookVO.find({ search: searchName })
        .exec((err, data) => {
            if (err) {
                res.send(err)
            }
            else {
                if (data.length > 0) {
                    res.json(data)
                }
                else {
                    request.get(reqOptions(api_url), (err, response, body) => {
                        if (err) {
                            console.log("naver api error: " + err)
                            res.send(response.statusMessage)
                        } else if (response.statusCode == 200) {
                            var naverJson = JSON.parse(body).items
                            for(let book of naverJson){
                                book.search=searchName
                            }
                            bookVO.collection.insertMany(naverJson,(err,data)=>{
                                res.json(naverJson)
                            })
                        } else {
                            res.send("unknown err")
                        }
                    })
                }
            }
        })

})
module.exports = router
