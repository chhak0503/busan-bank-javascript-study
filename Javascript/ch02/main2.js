/*
    날짜 : 2025/06/10
    이름 : 김철학
    내용 : 고차함수 활용
*/

// map() - 배열의 각 원소에 함수를 적용해서 새로운 배열 생성
const numbers = [1, 2, 3, 4, 5];

const newNumbers = numbers.map((num)=>{ return num * num });
const resultNumbers = numbers.map( num => num % 2 == 0);
console.log(newNumbers);
console.log(resultNumbers);

const users = [
    {id: 1, name: '김유신', age: 23},
    {id: 2, name: '김춘추', age: 21},
    {id: 3, name: '장보고', age: 33},
];


const names = users.map(user => user.name);
console.log(names);

// filter() - 특정 조건에 만족하는 원소만 필터링
const evenNumbers = numbers.filter((num)=> num % 2 == 0 );
console.log(evenNumbers);

const ageOver30 = users.filter( user => user.age >= 30);
console.log(ageOver30);

// reduce() - 배열 원소를 특정 연산으로 축소
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log('sum : ' + sum);

// forEach() - 배열 원소를 반복
numbers.forEach((num, i)=>{
    console.log(`numbers[${i}] : ${num}`);
});

// sort() - 배열 원소 정렬
const unOrderedNumbers = [2, 1, 4, 7, 5];

const ascendingNumbers = unOrderedNumbers.sort();
console.log(ascendingNumbers);

const decendingNumbers = unOrderedNumbers.sort((a, b) => b - a); // 비교함수
console.log(decendingNumbers);

// find() - 조건을 만족하는 첫번째 원소 검색
const user = users.find(user => user.name == '김춘추');
console.log(user);

// some(), every() - 조건을 만족하는 원소가 하나라도 있으면 some, 모두 만족하면 every
const result1 = numbers.some(num => num > 3);
const result2 = numbers.every(num => num > 0);

console.log(`result1 : ${result1}`);
console.log(`result2 : ${result2}`);


// 이벤트 처리
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

btn1.onclick = function(){
    alert('버튼1 클릭!');
};

btn2.addEventListener('click', function(){
    alert('버튼2 클릭!');
});


// 커링
function multiply(a, b) {
    return a * b;
}
  
function curriedMultiply(a) {
    
    return function(b) {
        return multiply(a, b);
    };
}
  
const multiplyByTwo = curriedMultiply(2);
console.log(multiplyByTwo(5));

// 합성함수
function add1(num) {
    return num + 1;
}
  
function mul2(num) {
    return num * 2;
}
  
// 두 함수를 합성하는 함수
function compose(func1, func2) {
    
    return function(x) {
        return func1(func2(x));
    };
}
  
const add1AndMul2 = compose(add1, mul2);
  
console.log(add1AndMul2(3));