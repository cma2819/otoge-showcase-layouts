import { Assets } from './asset';
import { Programs, SurroundCurrentPk } from './generated';

type ReplicantMap = {
  programs: Programs;
  surroundCurrentPk: SurroundCurrentPk;
  'assets:sponsor-logo': Assets;
};

export {
  Programs,
  SurroundCurrentPk,
  ReplicantMap,
};
