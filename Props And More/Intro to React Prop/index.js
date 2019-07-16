class App extends React.Component{
    render(){
        return(
            <div>
                Inside Index.js
                <Hello to="Kunwar" from="Kunwari" bangs={3}/>
            </div>
        );
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));