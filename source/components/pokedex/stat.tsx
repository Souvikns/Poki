import React, { FC } from 'react';
import { Box, Text } from 'ink'
import { getBarColor, getBar } from '../utils';

const Stat: FC<{
    stats:
    {
        hp: number,
        attack: number,
        defense: number,
        special: number,
        speed: number
    }
}> = ({ stats }) => {



    return <>
        <Box marginLeft={8} flexDirection="column">
            <Box flexDirection="row" >
                <Box width={10}><Text>HP: </Text></Box>
                <Box><Text color={getBarColor(stats.hp)}>{getBar(stats.hp)}</Text></Box>
                <Box><Text> {stats.hp}</Text></Box>
            </Box>
            <Box flexDirection="row">
                <Box width={10}><Text>Attack: </Text></Box>
                <Box><Text color={getBarColor(stats.attack)}>{getBar(stats.attack)}</Text></Box>
                <Box><Text> {stats.attack}</Text></Box>
            </Box>
            <Box flexDirection="row">
                <Box width={10}><Text>Defense: </Text></Box>
                <Box><Text color={getBarColor(stats.defense)}>{getBar(stats.defense)}</Text></Box>
                <Box><Text> {stats.defense}</Text></Box>
            </Box>
            <Box flexDirection="row">
                <Box width={10}><Text>Special: </Text></Box>
                <Box><Text color={getBarColor(stats.special)}>{getBar(stats.special)}</Text></Box>
                <Box><Text> {stats.special}</Text></Box>
            </Box>
            <Box flexDirection="row">
                <Box width={10}><Text>Speed: </Text></Box>
                <Box><Text color={getBarColor(stats.speed)}>{getBar(stats.speed)}</Text></Box>
                <Box><Text> {stats.speed}</Text></Box>
            </Box>
        </Box>
    </>
}

module.exports = Stat;
export default Stat;
