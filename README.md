<h1 align="center">
Poki
<br> <br>
<p align="center">
<img src="https://github.com/Souvikns/Poki/blob/main/static/pokeball.svg"  width="100">
</p>

<p align="center">
 <a href="https://github.com/Souvikns/Poki/blob/main/LICENSE"><img alt="GitHub license" src="https://img.shields.io/github/license/Souvikns/Poki"></a>

<a href="https://github.com/Souvikns/Poki/pulls">
<img src="https://img.shields.io/badge/PRs-open-green">
</a>
<a href="https://deepscan.io/dashboard#view=project&tid=8580&pid=16849&bid=368882"><img src="https://deepscan.io/api/teams/8580/projects/16849/branches/368882/badge/grade.svg" alt="DeepScan grade"></a>
<a href="https://github.com/Tech-Phantoms/pokemon-cli-game/actions/workflows/node.js.yml">
<img src="https://github.com/Tech-Phantoms/pokemon-cli-game/actions/workflows/node.js.yml/badge.svg" alt="Node.js CI">
</a>

<a href="https://codecov.io/gh/Souvikns/Poki">
        <img src="https://codecov.io/gh/Souvikns/Poki/branch/main/graph/badge.svg?token=FYklvhHRMn"/>
 </a>

<img alt="npm" src="https://img.shields.io/npm/dw/poki">

</p>
</h1>

> Work in progress

## Poki 
Poki is a command-line pokemon game, heavily influenced by pokemon red. We will also seperate the game logic so that it could be used as a library. 

## Table of Contents

- [Getting Started](#getting-started)
	- [Installation](#installation)
- [Usage](#usage)
	- [using poki cli](#using-poki-cli)
	- [using poki as library](#using-poki-as-a-library)
- [Game Commands](#game-commands)
	- [`pokedex`](#pokedex)
 

## Getting Started

To run Poki, ensure that you have Node.js >=10.
[Install node.js from here.](https://nodejs.org/en/)

### Installation

The easiest way to install Poki is using NPM. If you have Node.js installed, it
is most likely that you have NPM installed as well

```
$ npm install -g poki
```

This installs Poki globally on your system allowing you to run it from anywhere.
If you want to install it locally, Just remove the -g flag.

[back to top](#table-of-contents)

## Usage

### Using Poki CLI

You can play the game using the CLI. If you have installed poki globally open any terminal of your liking and check the command list 
```
$ poki --help 
```

<img src="https://github.com/Souvikns/Poki/blob/main/static/ss.PNG" width="650" />

### Using Poki as a Library
> curretly you cant use poki as a library.

[back to top](#table-of-contents)

## Game Commands

### `pokedex`
Use this command to get information about pokemons currently in the game. This command prints 10 pokemons at a time, you can use `arrow keys` to navigate and `enter` to select. 

To access the search bar press `s` then start typing the pokemon name you want search

<img src="https://github.com/Souvikns/Poki/blob/main/static/searchbar.PNG" width="300" />

#### options 
- `-p, --pokemon <name>` pass in the pokemon name to search 
- `-h, --help` display help for command

