/*
    날짜 : 2025/06/10
    이름 : 김철학
    내용 : 이벤트 루프와 태스크 큐
*/

// 교재 p42-04
function foo(){
    console.log('foo...');
}

function bar(){
    console.log('bar...');
}

setTimeout(foo, 0); // foo함수는 태스크 큐에 등록되어 이벤트루프에 의해 실행
bar(); // bar함수는 바로 콜스택에 등록 실행

// 마이크로 태스트 큐
console.log('Start!!');

setTimeout(()=>{
    console.log('setTimeout!!!');
}, 0);

Promise.resolve().then(()=>{
    console.log('Promise then!!!'); // 마이크로 태스큐로 등록되어 매크로 태스크 작업보다 우선순위 높음
});

console.log('End!!');
