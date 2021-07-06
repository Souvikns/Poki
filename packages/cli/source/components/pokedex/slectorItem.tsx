import React, { FC } from 'react';
import { Text } from 'ink';

const SelectorItem: FC<any> = (props: any) => {

    return <Text backgroundColor={props.isSelected && "cyan"}> {props.label} </Text>
}


export default SelectorItem;
module.exports = SelectorItem;
