import {PokemonType} from '../../types';

export class Pokemon {
    private name:string;
    private type:Array<PokemonType>;
    constructor(name:string, type: Array<PokemonType>){
        this.name = name;
        this.type = type;
    }

    public getName(): string{
        return this.name;
    }

    public getType(): Array<PokemonType> {
        return this.type
    }
}