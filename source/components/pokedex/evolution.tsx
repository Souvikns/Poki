import React, { FC } from 'react';
import { _Pokemon } from '../../lib';
import { Box, Text } from 'ink';

const Evolution: FC<{ evolutions: Array<_Pokemon> }> = ({ evolutions }) => {

    return <Box
        justifyContent="center"
        flexDirection="row"
        padding={1}
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
