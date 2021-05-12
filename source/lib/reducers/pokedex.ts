import { createSlice } from '@reduxjs/toolkit';
import { pokemonData, getPokemonSprite } from '../data'

const Pokedex = createSlice({
    name: "pokedex",
    initialState: {
        // TODO: List of pokemons but only the data that we need for pokedex
        pokemons: [...pokemonData.map(pokemon => ({
            id: pokemon.id,
            name: pokemon.name,
            type: pokemon.type,
            baseStat: pokemon.baseStat,
            spriteImage: getPokemonSprite(pokemon.id)
        }))]
    },
    reducers: {}
});

export default Pokedex.reducer;