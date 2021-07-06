import React from 'react';
import {render} from 'ink-testing-library';
import App from '../ui';


describe("App should", () => {
    test("Check initial App", () => {
        const {lastFrame} = render(<App  />);
        expect(lastFrame()).toMatch(/Hello/);
    })
})
