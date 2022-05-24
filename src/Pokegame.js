import React, {useState} from "react";
import Pokedex from "./Pokedex";

/** Takes a list of pokemon and assigns them into two hands, each rendered as a Pokedex component.
 * 
 * Props:
 * - pokemonList: a list containing pokemon objects
 *   where each pokemon object includes: 
 *      id, name, type, and base_experience
 *      ex: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}, {}, ...]
 * 
 * State: 
 * - playerHands: an object containing each player's hand of pokemon
 *   where the key is the player and its value is an array of pokemon objects
 *      ex: { player1: [{id: 4, name: 'Charmander', type: 'fire', base_experience: 62}, {}, ...],
 *            player2: [{}, {}...]
 *          }
 *
 * App -> Pokegame -> Pokedex
 */
function Pokegame({ pokemonList }){
    console.debug("In Pokegame, pokemonList prop: ", pokemonList);

    const [playerHands, setPlayerHands] = useState({player1: [], player2: []});

    /** Selects a random number between 0 and the max */
    function pickRandFromMax(max){
        return Math.floor(Math.random() * max);
    }
        
    /** Mutates an array by randomly selecting and removing an element from it. 
     * 
     * Arguments:
     * - arr: an array of elements
     * 
     * Returns:
     * - an array of the removed element and the mutated array
     */
    function pickRandAndRemove(arr){
        if(arr.length === 0) return "nothing to pick from";

        //pick a random index between 0 and arr.length-1 (last idx)
        const idx = pickRandFromMax(arr.length - 1);
        // console.log("idx: ", idx);

        //select the element from the arr at that random idx and remove it from the array, 
        const randomPick = arr.splice(idx, 1);
        // console.log("random pokemon: ", randomPick);
        // console.log("after splice, original array: ", arr);
        return [randomPick, arr];
    }

    /** Takes an arr of pokemon info objects and assigns them randomly to two hands of 4 pokemon.
     * 
     * if the list of available pokemon information is less than 8, 
     * this fn will assign 
     */
    function assignPokeHands(pokelist){
        console.debug("inside assignPokeHands function! pokelist: ", pokelist);

        const player1Hand = [];
        const player2Hand = [];

        if(pokelist.length < 8){
            while(pokelist.length > 0){
                player1Hand.push((pickRandAndRemove(pokelist))[0][0]);
                if(pokelist.length > 0){
                    player2Hand.push((pickRandAndRemove(pokelist))[0][0]);
                } else {
                    break;
                }
            }
        } else {
            for(let i = 0; i < 4; i++){
                player1Hand.push((pickRandAndRemove(pokelist))[0][0]);
                player2Hand.push((pickRandAndRemove(pokelist))[0][0]);
            }
        }
        setPlayerHands({player1: player1Hand, player2: player2Hand});
    }
    console.log("line 81, pre assignPokeHands call, pokemonList: ", pokemonList);
    assignPokeHands(pokemonList);

    return (
        <div class="Pokegame container">
            <Pokedex pokemonlist={playerHands.player1} />
            <Pokedex pokemonlist={playerHands.player2} />
        </div>
    )
}


export default Pokegame;