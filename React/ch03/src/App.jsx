import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassTypeComponent from './components/ClassTypeComponent'
import FunctionTypeComponent from './components/FunctionTypeComponent'
import ParentComponent from './components/ParentComponent'

function App() {
  
  return (
    <>
      <h3>3.리액트 컴포넌트 실습</h3>

      {/* 클래스형 컴포넌트 */}
      <ClassTypeComponent />

      {/* 함수형 컴포넌트 */}
      <FunctionTypeComponent />

      {/* 부모자식 컴포넌트 */}
      <ParentComponent />

      <h4>컴포넌트 프로퍼티</h4>

      <h4>컴포넌트 생명주기</h4>

    </>
  )
}

export default App
