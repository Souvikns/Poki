import React from 'react';
import {render} from 'ink-testing-library';
import Help from './help';


describe("Help component", () => {
    it("checking pokedex command", () => {
        let {lastFrame} = render(<Help command="pokedex" />);
        expect(typeof lastFrame()).toMatch(/string/)
    })
})