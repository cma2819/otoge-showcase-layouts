import React, { useContext } from 'react';
import { ReplicantContext } from '../../../ReplicantProvider';
import { Nameplate } from '../../atoms/Nameplate';

type Props = {
  index: number;
};

export const Player = ({index}: Props) => {
  const replicant = useContext(ReplicantContext);

  const currentProgram = replicant.programs.find((program) => program.pk === replicant.surroundCurrentPk.current);
  const player = currentProgram?.players[index];

  return (
    <React.Fragment>
      {
        player && (
          <Nameplate player={player} index={index} isPlayer />
        )
      }
    </React.Fragment>
  )
}