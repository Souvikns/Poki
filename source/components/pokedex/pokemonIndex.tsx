import React, {FC} from 'react';
import {Text} from 'ink';
import {PokemonName} from '../../lib'

const PokemonIndex: FC<{}> = ({}) => {
    return <>
    {Object.values(PokemonName).map(key => <Text key={key}>{key}</Text>)}
    </>
}

module.exports = PokemonIndex;
export default PokemonIndex;