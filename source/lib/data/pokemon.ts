import { Type, PokemonName, pokemon } from '../types';

export const pokemonData: Array<pokemon> = [
    {
        id: 0,
        name: PokemonName.bulbasaur,
        height: 0.7,
        weight: 6.9,
        type: [
            Type.grass,
            Type.poison
        ],
        hp: { base: 45, max: 112 },
        cp: {
            max: {
                "15": 477,
                "20": 637,
                "30": 955,
                "40": 1115
            }
        },
        evolution: {
            base: PokemonName.bulbasaur,
            evolve: 0
        }
    }
]