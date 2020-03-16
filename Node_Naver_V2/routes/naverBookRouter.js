var express = require('express')
var router = express.Router()
var naverApiSec = require('../config/naver_sec')
var request = require('request')
var naverBookVO = require('../models/naverBookVO')
var paginate = require('express-paginate')
var dbSearch = require('../service/dbSearch')

var naverReqOptions = (api_url) => {
    var options = {
        url: api_url,
        headers: {
            'X-Naver-Client-Id': naverApiSec.clientId,
            'X-Naver-Client-Secret': naverApiSec.clientSecret
        }
    }
    return options
}

module.exports = (app) => {
    app.use(paginate.middleware(10, 50))
    const pageLimit = 10
    router.all(function (req, res, next) {
        if (req.query.limit <= 10) req.query.limit = 10
        next()
    })

    router.get('/', (req, res) => {
        var searchName = req.query.searchName
        console.log("페이지번호: " + req.query.page)
        var offset = (req.query.page - 1) * pageLimit

        naverBookVO.count({ title: RegExp(searchName, 'ig') })
            .exec((err, dataCount) => {
                console.log("데이터 개수1 : " + dataCount)
                var pageCount = Math.ceil(dataCount / pageLimit)
                naverBookVO.find({ title: RegExp(searchName, 'ig') })
                    .limit(pageLimit)
                    .skip(offset)
                    .sort({ title: 'asc' })
                    .exec((err, data) => {
                        var dataCount = Object.keys(data).length
                        var pageArray = paginate.getArrayPages(req)(
                            pageLimit, pageCount, req.query.page
                        )
                        console.log(" DB 데이터 조회중")
                        if (dataCount < 1) {
                            console.log("네이버 api 진입 시도")
                            console.log("네이버 api 진입")
                            let api_url = naverApiSec.url
                            //let d_title=""
                            api_url += '?query=' + encodeURI(searchName)
                            //api_url+='&start=1'
                            api_url += '&display=100'
                            request.get(naverReqOptions(api_url), (err, response, body) => {
                                if (err) {
                                    console.log("네이버 api 받는중 에러")
                                    return false
                                    //res.send(err)
                                } else if (response.statusCode == 200) {
                                    var resultJson = JSON.parse(body).items
                                    console.log("api 에서 가져옴")
                                    for(let book of resultJson){
                                        book.search=searchName
                                    }
                                    naverBookVO.collection.insertMany(resultJson, (err, data) => {
                                        if (err) {
                                            res.send("DB 삽입중 에러 발생")
                                        }
                                        else {
                                            console.log("데이터 삽입 했음")
                                            res.redirect("/naverBook?searchName="+searchName)
                                        }
                                    })

                                }//api get 성공
                                else {
                                    //res.send("unkown error")
                                    console.log("네이버 api 받는중 에러")
                                    return false
                                }
                            })//api 호출
                        }// naver api
                        else {
                            console.log("DB에서 가져옴")
                            //res.json(data)
                            res.render("index", {
                                naverBooks: data,
                                pageCount: pageCount,
                                itemCount: dataCount,//전체 개수
                                currentPage: req.query.page,
                                pages: pageArray
                            })
                        }// DB
                    })
            })
    })

    return router
}