import { useState } from "react";

function UseStateComponent(){

    // state 생성 - state는 컴포넌트 내부에서 사용하는 값
    const [count, setCount] = useState(0); 
    const [text, setText] = useState("");
    const [user, setUser] = useState({
                                        uid:"",
                                        name:"",
                                        age:0
                                    });

    return (
        <div className="UseStateComponent">
            <h4>useState() Hook 실습</h4>
            <p>
                상태값 count : {count}
            </p>
            <button onClick={()=>{setCount(count + 1)}}>증가</button>
            <button onClick={()=>{setCount(count - 1)}}>감소</button>

            <p>{text}</p>
            <input type="text" 
                    value={text} 
                    onChange={(e)=>{setText(e.target.value)}} />

            <p>
                아이디 : {user.uid}<br/>
                이름 : {user.name}<br/>
                나이 : {user.age}<br/>
            </p>
            <input type="text" 
                    name="uid"  
                    value={user.uid}  
                    onChange={(e)=>{setUser({...user, uid:e.target.value})}} 
                    /><br/>
            <input type="text" name="name" value={user.name} onChange={(e)=>{setUser({...user, name:e.target.value})}} /><br/>
            <input type="text" name="age"  value={user.age}  onChange={(e)=>{setUser({...user, age:e.target.value})}} /><br/>

        </div>
    );
}

export default UseStateComponent;