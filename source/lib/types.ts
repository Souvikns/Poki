export interface _Pokemon {
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
    venusaur = "Venusaur",
    charmander = "Charmander",
    charmeleon = "Charmeleon",
    charizard = "Charizard",
    squirtle = "Squirtle",
    wartortle = "Wartortle",
    blastoise = "Blastoise",
    caterpie = "Caterpie",
    metapod = "Metapod",
    butterfree = "Butterfree",
    weedle = "Weedle",
    kakuna = "Kakuna",
    beedrill = "Beedrill",
    pidgey = "Pidgey",
    pidgeotto = "Pidgeotto",
    pidgeot = "Pidgeot",
    rattata = "Rattata",
    raticate = "Raticate",
    spearow = "Spearow",
    fearow = "fearow",
    ekans = "Ekans",
    arbok = "Arbok",
    pikachu = "Pikachu",
    raichu = "Raichu",
    sandshrew = "Sandshrew",
    sandslash = "Sandslash",
    nidoran = "Nidoran",
    nidorino = "Nidorina",
    nidorina = "Nidorina",
    nidoqueen = "Nidoqueen",
    nidoking = "Nidoking",
    clefairy = "Clefairy",
    clefable = "Clefable",
    vulpix = "Ninetales",
    jigglypuff = "Jigglypuff",
    wigglytuff = "Wigglytuff",
    zubat = "Zubat",
    golbat = "Golbat",
    oddish = "Oddish",
    gloom = "Gloom",
    vileplume = "Vileplume",
    paras = "Paras",
    parasect = "Parasect",
    venonat = "Venonat",
    venomoth = "Venomoth",
    diglett = "Diglett",
    dugtrio = "Dugtrio",
    meowth = "Meowth",
    persian = "Persion",
    psyduck = "Psyduck",
    golduck = "Golduck",
    mankey = "Mankey",
    primeape = "Primeape",
    growlithe = "Growlithe",
    arcanine = "Archanine",
    poliwag = "Poliwag",
    poliwhirl = "Poliwhirl",
    poliwrath = "Poliwarth",
    abra = "Abra",
    kadabra = "Kadabra",
    alakazam = "Alakazam",
    machop = "Machop",
    machoke = "Machoke",
    machamp = "Machamp",
    bellsprout = "Bellsprout",
    weepinbell = "Weepinbell",
    victreebell = "Victreebell",
    tentacool = "tentacool",
    tentacruel = "Tentacruel",
    geodude = "Geodude",
    graveler = "Graveler",
    golem = "Golem",
    ponyta = "Ponyta",
    rapidash = "Rapidash",
    slowpoke = "Slowpoke",
    slowbro = "Slowbro",
    magnemite = "Magnemite",
    magneton = "Magneton",
    farfetchd = "Farfetchd",
    doduo = "Doduo",
    dodrio = "Dodrio",
    seel = "Seel",
    dewgong = "Dewgong",
    grimer = "Grimer",
    muk = "Muk",
    shellder = "Shellder",
    cloyster = "Cloyster",
    gastly = "Gastly",
    haunter = "Haunter",
    gengar = "Gengar",
    onix = "Onix",
    drowzee = "Drowzee",
    hypno = "Hypno",
    krabby = "Krabby",
    kingler = "Kingler",
    voltrob = "Voltrob",
    electriode = "Electrode",
    exeggute = "Exeggute",
    exegguter = "Exegguter",
    cubone = "Cubone",
    marowak = "Marowak",
    hitmonlee = "Hitmonlee",
    hitmonchan = "Hitmonchan",
    lickitung = "Lickitung",
    koffing = "Koffing",
    weezing = "Weezing",
    rhyhorn = "Rhyhorn",
    rhydon = "Rhydon",
    chansey = "Chansey",
    tangela = "Tangela",
    kangaskhan = "Kangaskhan",
    horsea = "Horsea",
    seadra = "Seadra",
    goldeen = "Goldeen",
    seaking = "Seaking",
    staryu = "Staryu",
    starmie = "Starmie",
    mrmime = "Mr Mime",
    scyther = "Scyther",
    jynx = "Jynx",
    electrabuzz = "Electabuzz",
    magnar = "Magnar",
    pinsir = "Pinsir",
    tauros = "Tauros",
    magikarp = "Magikarp",
    gyarados = "Gyarados",
    lapras = "Lapras",
    ditto = "Ditto",
    eevee = "Eevee",
    vaporeon = "Vaporeon",
    jolteon = "Jolteon",
    flareon = "Flareon",
    porygon = "Porygon",
    omanyte = "Omanyte",
    omastar = "Omastar",
    kabuta = "kabuta",
    kabutops = "Kabutops",
    aerodactyle = "Aerodactyle",
    snorlax = "Snorlax",
    articuno = "Arcticuno",
    zapdos = "Zapdos",
    moltres = "Moltres",
    dratini = "Dratini",
    dragoniar = "Dragoniar",
    dragonite = "Dragonite",
    mewtwo = "Mewtwo",
    mew = "Mew"
}
