import { Type, Main_Move, Quick_Move, Quickmove, Mainmove } from '../types';

export const quick: Array<Quickmove> = [
    { name: Quick_Move.struggle, type: Type.normal, dps: 15 },
    { name: Quick_Move.tackle, type: Type.normal, dps: 10 },
    { name: Quick_Move.vineWhip, type: Type.grass, dps: 14 }
]


export const main: Array<Mainmove> = [
    { name: Main_Move.originPulse, type: Type.water, dps: 76 },
    { name: Main_Move.powerWhip, type: Type.grass, dps: 41 },
    { name: Main_Move.seedBomb, type: Type.grass, dps: 31 },
    { name: Main_Move.sludgeBomb, type: Type.poison, dps: 41 }
]
