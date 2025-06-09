import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Fragment } from 'react';
import styled from 'styled-components'

// 스타일 컴포넌트 정의
const StyledDiv = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid black;
  background: green;
`;

function App() {

  let num1 = 1;
  let num2 = 2;

  const title = 'Hello React!';
  const name = null;
  const isValue = false;

  const result = function(){
    if(isValue){
      return <p>True 입니다.</p>;
    }else{
      return <p>False 입니다.</p>;
    }
  }

  const cities = ['서울', '대전', '대구', '부산', '광주'];
  const users = [
    {uid:'a101', name:'김유신', age: 23, addr:'김해'},
    {uid:'a102', name:'김춘추', age: 21, addr:'경주'},
    {uid:'a103', name:'장보고', age: 33, addr:'완도'},
    {uid:'a104', name:'강감찬', age: 43, addr:'서울'},
    {uid:'a105', name:'이순신', age: 53, addr:'부산'}
  ];

  // 핸들러
  const clickHandler = function(){
    alert('확인2');
  }

  const changeHandler = function(e){
    console.log(`name : ${e.target.name}, value : ${e.target.value}`);
  }

  const textChangeHandler = function(e){
    const textNode = document.getElementsByClassName('resultText')[0];
    textNode.innerText = e.target.value;
  }

  const submitHandler = function(e){
    e.preventDefault();

    const jsonData = {
      uid: e.target.uid.value,
      name: e.target.name.value,
      age: e.target.age.value,
    }
    console.log(jsonData);
  }

  return (
    <>
      <h3>2.리액트 JSX</h3>

      <h4>출력</h4>
      <p>num1 : {num1}</p>
      <p>num2 : {num2}</p>
      <p>title : {title}</p>
      <p>name : {name}</p>
      <p>isValue : {isValue}</p>

      <h4>조건부 연산자</h4>
      <p>
        {num1 > num2 ? (
          <span>num1은 num2보다 크다.</span>
        ) : (
          <span>num1은 num2보다 작다.</span>
        )}
      </p>
      <p>{name === null && <span>name은 null 입니다.</span>}</p>
      <p>{name || <span>name은 null 입니다.</span>}</p>

      {isValue ? (
        <p>isValue 참 입니다.</p>
      ) : (
        <p>isValue 거짓 입니다.</p>
      )}
      
      {result()}

      <h4>반복 연산자</h4>
      <ul>
        {cities.map((city, index)=>(
          <li className="city" key={index}>{city}</li>
        ))}
      </ul>

      {users.map((user)=>(
        <p className="user" key={user.uid}>
          {user.uid}, {user.name}, {user.age}, {user.addr}
        </p>
      ))}

      <h4>JSX Fragment</h4>
      {/* 
        - Fragment는 태그요소를 감싸는 가상 태그
        - 간단하게 <></> 사용
      */}
      <Fragment>
        <p>안녕하세요.</p>
        <p>반갑습니다.</p>
      </Fragment>

      <>
        <p>안녕하세요.</p>
        <p>반갑습니다.</p>
      </>

      <h4>JSX 이벤트</h4>
      <button onClick={()=>alert('확인!')}>버튼1</button>
      <button onClick={clickHandler}>버튼2</button>

      <select name='city' onChange={changeHandler}>
        <option>서울</option>
        <option>대전</option>
        <option>대구</option>
        <option>부산</option>
        <option>광주</option>
      </select>

      <p className='resultText'></p>
      <input type="text" onChange={textChangeHandler} />

      <hr/>

      <form onSubmit={submitHandler}>
        <input type="text" name='uid'/><br/>
        <input type="text" name='name'/><br/>
        <input type="text" name='age'/><br/>
        <input type="submit" value='전송'/><br/>
      </form>

      <h4>JSX 스타일</h4>

      <div style={{
        width: '100px', 
        height: '100px',
        border: '1px solid black',
        background: 'orange'
        }}>box1</div>

      <div className='box2'>box2</div>
      <StyledDiv>box3</StyledDiv>
      <div className='w-[100px] h-[100px] bg-[red] border'>box4</div>
    </>
  )
}

export default App
