# 이미지 갤러리

## multer 미들웨어를 활용한 이미지 업로드 게시판
## mongoDB와 mongoose를 연동하여 데이터 CRUD 구현

## mongoDB의 용어 정리

# db
* RDBMS에서 DB와 같은 역활을 하며 main schema
* show dbs:db들의 목록을 확인하는 명령
* use mydb: mydb라는 이름으로 비어있는 schema를 생성하거나, 이미 있으면 사용할수 있도록 open 하라.

# collection
* RDBMS에서 Table과 같은 역활을 하며 실제 데이터가 저장되는 작은 공간
* show collection:collection의 목록을 확인, 반드시 use db 실행후
* db.collection.query() 명령들
* db.tbl_books.insert({var:val}): tbl_books 라는 컬렉션을 생성하고
 새로운 데이터를 추가하라. 만약 컬렉션이 이미 있으면 기존 컬렉션에 데이터 추가
* db.collection.drop(): 컬렉션을 통째로 삭제

# document
* RDBMS에서 한개의 Record와 같은 역활을 한다.
* db.collection.remove({}): 컬렉션 내의 모든 도큐먼트를 삭제
* db.colletion.find({}): 조회 retrieve, read