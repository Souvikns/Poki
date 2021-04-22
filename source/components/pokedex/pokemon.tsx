import React, { FC } from 'react';
import { Box, Newline } from 'ink'
import { Database, Pokemon } from '../../lib'
import BigText from 'ink-big-text';
import Gradient from 'ink-gradient';

//importing custom components 
import Err from './error';
import Type from './type';
import Evolution from './evolution';

const Pokemon: FC<{ name: string }> = ({ name }) => {

    let pokemon: Pokemon | undefined = Database.getPokemon(name);

    if (typeof pokemon === "undefined") {
        return <Err pokemonName={name} />
    }

    return <>
        <Box borderStyle="round" borderColor="cyan" margin={2} padding={1} flexDirection="column">
            <Box justifyContent="center" flexDirection="row">
                <Gradient name="morning">
                    <BigText text={pokemon.name} font="tiny" />
                </Gradient>

            </Box>

            <Box marginRight={8} marginLeft={8}>
                <Type types={pokemon.type} />
            </Box>

            <Newline />

            <Evolution evolutions={Database.getEvolution(pokemon.name)} />


        </Box>


    </>
}

module.exports = Pokemon;
export default Pokemon;
