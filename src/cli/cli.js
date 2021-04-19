#!/usr/bin/env node
const React = require("react");
const importJsx = require("import-jsx");
const { render } = require("ink");
const meow = require("meow");
const meowHelp = require("cli-meow-help");
const { viewFileFinder } = require("./util");
const pkg = require("../../package.json");

const ui = importJsx(viewFileFinder("ui.js"));

const cli = meow(
	meowHelp({
		name: "poki",
		commands: {
			pokedex: { desc: "get data of all the pokemons in the game" },
			catch: { desc: "catch pokemon" },
			gym: { desc: "battle gyms to win badges" },
			league: { desc: "enter in leagues" },
			init: { desc: "create your account" },
			whoami: { desc: "get Profile data" },
		},
		flags: {
			help: { desc: "get help for commands", type: "boolean" },
			version: { desc: "get version", type: "boolean" },
		},
	}),
	{ version: pkg.version }
);

render(React.createElement(ui, cli.flags));
