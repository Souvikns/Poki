import { PokemonType, Badges } from '../../types'
import { Character } from './npc';
export class Gym {
    readonly name: string;
    readonly type: PokemonType;
    readonly badge: Badges;
    readonly leader: Array<Character>;
    constructor(name: string, type: PokemonType, badge: Badges, leader: Array<Character>) {
        this.name = name;
        this.type = type;
        this.badge = badge;
        this.leader = leader;
    }
}
