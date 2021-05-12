/**
 * Game class will be returning different stores for different features like 
 * - static data for pokedex 
 * - 1v6 PVE battle store for catch
 * - 6v6 PVE battle store for GYM battles. 
 */

import { configureStore } from '@reduxjs/toolkit';
import Pokedex from './reducers/pokedex';

export class Game {
    // TODO: return an store object having all the static data. 
    readonly store = {
        pokedex: configureStore({ reducer: Pokedex })
    }

    readonly reducers = {
        Pokedex
    }
}
