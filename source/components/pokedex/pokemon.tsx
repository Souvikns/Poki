import React, { FC } from 'react';
import { Text } from 'ink'
import { Database, Pokemon } from '../../lib'

const Pokemon: FC<{ name: string }> = ({ name }) => {

    let pokemon: Pokemon | undefined = Database.getPokemon(name);

    return <>
        <Text>{pokemon?.name}</Text>
    </>
}

module.exports = Pokemon;
export default Pokemon;
