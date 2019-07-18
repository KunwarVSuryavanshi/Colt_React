import React, { Component } from 'react';
import Die from './Die';
import './RandomDice.css';

class RandomDice extends Component{
    static defaultProps={
        faces:['one','two','three','four','five','six']
    };
    constructor(props){
        super(props);
        this.state={die1:"one", die2:"two"};
        this.roll = this.roll.bind(this);
    }
    roll(){
        const newdie1 = this.props.faces[
            Math.floor(Math.random()*this.props.faces.length)
        ];
            
        const newdie2 = this.props.faces[
            Math.floor(Math.random()*this.props.faces.length)
        ];
        this.setState({die1: newdie1,die2:newdie2});
    }
    render(){
    return(
            <div className="RandomDice">
                <div className="RandomDice-Die">
                    <Die face={this.state.die1}/>
                    <Die face={this.state.die2}/>
                </div>
                <div className="RandomDice-Button" >
                    <button  onClick={this.roll}>
                        Roll Dice
                    </button>
                </div>
            </div>
        );
    }
}
export default RandomDice;