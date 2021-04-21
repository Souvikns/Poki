import { main } from '../data/moves';
import { Penalty } from './Penalty';
import { Move } from './move';
import _ from 'lodash';


export class MainMove {
    public static move(moveName: string): Move {
        let mainMove = _.find(main, o => o.name === moveName);
        if (typeof mainMove === "undefined") throw new Error("wrong move name");

        return new Move(
            mainMove.name,
            mainMove.type,
            mainMove.dps,
            Penalty.strongVs(mainMove.type),
            Penalty.weakVs(mainMove.type),
            Penalty.ineffectiveVs(mainMove.type)
        );
    }
}