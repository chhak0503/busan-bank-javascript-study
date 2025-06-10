/*
    날짜 : 2025/06/10
    이름 : 김철학
    내용 : 함수형 프로그래밍 개요
*/

/////////////////////////////
// 순수함수
/////////////////////////////
function add(a, b){
    return a + b;
}

console.log(add(1, 2));
console.log(add(2, 3));

// 부수효과
let count = 0;

function increment(){

    count++;

    return count;
}

console.log(increment());
console.log(increment());


/////////////////////////////
// 불변성
/////////////////////////////
const originalArr = [1, 2, 3];
const newArr = [...originalArr, 4];

console.log(originalArr);
console.log(newArr);


const user = {
    name: '홍길동',
    age: 21
};

// 불변성이 깨짐
//user.age = 31;
console.log(user);

// 불변성을 유지
const updateUser = {...user, age: 31};
console.log(updateUser);



/////////////////////////////
// 일급함수
/////////////////////////////

const greeting = function(name) {
    return `Hello, ${name}`;
};

console.log(greeting('홍길동'));


/////////////////////////////
// 고차함수
/////////////////////////////

// 고차 함수: 함수를 인자로 받는 함수
function applyOperation(num, operation) {
  return operation(num);
}

function square(x) {
  return x * x;
}

console.log(applyOperation(5, square)); // 25


// 고차 함수: 함수를 반환하는 함수
function createMultiplier(factor) {
    
  return function(num) {
    return num * factor;
  };
}

const multiplyByTwo = createMultiplier(2);
console.log(multiplyByTwo(7)); // 14



/////////////////////////////
// 합성함수
/////////////////////////////

function toUpperCase(str) {
  return str.toUpperCase();
}

function addExclamation(str) {
  return `${str}!`;
}

function compose(...funcs) {

  return function(initialValue) {
    return funcs.reduceRight((acc, fn) => fn(acc), initialValue);
  };
}

const excitedGreeting = compose(addExclamation, toUpperCase);
console.log(excitedGreeting("hello")); // HELLO!

/////////////////////////////
// 선언형
/////////////////////////////

// 명령형(어떻게)
let result1 = [];
for(let i = 0 ; i < 10 ; i++){
    if(i % 2 == 0){
        result1.push(i);
    }
}

console.log(result1);

// 선언형(무엇을)
const result2 = Array.from({length:10}, (_, i) => i ).filter( i => i % 2 == 0 );
console.log(result2);