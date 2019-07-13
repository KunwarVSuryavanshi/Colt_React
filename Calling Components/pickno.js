function randNumber(){
    return(
        Math.floor(Math.random()*10)
    );
}
class PickNo extends React.Component{
    render(){
        const num= randNumber(); 
        let msg;
        if(num === 7){
           msg= <h3>    You Won ! ! !</h3>
        }
        else{
            msg= <h3>
                You Loose :(
            </h3>
        }
        return(
            <div>
                <h1>Your number is: {num}</h1>
                <p>
                    {msg}
                </p>
            </div>
        );
    }
}
ReactDOM.render(<PickNo/> , document.getElementById('root'));