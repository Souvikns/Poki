import { QuickMove } from '../models/quick_move';
import {MainMove} from '../models/main_move';
import { Move } from '../models/move';
import {Type} from '../types';
import {Penalty} from '../models/Penalty'

describe("QuickMove model should", () => {
    test("return Move instance", () => {
        let move: Move = QuickMove.move("Struggle");
        expect(move instanceof Move).toBeTruthy();
    })

    test("return Struggle move", () => {
        let move: Move = QuickMove.move("Struggle");
        expect(move.name).toMatch(/Struggle/);
        expect(move.type).toMatch(Type.normal);
        expect(move.dps).toEqual(15);
    })
})

describe("MainMove model should",  () => {
    test("return Move instance", () => {
        let move: Move = MainMove.move("Origin Pulse");
        expect(move instanceof Move).toBeTruthy();
    })

    test("return origin pulse move", () => {
        let move: Move = MainMove.move("Origin Pulse");
        expect(move.name).toMatch(/Origin Pulse/);
    })
})

describe('Penalty class should', () => {
    test("return strong vs", () => {
        expect(Penalty.strongVs(Type.fire)).toBeTruthy();
    })

    test("return weak vs", () => {
        expect(Penalty.weakVs(Type.fire)).toBeTruthy();
    })

    test("return inffective vs", () => {
        expect(Penalty.ineffectiveVs(Type.fire)).toBeTruthy();
    })
})
