import { Penalty } from '../Penalty';
import { Type } from '../../types';

describe("Penalty class should", () => {
    test("return strongvs for all the types", () => {
        expect(Penalty.strongVs(Type.fire)).toBeTruthy();
        expect(Penalty.strongVs(Type.flying)).toBeTruthy();
        expect(Penalty.strongVs(Type.ghost)).toBeTruthy();
        expect(Penalty.strongVs(Type.normal)).toBeTruthy();
        expect(Penalty.strongVs(Type.fighting)).toBeTruthy();
        expect(Penalty.strongVs(Type.grass)).toBeTruthy();
        expect(Penalty.strongVs(Type.poison)).toBeTruthy();
        expect(Penalty.strongVs(Type.ground)).toBeTruthy();
        expect(Penalty.strongVs(Type.rock)).toBeTruthy();
        expect(Penalty.strongVs(Type.bug)).toBeTruthy();
        expect(Penalty.strongVs(Type.ghost)).toBeTruthy();
        expect(Penalty.strongVs(Type.steal)).toBeTruthy();
        expect(Penalty.strongVs(Type.water)).toBeTruthy();
        expect(Penalty.strongVs(Type.electric)).toBeTruthy();
        expect(Penalty.strongVs(Type.ice)).toBeTruthy();
        expect(Penalty.strongVs(Type.dragon)).toBeTruthy();
        expect(Penalty.strongVs(Type.dark)).toBeTruthy();
        expect(Penalty.strongVs(Type.fairy)).toBeTruthy();
        expect(Penalty.strongVs(Type.psychic)).toBeTruthy();

    })

    test("return weakvs for all the types", () => {
        expect(Penalty.weakVs(Type.fire)).toBeTruthy();
        expect(Penalty.weakVs(Type.flying)).toBeTruthy();
        expect(Penalty.weakVs(Type.ghost)).toBeTruthy();
        expect(Penalty.weakVs(Type.normal)).toBeTruthy();
        expect(Penalty.weakVs(Type.fighting)).toBeTruthy();
        expect(Penalty.weakVs(Type.grass)).toBeTruthy();
        expect(Penalty.weakVs(Type.poison)).toBeTruthy();
        expect(Penalty.weakVs(Type.ground)).toBeTruthy();
        expect(Penalty.weakVs(Type.rock)).toBeTruthy();
        expect(Penalty.weakVs(Type.bug)).toBeTruthy();
        expect(Penalty.weakVs(Type.ghost)).toBeTruthy();
        expect(Penalty.weakVs(Type.steal)).toBeTruthy();
        expect(Penalty.weakVs(Type.water)).toBeTruthy();
        expect(Penalty.weakVs(Type.electric)).toBeTruthy();
        expect(Penalty.weakVs(Type.ice)).toBeTruthy();
        expect(Penalty.weakVs(Type.dragon)).toBeTruthy();
        expect(Penalty.weakVs(Type.dark)).toBeTruthy();
        expect(Penalty.weakVs(Type.fairy)).toBeTruthy();
        expect(Penalty.weakVs(Type.psychic)).toBeTruthy();

    })

    test("return ineffectivevs for all the types", () => {
        expect(Penalty.ineffectiveVs(Type.fire)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.flying)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.ghost)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.normal)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.fighting)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.grass)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.poison)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.ground)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.rock)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.bug)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.ghost)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.steal)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.water)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.electric)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.ice)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.dragon)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.dark)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.fairy)).toBeTruthy();
        expect(Penalty.ineffectiveVs(Type.psychic)).toBeTruthy();

    })
})