# nodejs & mongoDB 연동 프로젝트

## nodejs.org에서 nodejs 다운로드 후 설치
* 설치할때는 특별한 경우가 아니면 짝수 버전(lts)를 찾아서 설치
* 홀수 버전의 경우 현재 개발중인 버전으로 버그가 있을수 있으며 기능이 제대로 작동되지 않을수 있다.
* 홀수 버전에는 새로운 기능이 추가되는 경우가 있어서 새로운 기능을 사용해보고 싶으면 설치해도 무방.

## nodejs 추가 framework 설정
* cmd 관리자 모드에서 설치를 해야한다.
* npm(nodejs package managemnt) tool이 기본으로 내장되있고, 필요한 플러그인, 미들웨어, framework 등을 설치할수 있다.
* npm i :local 설치
* npm i -g(global): 전체 시스템 전역적으로 설치.
* npm i -save : 현재 프로젝트의 dependency를 업그레이드하고 그 정보를 프로젝트의 package.json에 저장해 두어라

### express framework 설치
* nodejs + express stack에서 nodejs를 사용한 Web Appl Server(Service)를 작성하는데 필수 framework.
* express, express-generator를 설치.
* express: runtime framework
* express-generator: 프로젝트 생성 도구.

## nodemon: 서버 코드 감시자, demon 설치
* npm i -g nodemon

## mongoDB.com Community 버전 for windows 설치.
* 설치중에 시스템 호환성 문제로 Compass 설치가 지연되거나 설치중 컴퓨터가 멈추는 경우가 간혹있다.
이때는 설치를 강제중단하고 Compass를 제외하고 설치하여도 무방.
* 현재 버전에서는 System path만 지정해주면 대부분 자동으로 설정이 된다.

## mongoDB 기본 명령어들 
* use db 이름: 스키마에 접속하는 명령.
-만약 스키마가 있으면 open을 하고, 없으면 create을 수행한다.
* 대부분의 CRUD명령은 대부분 db.으로 시작한다.
* DB는 모두 JSON DOC 타입으로 구성된다.

* 추가명령: db.x.save({a:1,b:2})
* selectAll: db.x.find({})
* 삭제기능 db.mydb.remove() : 모든 데이터 삭제.
* 새로운 삭제 명령: db.x.deleteOne({name:'lee'}), db.x.deleteMany({name:'lee'})