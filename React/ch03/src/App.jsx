import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassTypeComponent from './components/ClassTypeComponent'
import FunctionTypeComponent from './components/FunctionTypeComponent'
import ParentComponent from './components/ParentComponent'
import PropsComponent from './components/PropsComponent'
import ContentComponent from './components/ContentComponent'
import LifeCycleComponent from './components/LifeCycleComponent'

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

      {/* 프로퍼티 컴포넌트 */}
      <PropsComponent title="제목입니다." message="내용입니다." />

      {/* 내용을 갖는 컴포넌트 */}
      <ContentComponent>
        <h5>제목 입니다.</h5>
        <p>내용 입니다.</p>
      </ContentComponent>

      {/* 컴포넌트 생명주기 */}
      <LifeCycleComponent/>



    </>
  )
}

export default App
