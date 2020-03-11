//json 파일을 변수로 반들기 위함
const path=require("path")
const configPath=path.join(__dirname,"..","config","dataGoKr.json")
const config=require(configPath)

// app.js에서 전역 변수로 사용할수 있게 뱐수를 export
module.exports=config