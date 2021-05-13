import { createSlice } from '@reduxjs/toolkit';
import { pokemonData, getPokemonSprite, getEvolutionList } from '../data'

const Pokedex = createSlice({
    name: "pokedex",
    initialState: {
        pokemons: [...pokemonData.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            type: pokemon.type,
            baseStat: pokemon.baseStat,
            spriteImage: getPokemonSprite(pokemon.id),
            evolution: getEvolutionList(pokemon.evolution.base)
        }))]
    },
    reducers: {}
});

export default Pokedex.reducer;