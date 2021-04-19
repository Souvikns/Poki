const meowHelp = require('cli-meow-help');
const commands = {
    pokedex: {
        help: meowHelp({
            name: "pokedex",
            flags: {
                help: {
                    desc: "get help for command",
                    type: "boolean"
                }
            }
        })
    },
    catch: {
        help: meowHelp({
            name: "catch",
            flags: {
                help: {
                    desc: "get help for command",
                    type: "boolean"
                }
            }
        })
    },
    gym: {
        help: meowHelp({
            name: "gym",
            flags: {
                help: {
                    desc: "get help for command",
                    type: "boolean"
                }
            }
        })
    },
    league: {
        help: meowHelp({
            name: "league",
            flags: {
                help: {
                    desc: "get help for command",
                    type: "boolean"
                }
            }
        })
    },
    init: {
        help: meowHelp({
            name: "init",
            flags: {
                help: {
                    desc: "get help for command",
                    type: "boolean"
                }
            }
        })
    },
    whoami: {
        help: meowHelp({
            name: "whoami",
            flags: {
                help: {
                    desc: "get help for command",
                    type: "boolean"
                }
            }
        })
    }
}

const helpCommandGenerator = (command) => {
    if (commands[String(command)]) {
        return commands[String(command)].help
    } else {
        throw new Error("Wrong command")
    }
}

/**
 * 
 * @param {Array<String>} command 
 * @param {object} flags 
 */
const commandParser = (command, flags) => {
    //TODO: check for -h or --help flag and command then print the suitable help
    if (flags.h || flags.help) {
        if (commands[String(command)]) {
            return commands.pokedex
        }
    }
}

module.exports = {
    commands,
    commandParser,
    helpCommandGenerator
}