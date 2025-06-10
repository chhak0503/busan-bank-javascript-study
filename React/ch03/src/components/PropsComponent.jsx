
function PropsComponent(props) { 
    // props : 상위 컴포넌트에서 하위 컴포넌트로 전달되는 값

    return (
        <div className="PropsComponent">
            <h4>PropsComponent</h4>
            <p>
                title : {props.title}<br/>
                message : {props.message}<br/>
            </p>
        </div>
    );
}

export default PropsComponent;