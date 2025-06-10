/*
    날짜 : 2025/06/10
    이름 : 김철학
    내용 : 비동기 처리 개요
*/

// 동기처리 방식
console.log('동기 작업 시작...');

const start = Date.now();

for(;;){

    if(Date.now() - start >= 3000){ // 대략 3초
        break;
    }
}

console.log('동기 작업 종료...');

// 비동기 처리 방식
console.log('비동기 작업 시작...');

setTimeout(()=>{

    console.log('비동기 작업 중...');

}, 3000);


console.log('비동기 작업 끝...');

// 콜백함수를 이용한 비동기 처리
function begin(callback){

    setTimeout(()=>{

        console.log('start...');
        callback();

    }, 1000);
}

function end(){
    console.log('end...');
}

begin(end);

// 콜백지옥
function step1(callback){

    setTimeout(()=>{
        console.log('step1...');
        callback();
    }, 1000);
}

function step2(callback){

    setTimeout(()=>{
        console.log('step2...');
        callback();
    }, 1000);
}

function step3(callback){

    setTimeout(()=>{
        console.log('step3...');
        callback();
    }, 1000);
}

step1(function(){
    step2(function(){
        step3(function(){
            console.log('callback end...');
        });
    });
});