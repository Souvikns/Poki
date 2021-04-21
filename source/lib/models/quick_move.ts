import { Move } from './move';
import { Penalty } from './Penalty';
import { quick } from '../data/moves';
import _ from 'lodash';

export class QuickMove {

    public static move(moveName: string): Move {
        let quickMove = _.find(quick, o => o.name === moveName);
        if (typeof quickMove === "undefined") throw new Error("wrong move Name");

        return new Move(
            quickMove.name,
            quickMove.type,
            quickMove.dps,
            Penalty.strongVs(quickMove.type),
            Penalty.weakVs(quickMove.type),
            Penalty.ineffectiveVs(quickMove.type)
        );
    }
}
