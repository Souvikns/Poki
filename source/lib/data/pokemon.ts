import { Pokemon, PokemonName, Type } from '../types';

export const PokemonData: Array<Pokemon> = [
    {
        id: 0,
        name: PokemonName.bulbasaur,
        type: [Type.grass, Type.poison]
    },
    {
        id: 1,
        name: PokemonName.ivysaur,
        type: [Type.grass, Type.poison]
    },
    {
        id: 2,
        name: PokemonName.venusaur,
        type: [Type.grass, Type.poison]
    }
]