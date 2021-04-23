import { PokemonData } from '../data/pokemon'
import _ from 'lodash';

export class Database {

    public static getAllPokemon = () => PokemonData

    public static getPokemon = (name: string) => _.find(PokemonData, pokemon => pokemon.name === _.upperFirst(name));

    public static getEvolution = (name: string) => {
        let pokemon = _.find(PokemonData, pk => pk.name === _.upperFirst(name));
        let evolutions = _.filter(PokemonData, pk => pk.evolution.base === pokemon?.evolution.base);
        return _.sortBy(evolutions, pk => pk.evolution.evolve);
    }
}
