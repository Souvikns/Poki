import {PokemonType} from '../../types';

export class Pokemon {
    private name:string;
    private type:Array<PokemonType>;
    constructor(name:string, type: Array<PokemonType>){
        this.name = name;
        this.type = type;
    }

    details(){
        return {
            name: this.name,
            type: this.type
        }
    }
}