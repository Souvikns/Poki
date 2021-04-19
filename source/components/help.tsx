import React, { FC } from 'react';
import { Text } from 'ink';

const Help: FC<{command?: string}> = ({command}) => {

    return <Text>{command}</Text>
}

module.exports = Help;
export default Help;
