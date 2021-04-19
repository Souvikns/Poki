const {commands, helpCommandGenerator} = require('../../cli/commands');

describe('running all the help commands', () => {
    it('pokedex help text', () => {
  expect(helpCommandGenerator("pokedex")).toMatch(commands.pokedex.help);
    })

it("catch help text", () => {
  expect(helpCommandGenerator("catch")).toMatch(commands.catch.help);
})

it("gym help text",
   () => { expect(helpCommandGenerator("gym")).toMatch(commands.gym.help); })

it("league help text", () => {
  expect(helpCommandGenerator("league")).toMatch(commands.league.help);
})

it("init help text",
   () => { expect(helpCommandGenerator("init")).toMatch(commands.init.help); })

    it("whoami help text", () => {
  expect(helpCommandGenerator("whoami")).toMatch(commands.whoami.help);
    })

})
