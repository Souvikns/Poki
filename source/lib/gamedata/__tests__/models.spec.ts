import { Pokemon } from '../models/pokemon';
import { PokemonType } from '../../types';
import {Reader} from '../models/reader';

let pokemon: Pokemon | undefined;

describe('Pokemon model should have', () => {
    beforeAll(() => {
        pokemon = new Pokemon("Charizard", [PokemonType.fire, PokemonType.flying]);
    })

    test("should have name parameter", () => {
        expect(pokemon?.getName()).toMatch(/Charizard/);
    })

    test("should have type paramter", () => {
        expect(pokemon?.getType()).toEqual([PokemonType.fire, PokemonType.flying]);
    })

})


describe("reader class Should", () =>{
    test("reading the files successfully", () => {
        let data: any = Reader.read();
        expect(data.pokemons).toBeTruthy();
        expect(data.gyms).toBeTruthy();
    })
})
