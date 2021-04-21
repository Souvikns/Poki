import React, {FC} from 'react';
import {Text} from 'ink'

const Pokedex: FC<{flag: any}> = ({flag}) => {

    if(flag.pokemon){
        return <>
        <Text>Pokemon</Text>
        </>
    }

    if(flag.index){
        return <>
        <Text>Pokemon Index</Text>
        </>
    }

    if(flag.owned){
        return <>
        <Text>Owned Pokemon</Text>
        </>
    }

    return <>
    <Text>Podex View</Text>
    </>
}

module.exports = Pokedex;
export default Pokedex;