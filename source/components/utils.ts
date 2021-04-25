import { Type } from '../lib'

export const getTypeColor = (type: string): string => {
    switch (type) {
        case Type.normal:
            return "#A8A878"
        case Type.fighting:
            return "#C02038"
        case Type.flying:
            return "#A890F0"
        case Type.poison:
            return "#A040A0"
        case Type.ground:
            return "#E0C068"
        case Type.rock:
            return "#B8A038"
        case Type.bug:
            return "#A8B820"
        case Type.ghost:
            return "#705898"
        case Type.steal:
            return "#B8B8D0"
        case Type.fire:
            return "#F08030"
        case Type.water:
            return "#6890F0"
        case Type.grass:
            return "#78C850"
        case Type.electric:
            return "#F8D030"
        case Type.psychic:
            return "#F85888"
        case Type.ice:
            return "#98D8D8"
        case Type.dragon:
            return "#7038F8"
        case Type.dark:
            return "#705848"
        case Type.fairy:
            return "#EE99AC"

        default:
            return ""
    }
}

export const getBarCount = (stat: number) => {
    return Math.round((stat / 400) * 40);
}

export const getBarColor = (stat: number) => {
    if(stat <= 20) return "#F34444";
    if(stat > 20 && stat < 60) return "#FF7F0F";
    if(stat >= 60 && stat < 100) return "#FFDD57"
    return "#A0E515";
}