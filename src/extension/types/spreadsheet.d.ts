export type Schedule = {
  program: string;
  game: string;
  player: string;
  estimate: string;
  pk: string;
}

export type Entrant = {
  programPk: string;
  programName: string;
  name: string;
}

export type Commentator = {
  programPk: string;
  programName: string;
  name: string;
}