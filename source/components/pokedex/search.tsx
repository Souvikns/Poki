import React, { FC, useState } from 'react';
import TextInput from 'ink-text-input';
import { Box, Text } from 'ink'
import { Database, _Pokemon } from '../../lib';
import _ from 'lodash';

const Search: FC<{}> = () => {
    const pokemonList: Array<_Pokemon> = Database.getAllPokemon();
    var [query, setQuery] = useState('');
    var [searchList, setSearchList] = useState([]);

    const textInputOnChange = (value: any) => {
        setQuery(value);

        setSearchList(_.filter(pokemonList, pokemon => pokemon.name === "bulbasaur"))

    }

    return <>
        <Box>
            <Text>Search: </Text>

            <TextInput value={query} onChange={textInputOnChange} />
        </Box>

        {searchList.map(pokemon => <Text>{pokemon.name}</Text>)}
    </>
}

module.exports = Search;
export default Search;