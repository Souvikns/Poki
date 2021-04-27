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
    },
    {
        id: 3,
        name: PokemonName.charmander,
        type: [Type.fire],
        evolution: {
            base: PokemonName.charmander,
            evolve: 0
        },
        stat: {
            hp: 39,
            attack: 52,
            defense: 43,
            special: 60,
            speed: 65
        }
    },
    {
        id: 4,
        name: PokemonName.charmeleon,
        type: [Type.fire],
        evolution: {
            base: PokemonName.charmander,
            evolve: 1
        },
        stat: {
            hp: 58,
            attack: 64,
            defense: 58,
            special: 80,
            speed: 80
        }
    },
    {
        id: 5,
        name: PokemonName.charizard,
        type: [Type.fire, Type.flying],
        evolution: {
            base: PokemonName.charmander,
            evolve: 2,
        },
        stat: {
            hp: 78,
            attack: 84,
            defense: 78,
            special: 109,
            speed: 100
        }
    }, {
        id: 6,
        name: PokemonName.squirtle,
        type: [Type.water],
        evolution: {
            base: PokemonName.squirtle,
            evolve: 0
        },
        stat: {
            hp: 44,
            attack: 48,
            defense: 65,
            special: 50,
            speed: 43
        }
    },
    {
        id: 7,
        name: PokemonName.wartortle,
        type: [Type.water],
        evolution: {
            base: PokemonName.squirtle,
            evolve: 1
        },
        stat: {
            hp: 59,
            attack: 63,
            defense: 80,
            special: 65,
            speed:  58
        }
    },
    {
        id: 8,
        name: PokemonName.blastoise,
        type: [Type.water],
        evolution: {
            base: PokemonName.squirtle,
            evolve: 2
        },
        stat: {
            hp: 79,
            attack: 83,
            defense: 100,
            special: 85,
            speed: 78
        }
    },
    {
        id: 9,
        name: PokemonName.caterpie,
        type: [Type.bug],
        evolution: {
            base: PokemonName.caterpie,
            evolve: 0
        },
        stat: {
            hp: 45,
            attack: 30,
            defense: 35,
            special: 20,
            speed: 45
        }
    },
    {
        id: 10,
        name: PokemonName.metapod,
        type: [Type.bug],
        evolution: {
            base: PokemonName.caterpie,
            evolve: 1
        },
        stat: {
            hp: 50,
            attack: 20,
            defense: 55,
            special: 25,
            speed: 30
        }
    },
    {
        id: 11,
        name: PokemonName.butterfree,
        type: [Type.bug, Type.flying],
        evolution: {
            base: PokemonName.caterpie,
            evolve: 2
        },
        stat: {
            hp: 60,
            attack: 45,
            defense: 50,
            special: 90,
            speed: 70
        }
    }
]
