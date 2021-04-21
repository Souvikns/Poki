import React, { FC } from 'react';
import {Text} from 'ink'

const Pokemon: FC<{ name: string }> = ({ name }) => {

    return <>
        <Text>{name}</Text>
    </>
}

module.exports = Pokemon;
export default Pokemon;
