import { createSlice } from '@reduxjs/toolkit';
import { POKEMON, getEvolutionList, getPokemonSprite } from '../data';
import { PokedexInitalState } from '../types';

export const PokedexSlice = createSlice({
    name: "pokedex",
    initialState: {
        pokemons: [
            ...POKEMON.map(pokemon => ({
                id: pokemon.id,
                name: pokemon.name,
                type: pokemon.type,
                baseStat: pokemon.baseStat,
                spriteImage: getPokemonSprite(pokemon.id),
                evolution: getEvolutionList(pokemon.evolution.base)
            }))
        ]
    } as PokedexInitalState,
    reducers: {}
});