import { Pokemon } from '../pokemon';

describe("Pokemon class", () => {
    it("should load for pokemon battle", () => {
        let bulbasaur = Pokemon.loadForBattle(1, 2);
        expect(bulbasaur instanceof Pokemon).toBeTruthy();
        expect(bulbasaur.id).toEqual(1);
        expect(bulbasaur.name).toMatch(/Bulbasaur/);
        expect(bulbasaur.level).toEqual(2);
        expect(bulbasaur.type).toEqual(["grass", "poison"]);
        expect(typeof bulbasaur.spriteImage === "string").toBeTruthy();
        expect(bulbasaur.evolution).toEqual({
            base: "Bulbasaur",
            evolve: 0
        });
        expect(bulbasaur.baseStat).toEqual({
            hp: 45,
            attack: 49,
            defense: 49,
            specialAttack: 65,
            specialDefence: 65,
            speed: 45
        })
        expect(bulbasaur.pokemonStat).toBeTruthy()
    })

    it("should return Array of Pokemon object", () => {
        let pokemons = Pokemon.loadForGame();
        expect(typeof pokemons === "object").toBeTruthy();
        pokemons.forEach(pokemon => {
            expect(typeof pokemon.id === "number").toBeTruthy();
            expect(typeof pokemon.level === "undefined").toBeTruthy();
            expect(typeof pokemon.spriteImage === "string").toBeTruthy();
            expect(typeof pokemon.currentStat === "undefined").toBeTruthy();
        })
    })

    it("Should throw error", () => {
        try {
            let pokemon = Pokemon.loadForBattle(10, 3);
            expect(typeof pokemon === "undefined").toBeTruthy();
        } catch (error) {
            expect(error).toBeTruthy();
        }
    })

    it("Should get evolutionList", () => {
        let pokemon = Pokemon.loadForBattle(1, 2);
        expect(pokemon.evolutionList).toBeTruthy();
    })
})
