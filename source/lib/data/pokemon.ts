import { Pokemon, PokemonName, Type } from '../types';

export const PokemonData: Array<Pokemon> = [
    {
        id: 0,
        name: PokemonName.bulbasaur,
        type: [Type.grass, Type.poison],
        evolution: {
            base: PokemonName.bulbasaur,
            evolve: 0
        }
    },
    {
        id: 1,
        name: PokemonName.ivysaur,
        type: [Type.grass, Type.poison],
        evolution: {
            base: PokemonName.bulbasaur,
            evolve: 1
        }
    },
    {
        id: 2,
        name: PokemonName.venusaur,
        type: [Type.grass, Type.poison],
        evolution: {
            base: PokemonName.bulbasaur,
            evolve: 2
        }
    }
]