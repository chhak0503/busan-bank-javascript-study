/*
    날짜 : 2025/06/12
    이름 : 김철학
    내용 : 모듈 실습하기
*/

// ES6 Modules
//import { PI, hello } from "./modules/module1.js";
//console.log(PI);
//console.log(hello("홍길동"));

// CommonJS
const m2 = require("./modules/module2.js");
console.log(m2.add(1, 2));
console.log(m2.sub(1, 2));
