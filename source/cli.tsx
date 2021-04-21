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

if (process.argv.length === 2) {
    render(<Gradient name="retro"><BigText text="Poki" /></Gradient>)
}

program
    .name("poki")
    .version("0.0.1")
    .addHelpCommand(false);


program
    .command("pokedex")
    .description("A digital encyclopedia, which gives information about all pokemons")
    .option("-p, --pokemon <name>", "pass in pokemon name to search")
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
    .description("Battle against gym leaders or participate in leagues to win rewards")
    .option("-g, --gym", "battle in a gym to earn badges")
    .option("-l, --league", "battle in a leage to earn cup")
    .option("-o, --online", "battle online")
    .action(() => {

    })

program
    .command("profile")
    .description("open profile to manage your data")
    .option("-p, --pokemon", "search your owned pokemons")
    .action(() => {

    })


program.on('command:*', (command) => {
    render(<Err command={command} />)
    program.help();
})

program.parse(process.argv);
