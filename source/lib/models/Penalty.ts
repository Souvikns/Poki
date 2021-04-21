import { Type } from '../types';

export class Penalty {
    public static strongVs(type: Type): Array<Type> {
        switch (type) {
            case Type.normal:
                return [];
            case Type.fighting:
                return [Type.normal, Type.rock, Type.steal, Type.ice, Type.dark];
            case Type.flying:
                return [Type.fighting, Type.bug, Type.grass];
            case Type.poison:
                return [Type.grass, Type.fairy];
            case Type.ground:
                return [Type.poison, Type.rock, Type.steal, Type.fire, Type.electric];
            case Type.rock:
                return [Type.flying, Type.bug, Type.fire, Type.ice];
            case Type.bug:
                return [Type.ground, Type.psychic, Type.dark];
            case Type.ghost:
                return [Type.ghost, Type.psychic];
            case Type.steal:
                return [Type.rock, Type.ice, Type.fairy];
            case Type.fire:
                return [Type.bug, Type.steal, Type.grass, Type.ice];
            case Type.water:
                return [Type.ground, Type.rock, Type.fire];
            case Type.grass:
                return [Type.ground, Type.rock, Type.water];
            case Type.electric:
                return [Type.flying, Type.water];
            case Type.psychic:
                return [Type.fighting, Type.poison];
            case Type.ice:
                return [Type.flying, Type.ground, Type.grass, Type.dragon];
            case Type.dragon:
                return [Type.dragon];
            case Type.dark:
                return [Type.ghost, Type.psychic];
            case Type.fairy:
                return [Type.fighting, Type.dragon, Type.dark];
            default:
                return []
        }
    }

    public static weakVs(type: Type): Array<Type> {
        switch (type) {
            case Type.normal:
                return [Type.rock, Type.steal];
            case Type.fighting:
                return [Type.flying, Type.poison, Type.bug, Type.psychic, Type.fairy];
            case Type.flying:
                return [Type.rock, Type.steal, Type.electric];
            case Type.poison:
                return [Type.poison, Type.ground, Type.rock, Type.ghost];
            case Type.ground:
                return [Type.bug, Type.grass];
            case Type.rock:
                return [Type.fighting, Type.ground, Type.steal];
            case Type.bug:
                return [Type.fighting, Type.flying, Type.poison, Type.ghost, Type.steal, Type.fire, Type.fairy];
            case Type.ghost:
                return [Type.dark];
            case Type.steal:
                return [Type.steal, Type.fire, Type.water, Type.electric];
            case Type.fire:
                return [Type.rock, Type.fire, Type.water, Type.dragon];
            case Type.water:
                return [Type.water, Type.grass, Type.dragon];
            case Type.grass:
                return [Type.flying, Type.poison, Type.bug, Type.steal, Type.fire, Type.grass, Type.dragon];
            case Type.electric:
                return [Type.grass, Type.electric, Type.dragon];
            case Type.psychic:
                return [Type.steal, Type.psychic];
            case Type.ice:
                return [Type.steal, Type.fire, Type.water, Type.ice];
            case Type.dragon:
                return [Type.steal];
            case Type.dark:
                return [Type.fighting, Type.dark, Type.fairy];
            case Type.fairy:
                return [Type.poison, Type.steal, Type.fire];

            default:
                return [];
        }
    }

    public static ineffectiveVs(type: Type): Array<Type> {

        switch (type) {
            case Type.normal:
                return [Type.ghost];
            case Type.fighting:
                return [Type.ghost];
            case Type.flying:
                return [];
            case Type.poison:
                return [Type.steal];
            case Type.ground:
                return [Type.flying];
            case Type.rock:
                return [];
            case Type.bug:
                return [];
            case Type.ghost:
                return [Type.normal];
            case Type.steal:
                return [];
            case Type.fire:
                return [];
            case Type.water:
                return [];
            case Type.grass:
                return [];
            case Type.electric:
                return [Type.ground];
            case Type.psychic:
                return [Type.dark];
            case Type.ice:
                return [];
            case Type.dragon:
                return [Type.fairy];
            case Type.dark:
                return [];
            case Type.fairy:
                return [];

            default:
                return []
        }
    }
}