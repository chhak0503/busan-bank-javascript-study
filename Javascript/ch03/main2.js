/**
 * 날짜 : 2025/06/11
 * 이름 : 김철학
 * 내용 : 클래스 실습
 * *
 */

class Person {
  // 생성자
  constructor(name) {
    this.name = name;
  }

  // 프로토타입 메서드
  sayHello() {
    console.log(`Hello~ My name is ${this.name}`);
  }

  // 정적 메서드
  static sayHi() {
    console.log(`Hi!`);
  }
}

// 객체 생성(인스턴스)
const me = new Person("홍길동");

console.log(me.name); // 객체 속성을 직접 참조는 안좋음

me.sayHello();

// 정적메서드 호출
//Person.sayHello();
Person.sayHi();

// 클래스 일반 메서드 실습
class Dog {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }

  bark() {
    console.log("멍멍!");
  }

  introduce() {
    console.log(`이름: ${this.name}, 종 : ${this.breed}`);
  }
}

const myDog = new Dog("순돌이", "푸들");
myDog.bark(); // 일반 메서드 호출
myDog.introduce(); // 일반 메서드 호출

// 클래스 정적 메서드
class MathUtils {
  static add(a, b) {
    return a + b;
  }

  static multiply(a, b) {
    return a * b;
  }
}

console.log(MathUtils.add(5, 3)); // 정적 메서드 호출
console.log(MathUtils.multiply(2, 3)); // 정적 메서드 호출

// 접근자 프로퍼티
class Circle {
  constructor(radius) {
    this._radius = radius; // 내부적으로 사용할 속성 (관례적으로 _ 접두사 사용)
  }

  get radius() {
    console.log("Getter 호출됨: 반지름 반환");
    return this._radius;
  }

  set radius(newRadius) {
    console.log("Setter 호출됨: 반지름 설정");
    this._radius = newRadius;
  }

  get area() {
    return Math.PI * this._radius * this._radius;
  }
}

const circle = new Circle(5);
console.log(circle.radius); // Getter 호출
circle.radius = 10; // Setter 호출
console.log(circle.area); // Getter를 통해 _radius에 접근하여 넓이 계산

// 클래스 필드
class Rectangle {
  width; // public 필드
  height = 10; // public 필드 (초기값 할당)
  #color; // private 필드

  constructor(width, color) {
    this.width = width;
    this.#color = color;
  }

  getColor() {
    return this.#color; // private 필드 접근
  }
}

const rect = new Rectangle(5, "blue");
console.log(rect.width);
console.log(rect.height);
console.log(rect.getColor());
