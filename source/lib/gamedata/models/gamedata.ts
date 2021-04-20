import { Reader } from './reader';
import { _Gym, _Pokemon } from '../../types';

export class GameData {
    private gyms: Array<_Gym>;
    private pokemons: Array<_Pokemon>;
    constructor(gyms: Array<_Gym>, pokemons: Array<_Pokemon>) {
        this.gyms = gyms;
        this.pokemons = pokemons;
    }

    public getPokemons(): Array<_Pokemon> {
        return this.pokemons;
    }
    public getGyms(): Array<_Gym> {
        return this.gyms;
    }

    static loadGameData() {
        let data = Reader.read();
        return new GameData(data.gyms, data.pokemons);
    }
}