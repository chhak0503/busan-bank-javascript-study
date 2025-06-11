/**
 * 날짜 : 2025/06/11
 * 이름 : 김철학
 * 내용 : 객체지향 프로그래밍 실습
 * *
 */

// 객체(리터럴) 생성
const person = {
  name: "홍길동",
  age: 21,
  address: "부산",
};

console.log("이름 : " + person.name);
console.log("나이 : " + person.age);
console.log("주소 : " + person.address);

const user = {
  name: "김유신",
  age: 21,
  hello() {
    console.log(`안녕하세요. ${this.name}입니다.`);
  },
};

user.hello();

// 생성자 함수
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.hello = function () {
    console.log(`안녕하세요. ${this.name}입니다.`);
  };
}

// 객체생성
const kim = new Person("김춘추", 23);
const lee = new Person("이순신", 23);

kim.hello();
lee.hello();

// 클래스
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  hello() {
    console.log(`안녕하세요. ${this.name}입니다.`);
  }
}

const jang = new User("장보고", 33);
jang.hello();

// 프로토타입
function Person2(name) {
  this.name = name;
}

// 프로토타입 메서드
Person2.prototype.sayHello = function () {
  console.log(`Hello~ My name is ${this.name}`);
};

const me = new Person2("정약용", 22);
me.sayHello();

console.log(Person2.prototype === me.__proto__);

function Dog(name, breed) {
  this.name = name;
  this.breed = breed;

  this.bark = function () {
    console.log("멍멍!");
  };
}

// 프로토타입을 이용한 기능 추가
Dog.prototype.speak = function () {
  console.log(`${this.name} 멍멍!`);
};

const dog1 = new Dog("바둑이", "진돗개");
const dog2 = new Dog("순돌이", "푸들");

dog1.bark();
dog2.speak();
