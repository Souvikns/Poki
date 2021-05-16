import path from 'path';
import fs from 'fs';
import pokemonData from './pokemons.json';
import { filter, sortBy } from 'lodash';

export const getPokemonSprite = (id: number) => {
    const filePath = path.resolve(__dirname, "sprites", "pokemon", `${id}.png`);
    if (!fs.existsSync(filePath)) {
        throw new Error("File not found");
    }
    return filePath;
}

export const getEvolutionList = (baseName: string) => {
    let pokemon = filter(pokemonData, pk => pk.evolution.base === baseName);
    return sortBy(pokemon, pk => pk.evolution.evolve);
}

export {
    pokemonData
}
