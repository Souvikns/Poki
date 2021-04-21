import {Type} from '../types'

export class Move {
    readonly type:Type;
    readonly name:string;
    readonly dps:number
    readonly strongVs: Array<Type>
    readonly weakVs: Array<Type>
    readonly ineffectiveVs: Array<Type>
    constructor(
        name:string,
        type:Type,
        dps:number,
        strongVs: Array<Type>,
        weakVs: Array<Type>,
        ineffectiveVs: Array<Type>
    ){
        this.type = type;
        this.name = name;
        this.dps = dps
        this.strongVs = strongVs;
        this.weakVs = weakVs;
        this.ineffectiveVs = ineffectiveVs;
    }

}
