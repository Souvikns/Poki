import React, { FC, useState } from 'react';
import TextInput from 'ink-text-input';
import { Box, Text, render } from 'ink'
import { PokedexInitalState } from '../../lib/types';
import { useSelector, Provider } from 'react-redux';
import _ from 'lodash';
import SelectInput from 'ink-select-input';
import { Pokedex } from '../../lib';

// importing custom components
import Pokemon from './pokemon';
import SelectorItem from './slectorItem';



const Search: FC<{}> = () => {
    var [query, setQuery] = useState('');
    const pokemons = useSelector((state: PokedexInitalState) => state.pokemons)
    var [pokemonList, setPokemonList] = useState(useSelector((state: PokedexInitalState) => state.pokemons));

    const onChange = (value: any) => {
        setQuery(value);
        let reqexStr = "^" + value
        setPokemonList(_.filter(pokemons, pokemon => RegExp(reqexStr, "i").test(pokemon.name)));
    }

    const onSelect = (item: any) => {
        render(<Provider store={Pokedex().store}><Pokemon name={item.label} /> </Provider>);
    }

    return <>
        <Box>
            <Text>Search: </Text>

            <Text color="greenBright">
                <TextInput value={query} onChange={onChange} />
            </Text>
        </Box>

        {(query !== "") && <SelectInput
            items={pokemonList.map(pokemon => ({ label: pokemon.name, value: pokemon.id }))}
            onSelect={onSelect}
            itemComponent={SelectorItem}
        />}
    </>
}

module.exports = Search;
export default Search;
