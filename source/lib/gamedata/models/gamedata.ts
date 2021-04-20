import { Gym } from './gym';
import { Pokemon } from './pokemon';

export class GameData {
    private gyms: Array<Gym>;
    private pokemons: Array<Pokemon>;
    constructor(gyms: Array<Gym>, pokemons: Array<Pokemon>) {
        this.gyms = gyms;
        this.pokemons = pokemons;
    }

    public getPokemons(): Array<Pokemon> {
        return this.pokemons;
    }
    public getGyms(): Array<Gym> {
        return this.gyms;
    }

    static loadGameData() {
        return new GameData();
    }
}