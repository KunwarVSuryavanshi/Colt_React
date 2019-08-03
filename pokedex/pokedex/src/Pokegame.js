import React, {Component } from 'react';
import Pokedex from './Pokedex';


class Pokegame extends Component{
    static defaultProps = {
        pokemon :
            [
            {"id": 1, name: "Bulbasaur", type:"Fire",exp:62},
            {"id": 2, name: "Ivysaur", type: "Water",exp:92},
            {"id": 4, name: "Charmander", type:"Fire",exp:34},
            {"id": 5, name: "Charmeleon", type:"Fire",exp:42},
            {"id": 25, name: "Pikachu",  type:"Electric",exp:52},
            {"id": 7, name: "Squirtle", type: "Water",exp:109},
            {"id": 121, name: "Starmie", type:"Water",exp:17},
            {"id": 9, name: "Blastoise", type:"Normal",exp:23},
            {"id": 10, name: "Caterpie", type: "Bug",exp:66},
            {"id": 471, name: "Glaceon", type: "Earth",exp:80}
            ]
        };
    render(){
        let hand1=[];
        let hand2=[...this.props.pokemon];
        while(hand1.length<hand2.length){
            let randx = Math.floor(Math.random()*hand2.length);
            let randPokemon= hand2.splice(randx,1)[0];
            hand1.push(randPokemon);
        }
        let exp1 =hand1.reduce((exp,pokemon) =>exp+pokemon.exp,0);
        let exp2 =hand2.reduce((exp,pokemon) =>exp+pokemon.exp,0);
        return(
            <div>
                <Pokedex pokemon={hand1} iswinner={exp1>exp2} exp={exp1}/>
                <Pokedex pokemon={hand2}  iswinner={exp2>exp1} exp={exp2}/>
            </div>
        );
    }
}
export default Pokegame;