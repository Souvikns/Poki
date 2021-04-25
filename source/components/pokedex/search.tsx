import React, { FC, useState } from 'react';
import TextInput from 'ink-text-input';
import { Box, Text } from 'ink'
import { Database, _Pokemon } from '../../lib';
import _ from 'lodash';

const Search: FC<{}> = () => {
    var [query, setQuery] = useState('');
    const pokemons: Array<_Pokemon> = Database.getAllPokemon();
    var [pokemonList, setPokemonList] = useState(Database.getAllPokemon());


    const submit = (value: string) => {
        let reqexStr = "^" + value
        setPokemonList(_.filter(pokemons, pokemon => RegExp(reqexStr, "i").test(pokemon.name)));
    }

    return <>
        <Box>
            <Text>Search: </Text>

            <TextInput value={query} onChange={setQuery} onSubmit={submit} />
        </Box>

        {pokemonList.map(pokemon => <Text key={pokemon.id}>{pokemon.name}</Text>)}
    </>
}

module.exports = Search;
export default Search;