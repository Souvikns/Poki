import { Game } from '../game';

let game = new Game()

describe("Game class", () => {
    it("Should return game object", () => {
        expect(game instanceof Game).toBeTruthy();
    })

})

describe("pokedex", () => {
    it("store", () => {
        let pokedexStore = game.store.pokedex;
        expect(pokedexStore.getState()).toBeTruthy();
    })
})