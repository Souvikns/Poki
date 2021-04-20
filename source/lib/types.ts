export enum PokemonType {
    normal,
    fire,
    water,
    grass,
    electric,
    ice,
    fighting,
    poison,
    ground,
    flying,
    psychic,
    bug,
    rock,
    ghost,
    dark,
    dragon,
    steel,
    fairy
}

export interface Gym {
    name: string,
    type: string,
    leader: Array<string>,
    badge: string
}

export interface PokemonDetail {
    name: string,
    type: Array<PokemonType>
}

export enum Generation {
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight
}

export enum Region {
    kanto = "Kanto",
    sevii = "Sevii",
    johto = "Jhoto",
    hoenn = "Hoenn",
    sinnoh = "Sinnoh",
    unova = "Unova",
    kalos = "Kalos",
    alola = "Alola",
}