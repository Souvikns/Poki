import { Pokemon } from './models/pokemon';
import { find } from 'lodash';

export class Game {
    readonly pokemonData = Pokemon.loadForGame();

    getPokemonStat(pokemonName: string): Pokemon | undefined {
        return find(this.pokemonData, pokemon => pokemon.name === pokemonName);
    }
}