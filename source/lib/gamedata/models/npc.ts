

export class Character {
    private name: string;
    private desc: string;
    constructor(name: string, desc: string) {
        this.name = name;
        this.desc = desc;
    }

    public getName = (): string => this.name

    public getDesc = (): string => this.desc;
}
