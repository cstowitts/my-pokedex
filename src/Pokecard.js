import React from "react";
import './Pokecard.css';

/** A single entry for a Pokemon in a Pokedex
 * 
 * Props:
 * - pokemonData: an object containing a single pokemon's 
 *   id, name, type, and base_experience
 *      ex: {id: 4,   
 *          name: 'Charmander', 
 *          type: 'fire',     
 *          base_experience: 62}
 * 
 * State: none
 * 
 * Pokedex -> Pokecard
 */
function Pokecard({ pokemonData }){

    return (
        <div className="Pokecard container" key={pokemonData.id}>
            <p className="pokecard poke-name">
                {pokemonData.name}
            </p>
            <img className="pokecard poke-pic"
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonData.id}.png`} alt={`A sprite of a ${pokemonData.name} from Nintendo's Pokemon game series`}>
            </img>
            <p className="pokecard poke-type">
                {pokemonData.type}
            </p>
            <p className="pokecard poke-exp">
                {pokemonData.base_experience}
            </p>
        </div>
    )
}


export default Pokecard;