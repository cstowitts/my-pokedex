import React from "react";
import './Pokedex.css';
import Pokecard from './Pokecard'; 

/** A collection of Pokecards
 * 
 * Props:
 * - pokemonList: a list containing pokemon objects
 *   where each pokemon object includes: 
 *      id, name, type, and base_experience
 *      ex: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}, {}, ...]
 * 
 * State: none
 * 
 * App -> Pokedex -> Pokecard
 */
function Pokedex({ pokemonList }){
    console.log("in Pokedex, line 18. pokemonList = ", pokemonList);
    return (
        <div className="Pokedex container">
            {pokemonList.map(pokemon => <Pokecard pokemonData={pokemon}/>)}
        </div>
    )
}


export default Pokedex;