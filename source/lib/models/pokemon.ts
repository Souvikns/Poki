/**
 * Pokemon class represent a single pokemon. 
 * There are two different types of pokemon representation 
 * - one for game data
 * - for battle
 * 
 * Game data will have baseStat, type, name, id, spriteImage, evolution 
 * Battle Data will have id, name, type, baseStat, stat, level, evolution , spriteImage
 */

import { pokemonData, getPokemonSprite } from '../data'
import _ from 'lodash';


export interface Stat {
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
    baseStat: Stat
    spriteImage: string
    level?: number;
    stat?: Stat
}

export class Pokemon {
    private readonly _name: string;
    private readonly _type: Array<string>;
    private readonly _id: number;
    private readonly _evolution: Evolution;
    private readonly _baseStat: Stat;
    private readonly _spriteImage: string;
    private readonly _level: number | undefined;
    private readonly _stat: Stat | undefined;

    constructor(pokemon: PokemonConstructor) {
        this._id = pokemon.id;
        this._name = pokemon.name;
        this._type = pokemon.type;
        this._evolution = pokemon.evolution;
        this._baseStat = pokemon.baseStat;
        this._spriteImage = pokemon.spriteImage;
        this._level = pokemon.level;
        this._stat = pokemon.stat;
    }

    static loadForGame() {
        return pokemonData.map(pokemon => new Pokemon({
            id: pokemon.id,
            name: pokemon.name,
            type: pokemon.type,
            evolution: pokemon.evolution,
            baseStat: pokemon.baseStat,
            spriteImage: getPokemonSprite(pokemon.id)
        }))
    }

    static loadForBattle(id: number, level: number, name?: string) {
        //TODO: read the pokemon from the database and then return that single 
        let pokemon = _.find(pokemonData, pokemon => pokemon.id === id);

        if (!pokemon) throw new Error("Incorrect Id");

        return new Pokemon({
            id: pokemon.id,
            name: name || pokemon.name,
            type: pokemon.type,
            evolution: pokemon.evolution,
            baseStat: pokemon.baseStat,
            spriteImage: getPokemonSprite(pokemon.id),
            level: level
        })
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

    get baseStat(): Stat {
        return this._baseStat;
    }

    get spriteImage(): string {
        return this._spriteImage;
    }

    get level(): number | undefined {
        return this._level;
    }

    get currentStat(): Stat | undefined {
        return this._stat;
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