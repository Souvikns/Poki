import React from 'react';
import Err from '../error';
import {render} from 'ink-testing-library';
import chalk from 'chalk';

describe("Error Code", () => {
    test("err",  () => {
        let {lastFrame} = render(<Err command="pokedex" />)
        expect(lastFrame()).toMatch(chalk.redBright("error: invalid command pokedex"))
    })
})