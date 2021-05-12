/**
 * Game class will be returning different stores for different features like 
 * - static data for pokedex 
 * - 1v6 PVE battle store for catch
 * - 6v6 PVE battle store for GYM battles. 
 */

import { Pokemon } from './models/pokemon';
import { find } from 'lodash';
import { configureStore } from '@reduxjs/toolkit';
import Pokedex from './reducers/pokedex';

export class Game {
    readonly pokemonData = Pokemon.loadForGame();
    // TODO: return an store object having all the static data. 
    readonly pokedex = configureStore({ reducer: Pokedex });

    getPokemonStat(pokemonName: string): Pokemon | undefined {
        return find(this.pokemonData, pokemon => pokemon.name === pokemonName);
    }
}
