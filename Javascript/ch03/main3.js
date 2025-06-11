/**
 * 날짜 : 2025/06/11
 * 이름 : 김철학
 * 내용 : 캡슐화와 정보은닉
 * *
 */

// 클로저 방식
function Person(name, age) {
  // 은닉이 필요한 정보
  let _name = name;
  let _age = age;

  return {
    getName: function () {
      return _name;
    },
    getAge: function () {
      return _age;
    },
    setName: function (name) {
      _name = name;
    },
    setAge: function (age) {
      _age = age;
    },
    greet: function () {
      console.log(`Hello, ${_name}, ${_age} 입니다.`);
    },
  };
}

const person = Person("홍길동", 20);
person.setName("김유신");
person.greet();

console.log(person._name); // 직접 접근 안됨

// Symbol 방식
const _age = Symbol("age");
const _name = Symbol("name");

class Person2 {
  constructor(name, age) {
    this[_name] = name;
    this[_age] = age;
  }

  getName() {
    return this[_name];
  }
  setName(value) {
    this[_name] = value;
  }

  getAge() {
    return this[_age];
  }
  setAge(value) {
    this[_age] = value;
  }

  greet() {
    console.log(
      `안녕하세요, 제 이름은 ${this[_name]}이고 ${this[_age]}살입니다.`
    );
  }
}

const person2 = new Person2("홍길동", 30);
person2.greet();

console.log(person2.getName()); // "홍길동"
console.log(person2._name); // undefined (직접 접근 불가)

// 비공개 필드 방식
class Account {
  // 비공개 필드(#으로 시작)
  #balance = 0;

  constructor(balance) {
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    return false;
  }

  withdraw(amount) {
    if (amount > 0) {
      this.#balance -= amount;
      return true;
    }
    return false;
  }

  getBalance() {
    return this.#balance;
  }
}

const account = new Account(10000);
account.deposit(40000);
account.withdraw(5000);

//account.#balance += 10; // 직접 접근 불가
//account.balance += 10; // 직접 접근 불가

console.log(account.getBalance()); // 1000
