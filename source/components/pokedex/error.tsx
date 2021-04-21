import React, {FC} from 'react';
import {Text} from 'ink';

const Error: FC<{pokemonName: string}> = ({pokemonName}) => {

    return <>
    <Text color="redBright">{pokemonName} does not exist</Text>
    <Text color="blueBright">check spelling or read docs for more information</Text>
    </>
}

module.exports = Error;
export default Error;