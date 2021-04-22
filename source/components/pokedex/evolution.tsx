import React, { FC } from 'react';
import { Pokemon } from '../../lib';
import { Box, Text } from 'ink';

const Evolution: FC<{ evolutions: Array<Pokemon> }> = ({ evolutions }) => {

    return <Box
        justifyContent="center"
        flexDirection="row"
        borderStyle="classic"
        padding={1}
        borderColor="magenta"
        marginLeft={8}
        marginRight={8}
    >
        {evolutions.map((pokemon, index) => <Box key={pokemon.id} marginRight={2}>
            <Text bold>{pokemon.name} {(evolutions.length - 1 === index) ? null : " -----> "}</Text>
        </Box>)}
    </Box>
};


module.exports = Evolution;
export default Evolution;