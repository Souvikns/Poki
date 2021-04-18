#!/usr/bin/env node
const React = require('react');
const importJsx = require('import-jsx');
const { render } = require('ink');
const meow = require('meow');
const { viewFileFinder } = require('./util')

const ui = importJsx(viewFileFinder("ui.js"));

const cli = meow(`
	Usage
	  $ pokemon-cli-game

	Options
		--name  Your name

	Examples
	  $ pokemon-cli-game --name=Jane
	  Hello, Jane
`);

render(React.createElement(ui, cli.flags));