import {Type} from '../types';

describe("Type.fire enum should", () => {
    test("match fire", () => {
        expect(Type.fire).toMatch(/fire/);
    })
})