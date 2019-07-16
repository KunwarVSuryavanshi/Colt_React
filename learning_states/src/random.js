import React, { Component } from 'react';

class Random extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.state={
            num : null 
        }
    }
    handleClick(e){
        let rand_num = Math.floor(Math.random()*10);
        this.setState({num: rand_num})
    }
    render(){
        return(
            <div>
                <h1>
                    Your number is : {this.state.num}
                </h1>
                {this.state.num === 7 && <h2>You Won!!!</h2>}
                {this.state.num != 7 &&<button onClick = {this.handleClick}>
                    Random Number
                </button>}
            </div>
        );
    }
}
export default Random;