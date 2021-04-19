import {Pokemon} from './models/pokemon'

export class GameData {
    private pokemons:Array<Pokemon> = [];
    
    getPokemons(){
        return this.pokemons;
    }
}