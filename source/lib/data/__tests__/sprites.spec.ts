import {getPokemonSprite} from '../sprites';
import path from 'path';

describe("getPokemonSprites ", () => {
    it("should return a filePath", () => {
        let pokemonSpritePath = getPokemonSprite(1);
        expect(pokemonSpritePath).toBeTruthy();
    })

    it("should return path to bulbasaur", () => {
        let pokemonSpritePath = getPokemonSprite(1);
        expect(pokemonSpritePath).toMatch(path.resolve(__dirname, "..", "sprites", "pokemon", "1.png"));
    })
})
