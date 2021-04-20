import * as path from 'path';
import * as fs from 'fs';

export class Reader{

    static read(){
        let pokemons = JSON.parse(fs.readFileSync(path.resolve(__dirname, "..", "data", "pokemons.json"), "utf-8"));
        let gyms = JSON.parse(fs.readFileSync(path.resolve(__dirname, "..", "data", "gym.json"), "utf-8"));

        return {
            pokemons,
            gyms
        }
    }
}