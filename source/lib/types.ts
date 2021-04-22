export interface Pokemon {
    id: number,
    name: string,
    type: Array<string>
    evolution: {
        base: string,
        evolve: number
    }
}

export interface CP {
    15: number,
    20: number,
    30: number,
    40: number
}


// ENUMS 


export enum Type {
    normal = "normal",
    fighting = "fighting",
    flying = "flying",
    poison = "poison",
    ground = "ground",
    rock = "rock",
    bug = "bug",
    ghost = "ghost",
    steal = "steal",
    fire = "fire",
    water = "water",
    grass = "grass",
    electric = "electric",
    psychic = 'psychic',
    ice = "ice",
    dragon = "dragon",
    dark = "dark",
    fairy = "fairy"
}

export enum PokemonName {
    bulbasaur = "Bulbasaur",
    ivysaur = "Ivysaur",
    venusaur = "Venusaur"
}