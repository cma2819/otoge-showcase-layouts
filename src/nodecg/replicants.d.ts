import { Assets } from "./asset";
import { Programs, SurroundCurrentPk } from './generated';

type ReplicantMap = {
  programs: Programs;
  surroundCurrentPk: SurroundCurrentPk
};

export {
  Programs,
  SurroundCurrentPk,
  ReplicantMap,
};
