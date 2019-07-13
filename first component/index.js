
/*----------------------------CLASS COMPONENT--------------------------------------------*/

class Hello extends React.Component{
    render(){
        return(
            <h1>
                Hello World!!!
            </h1>
        );
    }
}

/*----------------------------FUNCTION COMPONENT--------------------------------------------*/

function Hello(){
    return(
        <h1>
            Hello Worldz!!!
        </h1>
    );
}

ReactDOM.render(<Hello/>, document.getElementById('root'));