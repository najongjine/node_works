//arr 배열의 각 요소값을 개별변수에 담아서 사용하려고 하고싶을때
var arr = ["a", "b", "c", "d", "e", "f", "g", "h"];

// ES5 이하의 oldversion
//var a = arr[0];
//var b = arr[1];

const [a, b] = arr;

const names = { name: "홍길동", phone: "1234", addr: "서울특별시" };
const { name, phone, addr } = names;

const my = { [name]: "홍길동2", 주소: "ㅁㄴㅁㄴㅇㄴㅇ" };

var ajson = { aa: "aaa" };
var ajson2 = { aaa: ajson };
var { aa } = ajson;
console.log({ aa });
