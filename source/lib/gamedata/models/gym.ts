import { PokemonType, Badges,NPC, Region } from '../../types'
export class Gym {
    readonly name: string;
    readonly type: PokemonType;
    readonly badge: Badges;
    readonly region: Region
    readonly leader: Array<NPC>;
    constructor(name: string, type: PokemonType, badge: Badges,region: Region, leader: Array<NPC>) {
        this.name = name;
        this.type = type;
        this.badge = badge;
        this.region = region;
        this.leader = leader;
    }
}
