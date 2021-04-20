import { Reader } from './reader';
import { _Gym, _Pokemon, NPC, PokemonType, Badges, Region } from '../../types';
import { Character } from './npc';
import { Gym } from './gym'

export class GameData {
    private gyms: Array<Gym>;
    private pokemons: Array<_Pokemon>;
    private npcCharacters: Array<Character> = [];
    constructor(gyms: Array<Gym>, pokemons: Array<_Pokemon>, npcChars: Array<Character>) {
        this.gyms = gyms;
        this.pokemons = pokemons;
        this.npcCharacters = npcChars;
    }

    public getPokemons(): Array<_Pokemon> {
        return this.pokemons;
    }
    public getGyms(): Array<Gym> {
        return this.gyms;
    }

    public getNpcCharacters(): Array<Character> {
        return this.npcCharacters
    }

    static loadGameData() {
        let data = Reader.read();
        // TODO: generate complete npc charachter and gyms datas.
        return new GameData(
            this.loadGyms(),
            data.pokemons,
            this.loadNpc()
        );
    }

    private static loadNpc() {
        //TODO: Load all the npc characters.
        let npcCharacters: Array<Character> = [];
        npcCharacters.push(new Character(
            NPC.brock,
            "Gym leader of Pewter Gym. Gives the Boulder Badge to trainers who defeat him in battle"
        ));

        npcCharacters.push(new Character(
            NPC.misty,
            "Gym leader of Cerulean Gym. Gives the Cascade badge to trainers who defeat her in battle"
        ))

        return npcCharacters;
    }

    private static loadGyms(): Array<Gym> {
        let gyms: Array<Gym> = [];

        gyms.push(new Gym(
            "Pewter",
            PokemonType.rock,
            Badges.bolder,
            Region.kanto,
            [NPC.brock]
        ));

        return gyms
    }
}
