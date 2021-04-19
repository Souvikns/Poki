#!/usr/bin/env node
import React from 'react';
import { Command } from 'commander';
import { render } from 'ink';
import Gradient from 'ink-gradient';
import BigText from 'ink-big-text';
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
    .option('-p, --pokemon', "search details for pokemon")
    .option('-r, --region', "search details for region")
    .option('-g, --gym', "search details for gym")
    .option('-l, --league', "search details about leagues")
    .action(() => {

    })


program
    .command("catch")
    .description("catch pokemons")
    .option('-t, --terrain <terrain>', "catch pokemon in specific terrain")
    .action(() => {

    })

program
    .command("gym")
    .description("battel in gym to earn badge")
    .option('-n, --name, <gym>', "fight in a specific gym")
    .action(() => {

    })

program
    .command("league")
    .description("battle in leage to earn trophy")
    .option("-n, --name <league>", "fight in specific league")
    .action(() => {

    })

program
    .command("init")
    .description("create account")
    .action(() => {

    })

program
    .command("whoami")
    .description("check your account")
    .action(() => {

    })


program.parse(process.argv);
