import POKEMON from './pokemons.json';
import path from 'path';
import fs from 'fs';
import { filter, sortBy } from 'lodash';

export const getPokemonSprite = (id: number) => {
    const filePath = path.resolve(__dirname, "sprites", "pokemon", `${id}.png`);
    if (!fs.existsSync(filePath)) {
        throw new Error("File not found");
    }
    return filePath;
}

export const getEvolutionList = (baseName: string) => {
    let pokemon = filter(POKEMON, pk => pk.evolution.base === baseName);
    return sortBy(pokemon, pk => pk.evolution.evolve);
}

export {
    POKEMON
}