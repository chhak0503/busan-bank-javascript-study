/*
    날짜 : 2025/06/09
    이름 : 김철학
    내용 : 모던 자바스크립트 실습
*/
console.log('-- let과 const ------------------')
// let 변수
let count = 1;
count = 2;

console.log(`let 변수 : ${count}`);

// const 상수
const PI = 3.14;
//PI = 1.23; 상수는 재할당 안됨
console.log(`const 변수 : ${PI}`);

// 객체
const person = {
    name: "홍길동",
    age: 21
};

person.name = '김철학';
person.age += 1;

console.log(person);



console.log('-- var와 let 차이 ------------------')

console.log(a); // 호이스팅 현상으로 a값 출력
var a = 1;

//console.log(b); // let 변수는 호이스팅 안됨
let b = 2;
console.log(b);


console.log('-- 템플릿 리터럴 ------------------')
let myName = '홍길동';
let age = 21;

console.log('이름 : ' + myName + ", 나이 : " + age);
console.log(`이름 : ${myName}, 나이 : ${age}`); // Template Literal

console.log('-- 화살표 함수 ------------------')
// 일반 함수
function add1(a, b){
    return a + b;
}

console.log(add1(1, 2));
console.log(add1(3, 4));

// 화살표 함수
const add2 = (a, b) => a + b;

console.log(add2(1, 2));
console.log(add2(-3, 4));

console.log('-- 구조분해할당(Destructuring) ------------------')
{
const person = {
    name: '홍길동',
    age: 21,
    job: '개발자'
};

const { name, age, job} = person; // 구조분해할당
console.log(`name : ${name}, age : ${age}, job : ${job}`);

// 배열 구조분해 할당
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;

console.log(`first : ${first}, second : ${second}, rest : ${rest}`);
}

console.log('-- 전개 연산자(Spread Operator)------------------')
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

const obj1 = {a:1, b:2};
const obj2 = {c:3, d:4};
const obj3 = {...obj1, ...obj2};
console.log(obj3);


console.log('-- 옵셔널 체이닝과 병합 연산자 ------------------')

const user = {
    name: '홍길동',
    address: {
        city: '부산'
    }
};

const zip1 = user.address && user.address.zip;
console.log(`zip1 : ${zip1}`);

const zip2 = user.address?.zip; // 옵셔널 체이닝으로 zip 값 참조
console.log(`zip2 : ${zip2}`);

const zip3 = user.address?.zip ?? '우편번호 없음'; // null 병합 연산
console.log(`zip3 : ${zip3}`);


console.log('--------------------')