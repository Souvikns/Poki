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
    bulbasaur = "Bulbasaur"
}

export interface CP {
    15: number,
    20: number,
    30: number,
    40: number
}

export interface pokemon {
    id: number,
    name: PokemonName,
    height: number,
    weight: number,
    type: Array<Type>,
    hp: { base: number, max: number },
    cp: {max: CP}
    evolution: { base: PokemonName, evolve: number }
}