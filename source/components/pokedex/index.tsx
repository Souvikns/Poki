import React, { FC } from 'react';
import { Text } from 'ink'
import { Database } from '../../lib'

// importing components
import PokemonUI from './pokemon';

const Pokedex: FC<{ flag: any }> = ({ flag }) => {

    if (flag.pokemon) {
        return <PokemonUI name={flag.pokemon} />
    }

    return <>
        {Database.getAllPokemon().map(pokemon => <Text key={pokemon.name}>{pokemon.name}</Text>)}
    </>
}

module.exports = Pokedex;
export default Pokedex;
