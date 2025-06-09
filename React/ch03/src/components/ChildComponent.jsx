import { Component } from "react";

class ChildComponent extends Component {
    render(){
        return (
            <div className="ChildComponent">
                <h5>자식 컴포넌트</h5>
                <p>ChildComponent 입니다.</p>                
            </div>
        );
    }
}

export default ChildComponent;