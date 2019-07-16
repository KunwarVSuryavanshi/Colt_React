import React, { Component } from 'react';
import './Pokedex.css';
import Pokecard from './Pokecard';

class Pokedex extends Component{
    static defaultProps = {
        pokemon :
            [
            {"id": 1, name: "Bulbasaur", type:"Fire",exp:62},
            {"id": 2, name: "Ivysaur", type: "Water",exp:92},
            {"id": 4, name: "Charmander", type:"Fire",exp:34},
            {"id": 5, name: "Charmeleon", type:"Water",exp:42},
            {"id": 6, name: "Charizard", type:"Electric",exp:52},
            {"id": 7, name: "Squirtle", type: "Flying",exp:109},
            {"id": 8, name: "Wartortle", type:"water",exp:17},
            {"id": 9, name: "Blastoise", type:"Normal",exp:23},
            {"id": 10, name: "Caterpie", type: "Bug",exp:66},
            {"id": 3, name: "Venusaur", type: "Earth",exp:80}
            ]
        };
    render(){
        return(
            <div className="Pokedex">
                <h2>Total experience : {this.props.exp}</h2>
                <h3 className={this.props.iswinner?'Pokedex-Winner':'Pokedex-Loser'}>{this.props.iswinner ?'Winning Hand !!!':'Losing Hand !!'}</h3>
                <div className="Pokedex-cards">
                    {this.props.pokemon.map((p) =>(
                        <Pokecard
                        id={p.id}
                        name={p.name} 
                        type={p.type}
                        exp={p.exp}
                        />
                    ) )}   
                </div>          
            </div>
        );
    }
}

export default Pokedex;