import { Pokedex } from './reducers/pokedex';
import { configureStore } from '@reduxjs/toolkit';

export const Store = {
    pokedex: () => {
        return configureStore({
            reducer: Pokedex.reducer
        })
    }
}

export const Reducer = {
    pokedex: () => Pokedex.reducer
}

export const Actions = {
    pokedex: () => Pokedex.actions
}