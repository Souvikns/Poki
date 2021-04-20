import { Pokemon } from '../models/pokemon';
import { PokemonType,NPC,Badges,Region } from '../../types';
import { Reader } from '../models/reader';
import { GameData } from '../models/gamedata';

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


describe("reader class Should", () => {
    test("reading the files successfully", () => {
        let data: any = Reader.read();
        expect(data.pokemons).toBeTruthy();
        expect(data.gyms).toBeTruthy();
    })
})

describe("GameData class should", () => {
    test("exist", () => {
        let gameData: GameData = GameData.loadGameData();
        expect(gameData instanceof GameData).toBeTruthy();
    })

    test("return npc charachetes", () => {
        let gameData: GameData = GameData.loadGameData();
        expect(gameData.getNpcCharacters()[0]?.getName()).toMatch(NPC.brock);
    })

    test("return gyms", () => {
        let gameData: GameData = GameData.loadGameData();
        expect(gameData.getGyms()[0]?.badge).toMatch(Badges.bolder);
        expect(gameData.getGyms()[0]?.name).toMatch(/Pewter/);
        expect(gameData.getGyms()[0]?.region).toMatch(Region.kanto);
    })
})
