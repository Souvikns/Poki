import React, { FC } from 'react';
import { Box } from 'ink'
import { Database, Pokemon } from '../../lib'
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';
import Err from './error';
import Type from './type';

const Pokemon: FC<{ name: string }> = ({ name }) => {

    let pokemon: Pokemon | undefined = Database.getPokemon(name);

    if (typeof pokemon === "undefined") {
        return <Err pokemonName={name} />
    }

    return <>
        <Box borderStyle="round" borderColor="cyan" margin={1} padding={1} flexDirection="column">
            <Box justifyContent="center" flexDirection="row">
                <Gradient name="morning">
                    <BigText text={pokemon.name} font="tiny" />
                </Gradient>

            </Box>

            <Type types={pokemon.type} />
        </Box>


    </>
}

module.exports = Pokemon;
export default Pokemon;
