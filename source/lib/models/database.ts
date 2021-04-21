import { Mainmove, pokemon, Quickmove } from "../types";
import {pokemonData } from '../data/pokemon'
import { main, quick } from '../data/moves';
import _ from 'lodash';


export class Database {
    private pokemons: Array<pokemon> = pokemonData;
    private quickMoves: Array<Quickmove> = quick;
    private mainMoves:Array<Mainmove> = main;

    public getPokemons(){
        return this.pokemons;
    }

    public getPokemon(pokemonName: string){
        return _.find(this.pokemons, pokemon => pokemon.name === _.upperFirst(pokemonName));
    }

    public getQuickMoves() {
        return this.quickMoves;
    }

    public getQuickMove(name: string){
        return _.find(this.quickMoves, qm => qm.name === name)
    }

    public getMainMoves(){
        return this.mainMoves
    }

    public getMainMove(name:string) {
        return _.find(this.mainMoves, mm => mm.name === name);
    }


}
