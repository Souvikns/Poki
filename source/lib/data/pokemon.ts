import { _Pokemon, PokemonName, Type } from '../types';

export const PokemonData: Array<_Pokemon> = [
    {
        id: 0,
        name: PokemonName.bulbasaur,
        type: [Type.grass, Type.poison],
        evolution: {
            base: PokemonName.bulbasaur,
            evolve: 0
        },
        stat: {
            hp: 45,
            attack: 49,
            defense: 49,
            special: 65,
            speed: 45
        }
    },
    {
        id: 1,
        name: PokemonName.ivysaur,
        type: [Type.grass, Type.poison],
        evolution: {
            base: PokemonName.bulbasaur,
            evolve: 1
        },
        stat: {
            hp: 60,
            attack: 62,
            defense: 63,
            special: 80,
            speed: 60
        }
    },
    {
        id: 2,
        name: PokemonName.venusaur,
        type: [Type.grass, Type.poison],
        evolution: {
            base: PokemonName.bulbasaur,
            evolve: 2
        },
        stat: {
            hp: 80,
            attack: 82,
            defense: 83,
            special: 100,
            speed: 80,
        }
    }
]
