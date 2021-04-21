import React, { FC } from 'react';
import { Text } from 'ink'
import { Database, Pokemon } from '../../lib'
import Err from './error';

const Pokemon: FC<{ name: string }> = ({ name }) => {

    let pokemon: Pokemon | undefined = Database.getPokemon(name);

    if (typeof pokemon === "undefined") {
        return <Err pokemonName={name} />
    }

    return <>
        <Text>{pokemon?.name}</Text>
    </>
}

module.exports = Pokemon;
export default Pokemon;
