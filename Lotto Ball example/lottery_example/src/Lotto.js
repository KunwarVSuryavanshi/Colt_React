import React, { Component } from 'react';
import Balls from './Balls';
import './Lottery.css'
class Lotto extends Component{
    static defaultProps={
        title : 'Lotto',
        maxBalls : 6,
        maxNum : 40
    }
    constructor(props){
        super(props)
        this.state={nums:Array.from({ length: this.props.maxBalls})};
        this.handleClick=this.handleClick.bind(this);
    }
    generate(){
        this.setState(
            curState =>({
                nums: curState.nums.map(
                   n => Math.floor(Math.random()*this.props.maxNum)
                )
            }    
            )
        );
        
    }
    handleClick(){
        this.generate();
    }
    render(){
        return(
            <div className="Lottery">
                <h1>{this.props.title}</h1>
                <div>
                    {this.state.nums.map(n => <Balls num={n}/>)}
                </div>
                <button className="Lottery-button" onClick={this.handleClick}>Generate</button>
            </div>
        );
    }
}
export default Lotto;