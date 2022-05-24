import React from "react";
import Pokegame from "./Pokegame";
import './App.css';

function App() {
  const starterPokemon = [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying and bug',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
    {id: 37,  name: 'Vulpix',     type: 'fire',     base_experience: 33},
    {id: 39,  name: 'Jigglypuff', type: 'normal',   base_experience: 95},
    {id: 69,  name: 'Bellsprout', type: 'grass and poison',    base_experience: 250},
    {id: 75,  name: 'Graveler',   type: 'rock and ground',    base_experience: 47},
    {id: 94,  name: 'Gengar',     type: 'ghost and poison',   base_experience: 225},
    {id: 133, name: 'Eevee',      type: 'normal',   base_experience: 65},
    {id: 149, name: 'Dragonite',  type: 'dragon and flying',   base_experience: 209},
    {id: 151, name: 'Mew',        type: 'psychic',  base_experience: 25}

  ]

  const smallerStarterPokemon = [
    {id: 4,   name: 'Charmander', type: 'fire',     base_experience: 62},
    {id: 7,   name: 'Squirtle',   type: 'water',    base_experience: 63},
    {id: 11,  name: 'Metapod',    type: 'bug',      base_experience: 72},
    {id: 12,  name: 'Butterfree', type: 'flying and bug',   base_experience: 178},
    {id: 25,  name: 'Pikachu',    type: 'electric', base_experience: 112},
  ]
  
  return (
    <div className="App">
      <Pokegame pokemonList={starterPokemon}/>
    </div>
  );
}

export default App;
