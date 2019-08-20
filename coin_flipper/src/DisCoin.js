import React, { Component } from 'react';
import {choice} from './helpers';
import Coinz from './coin';
class Coin extends Component{
    static defaultProps={
        coins:[
            {side:"heads",url:"./head.jpg"},
            {side:"tails",url:"./tail.jpg"}
        ]
    }
    constructor(props){
        super(props);
        this.state={
            currFlip:null,
            nhead: 0,
            ntail: 0,
            nflip: 0
        }
        this.handleclick=this.handleclick.bind(this);
    }
    flipCoin(){
        const newCoin= choice(this.props.coins);
        this.setState(st=>{
            let newState={
                ...st,
                currFlip : newCoin,
                nflip: st.nflip+1
            }
            if(newCoin.side==="heads"){
               newState.nhead+=1;
            }
            if(newCoin.side==="tails"){
                newState.ntail+=1;
            }
            return newState;
        });
    }
    handleclick(e){
        this.flipCoin();
    }
    render(){
        return(
            <div className="Coin">
                <h1>Let's flip a coin</h1>
                {this.state.currFlip && <Coinz info={this.state.currFlip}/>}
                <button onClick={this.handleclick}> Flip Coin !</button>
                <h3>Out of {this.state.nflip} flips, there have been {this.state.nhead} heads and {this.state.ntail} tails.</h3>
            </div>
        );
    }
}
export default Coin;