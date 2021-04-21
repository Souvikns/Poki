import { pokemonData } from '../data/pokemon';
import { PokemonName } from '../types'

describe("pokemon data should", () => {
    test("have bulabasour", () => {
        expect(pokemonData[0]?.name).toMatch(PokemonName.bulbasaur);
    })
})
