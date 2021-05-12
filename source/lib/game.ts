import { Pokemon } from './models/pokemon';

export class Game {
    readonly pokemonData = Pokemon.loadForGame();
}