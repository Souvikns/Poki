import React, { FC, useState, useEffect } from 'react';
import { Text, useInput, render } from 'ink';
import { PokemonName } from '../../lib'
import SelectInput from 'ink-select-input';
import _ from 'lodash';
import Pokemon from './pokemon';

const PokemonIndex: FC<{}> = ({ }) => {

    const [search] = useState("")
    const [pokemons] = useState(Object.values(PokemonName));
    const [items, setItems] = useState([]);
    const [pos, setPos] = useState(0);

    useEffect(() => {
        let arr: any = _.chunk(pokemons, 10)[pos]?.map(pk => ({ label: pk, value: pk }))
        setItems(arr);
    }, [])

    useInput((input, key) => {
        let { escape, rightArrow, leftArrow } = key
        if (escape) {
            process.exit();
        }
        if (rightArrow) {
            setPos(pos + 1);
            let as: any = _.chunk(pokemons, 10)[pos]?.map(pk => ({ label: pk, value: pk }))
            setItems(as)
        }

        if (leftArrow) {
            setPos(pos - 1);
            let ad: any = _.chunk(pokemons, 10)[pos]?.map(pk => ({ label: pk, value: pk }))
            setItems(ad)
        }

        if (input) {

        }
    })

    const handleSubmit = (item: any) => {
        render(<Pokemon name={item.value} />)
    }

    return <>
        <Text>{search}</Text>

        <SelectInput items={items} onSelect={handleSubmit} />
    </>
}

module.exports = PokemonIndex;
export default PokemonIndex;
