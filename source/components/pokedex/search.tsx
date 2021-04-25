import React, { FC, useState } from 'react';
import TextInput from 'ink-text-input';
import { Box, Text } from 'ink'
import _ from 'lodash';

const Search: FC<{}> = () => {
    var [query, setQuery] = useState('');

    return <>
        <Box>
            <Text>Search: </Text>

            <TextInput value={query} onChange={setQuery} />
        </Box>
    </>
}

module.exports = Search;
export default Search;