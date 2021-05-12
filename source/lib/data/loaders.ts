import { Pokemon } from '../models/pokemon';
import pokemonData from './pokemons.json';
import {getPokemonSprite} from './sprites';

export const loadPokemonData = (): Array<Pokemon> => {
    return pokemonData.map(pokemon => Pokemon.loadForGame({
        id: pokemon.id,
        name: pokemon.name,
        type: pokemon.type,
        evolution: pokemon.evolution,
        baseStat: pokemon.baseStat,
        spriteImage: getPokemonSprite(pokemon.id)
    }));
}