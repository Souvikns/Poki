const {render} = require('ink-testing-library');
const React = require('react')
const {Text} = require('ink')

describe('Running the CLI commands', () => {it('checking help', () => {
        const Test = () => <Text>Hello World</Text>
        const { lastFrame } = render(<Test />);
        console.log(lastFrame)
        expect(lastFrame()).toMatch(/Hello World/)
                                     })})
