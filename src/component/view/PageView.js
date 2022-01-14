
function PageView(props){
    return (
        <div className="App-main-view" {...props}>
            {props.children}
        </div>
    );
}

export default PageView;