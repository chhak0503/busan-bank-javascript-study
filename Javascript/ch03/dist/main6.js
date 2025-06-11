"use strict";
/**
 * 날짜 : 2025/06/11
 * 이름 : 김철학
 * 내용 : 타입스크립트 실습
 *
 * 1) 타입스크립트 설치
 *  > npm install --save-dev typescript
 *
 * 2) 타입스크립트 설정
 *  > npx tsc --init
 *  > tsconfig.json > 62번줄 outDir: ./dist 설정
 *
 * 3) 타입스크립트 컴파일
 *  > npx tsc
 *  > npx tsc --watch
 *
 *
 */
console.log("1) Hello_______________");
let hello = "Hello TypeScript!!!";
console.log(hello);
console.log("2) 기본타입_______________");
let value1 = 1;
let value2 = 1.2;
let value3 = true;
let value4 = "A";
let value5 = "Hello";
let value6 = undefined;
let value7 = null;
let value8 = 1;
value8 = "welcome";
let value9 = "greeting";
if (typeof value9 === "string") {
    value9 = value9.toUpperCase();
}
console.log(`value1 : ${value1}`);
console.log(`value2 : ${value2}`);
console.log(`value3 : ${value3}`);
console.log(`value4 : ${value4}`);
console.log(`value5 : ${value5}`);
console.log(`value6 : ${value6}`);
console.log(`value7 : ${value7}`);
console.log(`value8 : ${value8}`);
console.log(`value9 : ${value9}`);
console.log("3) 배열과 튜플_______________");
let list1 = [1, 2, 3];
let list2 = ["apple", "banana", "cherry"];
// 튜플 : 타입과 갯수가 정해진 배열
let t1 = ["hello", 11];
console.log(`list1 : ${list1}`);
console.log(`list1 : ${list2}`);
console.log(`t1 : ${t1}`);
console.log("4) 함수_______________");
function plus(value1, value2) {
    return value1 + value2;
}
function greeting(name) {
    return `Hello~ ${name}`;
}
function welcome() {
    console.log(`Welcome!`);
}
function error(message) {
    // never: 함수가 정상종료가 아닌 예외가 발생하는 함수 반환 타입
    throw new Error(message);
}
console.log("5) 클래스_______________");
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    hello() {
        console.log(`${this.name}, ${this.age} 입니다.`);
    }
}
const hong = new Person("홍길동", 21);
hong.hello();
console.log("6) 상속_______________");
class Animal {
    constructor(name) {
        this.name = name;
    }
    move(distance) {
        console.log(`${this.name}이(가) ${distance}미터 뜁니다.`);
    }
}
class Dog extends Animal {
    bark() {
        console.log(`${this.name}이(가) 멍멍 짖습니다.`);
    }
}
const myDog = new Dog("순돌");
myDog.move(5);
myDog.bark();
console.log("7) 인터페이스_______________");
const user1 = {
    name: "홍길동",
    age: 21,
};
console.log(user1);
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    drive() {
        console.log(`${this.brand} 운행 중...`);
    }
}
const sonata = new Car("소나타");
const granduer = new Car("그랜저");
sonata.drive();
granduer.drive();
console.log("8) 제네릭_______________");
function identity(arg) {
    return arg;
}
const result1 = identity("hello");
const result2 = identity(1);
console.log(result1);
console.log(result2);
console.log("9) 기타타입_______________");
// 유니언 타입(둘 이상의 타입을 가지는 타입)
let userid; // userid값이 number 또는 string
userid = 100;
console.log(`userid : ${userid}`);
userid = "abc123";
console.log(`userid : ${userid}`);
let weight = 70;
let height = 1.75;
console.log(`weight : ${weight}`);
console.log(`height : ${height}`);
// 타입 가드
function isNumber(x) {
    return typeof x === "number";
}
console.log(`isNumber : ` + isNumber(1));
console.log(`isNumber : ` + isNumber("number"));
// Nullable
let var1 = "hello";
//var1 = null;
let var2 = "welcome";
console.log(`var2 : ${var2}`);
var2 = null;
console.log(`var2 : ${var2}`);
let text1 = "hello";
let text2 = null;
let text3 = undefined;
let text4 = "welcome";
console.log(`text1 : ${text1}`);
console.log(`text2 : ${text2}`);
console.log(`text3 : ${text3}`);
console.log(`text4 : ${text4}`);
