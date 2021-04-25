import React, { FC } from 'react';
import { Box, Text } from 'ink'
import { getBarCount, getBarColor } from '../utils';

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


    const bar = "█";

    return <>
        <Box marginLeft={8} flexDirection="column">
            <Text><Text bold>HP</Text>: <Text color={getBarColor(stats.hp)}>{bar.repeat(getBarCount(stats.hp))}</Text>  {stats.hp}</Text>

            <Text><Text bold>Attack</Text>: <Text color={getBarColor(stats.attack)}>{bar.repeat(getBarCount(stats.attack))}</Text>  {stats.attack}</Text>

            <Text><Text bold>Defense</Text>: <Text color={getBarColor(stats.defense)}>{bar.repeat(getBarCount(stats.defense))}</Text>  {stats.defense}</Text>

            <Text><Text bold>Special</Text>: <Text color={getBarColor(stats.special)}>{bar.repeat(getBarCount(stats.special))}</Text>  {stats.special}</Text>

            <Text><Text bold>Speed</Text>: <Text color={getBarColor(stats.speed)}>{bar.repeat(getBarCount(stats.speed))}</Text>  {stats.speed}</Text>

        </Box>
    </>
}

module.exports = Stat;
export default Stat;
