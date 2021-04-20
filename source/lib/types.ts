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

export interface _Gym {
    name: string,
    region: Region,
    type: string,
    leader: string[],
    badge: string
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

export enum Badges {
    bolder = "Bolder",
    cascade = "Cascade",
    thunder = "Thunder",
    rainbow = "Rainbow",
    soul = "Soul",
    marsh = "Marsh",
    volcano = "Volcano",
    earth = "Earth"
}

export enum NPC {
    brock = "Brock",
    misty = "Misty",
    surge = "Lt. Surge",
    erika = "Erika",
    koga = "koga",
    janine = "Janine",
    sabrina = "Sabrina",
    blaine = "Blaine",
    giovanni = "Giovanni"
}

export interface stat {
   hp: number,
   attack: number,
   defence: number
}

export interface _Pokemon {
    id: number,
    name: string,
    height: number,
    weight: number,
    type: Array<PokemonType>
    stats: {
        base: stat,
        max: stat
    }
}
