import { Store } from '../';

describe('Pokdex store', () => {
    it("should return pokdex store", () => {
        expect(Store.pokedex()).toBeTruthy();
    })

    it("Should have all the functions", () => {
        let pokedex = Store.pokedex();
        expect(pokedex.dispatch).toBeDefined();
        expect(pokedex.getState).toBeDefined();
        expect(pokedex.subscribe).toBeDefined();
    })
})
