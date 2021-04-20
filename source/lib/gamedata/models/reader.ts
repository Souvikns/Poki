import * as path from 'path';
import * as fs from 'fs';
import { _Gym,_Pokemon } from '../../types';

export class Reader{

    static read(){
        let pokemons:Array<_Pokemon> = JSON.parse(fs.readFileSync(path.resolve(__dirname, "..", "data", "pokemons.json"), "utf-8"));
        let gyms:Array<_Gym> = JSON.parse(fs.readFileSync(path.resolve(__dirname, "..", "data", "gym.json"), "utf-8"));

        return {
            pokemons,
            gyms
        }
    }
}