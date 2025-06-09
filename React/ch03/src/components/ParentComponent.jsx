import { Component } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends Component {

    render(){
        return (
            <div className="ParentComponent">
                <h4>부모 컴포넌트</h4>
                <ChildComponent />
            </div>
        );
    }
}

export default ParentComponent;