import React, { FC } from 'react';
import { Text, Box, Newline } from 'ink';

interface Flag {
    optionString: string,
    description: string
}

const HelpText: FC<{ name: string, flags: Array<Flag> }> = ({ name, flags }) => {

    return <>
        <Text color="white" backgroundColor="blue">Usage</Text>
        <Text>$ {name} [options]</Text>
        <Newline />
        <Text color="black" backgroundColor="yellowBright">Options</Text>
        {flags.map(flag => <Text key={flag.optionString}>{flag.optionString}   {flag.description}</Text>)}
    </>
}

const Help: FC<{ command?: string }> = ({ command }) => {

    switch (command) {

        case "pokedex":
            return <HelpText name="pokedex" flags={[
                {
                    optionString: "-h, --help",
                    description: "get help for the command"
                }
            ]} />

        case "catch":
            return <HelpText name="catch" flags={[
                {
                    optionString: "-h, --help",
                    description: "get help for the command"
                }
            ]} />

        case "gym":
            return <HelpText name="gym" flags={[
                {
                    optionString: "-h, --help",
                    description: "get help for the command"
                }
            ]} />

        case "league":
            return <HelpText name="league" flags={[
                {
                    optionString: "-h, --help",
                    description: "get help for the command"
                }
            ]} />

        case "init":
            return <HelpText name="init" flags={[
                {
                    optionString: "-h, --help",
                    description: "get help for the command"
                }
            ]} />

        case "whoami":
            return <HelpText name="whoami" flags={[
                {
                    optionString: "-h, --help",
                    description: "get help for the command"
                }
            ]} />

        default:
            return <Box>
                <Text color="redBright">error: </Text> 
                <Text>{command} command does not exist</Text>
            </Box>
    }
}

module.exports = Help;
export default Help;
