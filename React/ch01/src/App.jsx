import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


/*
  날짜 : 2025/06/09
  이름 : 김철학
  내용 : 1장 리액트 개요


  <프로젝트 생성 및 실행>
  > npm create vite@latest
  > cd ch01
  > npm install
  > npm run dev

  <주요 구성 파일>
  index.html
   - React 애플리케이션 시작 페이지
   - div id=root 태그에 렌더링

  main.jsx
   - React 애플리케이션 진입 파일
   - index.html에서 로드

  App.jsx
   - React 애플리케이션 메인 컴포넌트
   - JSX로 렌더링 요소 출력 
*/

function App() {
  
  return (
    <>
      <h3>1장 React 개요</h3>
      <p>Hello World!</p>
      <p>Hello React!</p>
    </>
  )
}

export default App
