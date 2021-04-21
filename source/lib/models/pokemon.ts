

export class Pokemon{
    readonly id:number
    readonly name:string;
    readonly height: number;
    readonly weight: number;
    readonly type: Array<string>;
    readonly hp:{base: number, max: number};
    constructor(
        id:number,
        name:string,
        height:number,
        weight: number,
        type: Array<string>,
        hp: {base: number, max: number}
    ){
        this.id = id
        this.name = name;
        this.height = height
        this.weight = weight
        this.type = type
        this.hp = hp
    }

}
