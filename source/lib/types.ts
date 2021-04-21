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

export enum Quick_Move {
    vineWhip = "Vine Whip",
    tackle = "Tackle",
    struggle = "Struggle"
}

export enum Main_Move {
    seedBomb = "Seed Bomb",
    sludgeBomb = "Sludge Bomb",
    powerWhip = "Power Whip",
    originPulse = "Origin Pulse"
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
    moves: {quick: Array<Quick_Move>, main: Array<Main_Move>}
    evolution: { base: PokemonName, evolve: number }
}

export interface Quickmove {
    name: Quick_Move,
    type: Type,
    dps: number
}

export interface Mainmove {
    name: Main_Move,
    type: Type,
    dps: number
}