/*
    날짜 : 2025/06/12
    이름 : 김철학
    내용 : ES6 모듈 실습하기
*/

// 여러개 export 가져오기
import { add, div, mul, num1, num2, num3, num4, sub } from "./modules/calcs.js";

console.log(`num1 : ${num1}`);
console.log(`num2 : ${num2}`);
console.log(`num3 : ${num3}`);
console.log(`num4 : ${num4}`);
console.log(`add : ${add(1, 2)}`);
console.log(`sub : ${sub(1, 2)}`);
console.log(`mul : ${mul(3, 2)}`);
console.log(`div : ${div(4, 2)}`);

// 기본 export 가져오기
import Calculator from "./modules/Calculator.js";

const calc = new Calculator();
console.log(`calc.add : ${calc.add(2, 3)}`);
console.log(`calc.sub : ${calc.sub(1, 3)}`);
console.log(`calc.mul : ${calc.mul(4, 3)}`);
console.log(`calc.div : ${calc.div(9, 3)}`);

// 전체 가져오기
import * as cls from "./modules/calcs.js";

console.log(`cls.num1 : ${cls.num1}`);
console.log(`cls.num2 : ${cls.num2}`);
console.log(`cls.num3 : ${cls.num3}`);
console.log(`cls.num4 : ${cls.num4}`);
console.log(`cls.add : ${add(1, 2)}`);
console.log(`cls.sub : ${sub(1, 2)}`);
console.log(`cls.mul : ${mul(2, 3)}`);
console.log(`cls.div : ${div(4, 2)}`);
