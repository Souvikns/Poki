import { PokemonData } from '../data/pokemon'
import _ from 'lodash';

export class Database {

    public static getAllPokemon = () => PokemonData

    public static getPokemon = (name: string) => _.find(PokemonData, pokemon => pokemon.name === name);
}