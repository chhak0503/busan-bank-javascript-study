/*
    날짜 : 2025/06/09
    이름 : 김철학
    내용 : 클로저 실습
*/

const x = 1;

function outer() {
	const x = 10;

    // 클로저 - 외부함수 반환되는 내부함수		
    return function() {
		console.log(x);
	};
}

const innerFunc = outer();
innerFunc();


// 클로저 활용
function makeCounter(){
    let count = 0;

    return function(){
        count++;
        console.log(count);
    }
}

const count1 = makeCounter();
const count2 = makeCounter();

count1();
count1();
count1();

count2();
count2();

count1();
