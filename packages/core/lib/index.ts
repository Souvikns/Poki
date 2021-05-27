import { PokedexSlice } from './reducers/pokedex';
import { configureStore } from '@reduxjs/toolkit';

export const Pokedex = () => {
    let store = configureStore({ reducer: PokedexSlice.reducer });

    return {
        store,
        reducer: PokedexSlice.reducer,
        actions: PokedexSlice.actions
    }
}