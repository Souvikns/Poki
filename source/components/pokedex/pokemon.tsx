import React, { FC } from 'react';
import { Text, Newline } from 'ink'
import { Database, Pokemon } from '../../lib'
import Err from './error';
import Type from './type';

const Pokemon: FC<{ name: string }> = ({ name }) => {

    let pokemon: Pokemon | undefined = Database.getPokemon(name);

    if (typeof pokemon === "undefined") {
        return <Err pokemonName={name} />
    }

    return <>
        <Text>{pokemon.name}</Text>
        <Newline />

        <Type types={pokemon.type} />
    </>
}

module.exports = Pokemon;
export default Pokemon;
