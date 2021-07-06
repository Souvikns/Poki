import React, { FC } from 'react';
import { Box, Newline } from 'ink'
import { useSelector } from 'react-redux';
import { PokedexInitalState } from '../../lib/types';
import _ from 'lodash';
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';

//importing custom components
import Err from './error';
import Type from './type';
import Evolution from './evolution';
import Stat from './stat';

const PokemonUI: FC<{ name: string }> = ({ name }) => {

    let pokemon = _.find(useSelector((state: PokedexInitalState) => state.pokemons), pk => pk.name === name);

    if (typeof pokemon === "undefined") {
        return <Err pokemonName={name} />
    }

    return <>
        <Box borderStyle="round" borderColor="cyan" margin={2} padding={1} flexDirection="column">
            <Box justifyContent="center" flexDirection="row">
                <Gradient name="morning">
                    <BigText text={pokemon.name} font="simple" />
                </Gradient>

            </Box>

            <Box marginRight={8} marginLeft={8}>
                <Type types={pokemon.type} />
            </Box>

            <Newline />

            <Stat stats={pokemon.baseStat} />

            <Newline />

            <Evolution evolutions={pokemon.evolution} name={pokemon.name} />


        </Box>


    </>
}

module.exports = PokemonUI;
export default PokemonUI;
