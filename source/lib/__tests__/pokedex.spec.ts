import { Pokedex } from '..';
import { Store } from '@reduxjs/toolkit';

describe("Pokedex store", () => {
    it("should return store", () => {
        let store: Store = Pokedex().store;
        expect(store).toBeTruthy();
    })

    it("should have state", () => {
        let store: Store = Pokedex().store;
        expect(store.getState()).toBeTruthy();
    })

    it("should have pokemons array in state", () => {
        expect(Array.isArray(Pokedex().store.getState().pokemons)).toBeTruthy();
    })

    it("should be bulbasaur in the state", () => {
        expect(
            Pokedex().store.getState().pokemons[0]?.name
        ).toMatch(/Bulbasaur/);

    })
})
