import React, {Component} from 'react';
import './Pokecard.css';

const POKE_API= 'https://raw.githubusercontent.com/PokeAPI/pokeapi/master/data/Pokemon_XY_Sprites/';

class Pokecard extends Component{
    render(){
        let imgSrc = `${POKE_API}${this.props.id}.png`;    //Disturbing
        return(
            <div className="Pokecard">
                <h1 className="Pokecard-title">{this.props.name}</h1>
                <img src={imgSrc} alt="charmander.png"/>
                <div>TYPE: {this.props.type}</div>
                <div>EXP: {this.props.exp}</div>
            </div>
        );
    }
}

export default Pokecard;