/*
    날짜 : 2025/06/10
    이름 : 김철학
    내용 : async/await 실습
*/

// async - 비동기 함수를 선언하는 키워드
async function hello(str){

    console.log(str);
    return str;
}

hello('hi')
    .then((value)=>{
        console.log('value : ' + value);
    })
    .catch((err)=>{
        console.log(err);
    });

// await - 비동기함수 처리를 대기하는 키워드
async function fetchData(url){

    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
}

fetchData('http://localhost:3000/todos/2');