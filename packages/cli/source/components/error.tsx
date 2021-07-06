import React, {FC} from 'react';
import {Text} from 'ink';

const Err: FC<{command: string}> = ({command}) => {

    return <Text color="redBright">error: invalid command {command}</Text>
};


module.exports = Err;
export default Err;
