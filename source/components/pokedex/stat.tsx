import React, { FC } from 'react';
import { Box, Text } from 'ink'
import { getBarColor, getBar } from '../utils';

const Stat: FC<{
    stats:
    {
        hp: number,
        attack: number,
        defense: number,
        specialAttack: number,
        specialDefence: number,
        speed: number
    }
}> = ({ stats }) => {



    return <>
        <Box marginLeft={8} flexDirection="column">
            <Box flexDirection="row" >
                <Box width={10}><Text bold>HP: </Text></Box>
                <Box><Text color={getBarColor(stats.hp)}>{getBar(stats.hp)}</Text></Box>
                <Box><Text> {stats.hp}</Text></Box>
            </Box>
            <Box flexDirection="row">
                <Box width={10}><Text bold>Attack: </Text></Box>
                <Box><Text color={getBarColor(stats.attack)}>{getBar(stats.attack)}</Text></Box>
                <Box><Text> {stats.attack}</Text></Box>
            </Box>
            <Box flexDirection="row">
                <Box width={10}><Text bold>Defense: </Text></Box>
                <Box><Text color={getBarColor(stats.defense)}>{getBar(stats.defense)}</Text></Box>
                <Box><Text> {stats.defense}</Text></Box>
            </Box>
            <Box flexDirection="row">
                <Box width={10}><Text bold>Special Attack: </Text></Box>
                <Box><Text color={getBarColor(stats.specialAttack)}>{getBar(stats.specialAttack)}</Text></Box>
                <Box><Text> {stats.specialAttack}</Text></Box>
            </Box>
            <Box flexDirection="row">
                <Box width={10}><Text bold>Speed: </Text></Box>
                <Box><Text color={getBarColor(stats.speed)}>{getBar(stats.speed)}</Text></Box>
                <Box><Text> {stats.speed}</Text></Box>
            </Box>
        </Box>
    </>
}

module.exports = Stat;
export default Stat;
