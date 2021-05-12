
export interface BaseStat {
    hp: number,
    attack: number,
    defense: number,
    specialAttack: number,
    specialDefence: number,
    speed: number
}

export interface Evolution {
    base: string,
    evolve: number
}

export interface PokemonConstructor {
    name: string,
    type: Array<string>
    id: number,
    evolution: Evolution,
    baseStat: BaseStat
    spriteImage: string
}

export class Pokemon {
    private readonly _name: string;
    private readonly _type: Array<string>;
    private readonly _id: number;
    private readonly _evolution: Evolution;
    private readonly _baseStat: BaseStat;
    private readonly _spriteImage: string;

    constructor(pokemon: PokemonConstructor) {
        this._id = pokemon.id;
        this._name = pokemon.name;
        this._type = pokemon.type;
        this._evolution = pokemon.evolution;
        this._baseStat = pokemon.baseStat;
        this._spriteImage = pokemon.spriteImage;
    }

    static loadForGame(pokemon: PokemonConstructor) {
        return new Pokemon(pokemon);
    }

    get id(): number {
        return this._id;
    }

    get name(): string {
        return this._name;
    }

    get type(): Array<string> {
        return this._type
    }

    get evolution(): Evolution {
        return this._evolution;
    }

    get baseStat(): BaseStat {
        return this._baseStat;
    }

    get spriteImage(): string {
        return this._spriteImage;
    }

    get pokemonStat() {
        return {
            id: this._id,
            name: this._name,
            type: this._type,
            evolution: this._evolution,
            baseStat: this._baseStat
        };
    }
}