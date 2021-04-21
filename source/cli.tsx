#!/usr/bin/env node
import React from 'react';
import { Command } from 'commander';
import { render } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
import Err from './components/error';


// importing components 
import Pokedex from './components/pokedex';


const program = new Command();

if (process.argv.includes('-h') || process.argv.includes('--help')) {
    render(<Gradient name="rainbow"><BigText text="Pokemon" /></Gradient>)
}

program
    .name("poki")
    .version("0.0.1")
    .addHelpCommand(false);


program
    .command("pokedex")
    .description("digital encyclopedia")
    .option("-i, --index", "checkout all the pokemons currently in the game")
    .option("-o, --owned", "my pokemons")
    .option("-p, --pokemon <name>", "search specific pokemon")
    .action((options) => {
        render(<Pokedex flag={options} />)
    })


program
    .command("catch")
    .description("catch pokemons")
    .option('-t, --terrain <terrain>', "catch pokemon in specific terrain")
    .action(() => {

    })

program
    .command("battle")
    .option("battle with win XP")
    .option("-g, --gym", "battle in a gym to earn badges")
    .option("-l, --league", "battle in a leage to earn cup")
    .option("-o, --online", "battle online")
    .action(() => {

    })


program.on('command:*', (command) => {
    render(<Err command={command}/>)
    program.help();
})

program.parse(process.argv);
