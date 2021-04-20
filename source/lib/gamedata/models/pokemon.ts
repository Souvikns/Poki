import {PokemonType,PokemonDetail} from '../../types';

export class Pokemon {
    private name:string;
    private type:Array<PokemonType>;
    constructor(name:string, type: Array<PokemonType>){
        this.name = name;
        this.type = type;
    }

    details(): PokemonDetail{
        return {
            name: this.name,
            type: this.type
        }
    }
    
    getName(){
        return this.name
    }

    getType(){
        return this.type;
    }
}