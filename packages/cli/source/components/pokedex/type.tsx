import React, { FC } from 'react';
import { Text, Box } from 'ink'
import { getTypeColor } from '../utils'

const Type: FC<{ types: Array<string> }> = ({ types }) => {

    return <Box>
        <Box marginRight={3}>
            <Text bold>Type: </Text>
        </Box>
        <Box>
            {types.map(type => <Box key={type} marginRight={2}>
                <Text bold backgroundColor={getTypeColor(type)}>{` ${type} `}</Text>
            </Box>)}
        </Box>
    </Box>
}

module.exports = Type;
export default Type;
