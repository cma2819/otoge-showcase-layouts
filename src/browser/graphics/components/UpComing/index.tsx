import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReplicantContext } from '../../../ReplicantProvider';
import { Program } from './Program';

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #f0f0f0;
  padding: 18px;
`;

export const UpComing = () => {
  const replicant = useContext(ReplicantContext);

  const program = replicant.programs.find(program => program.pk === replicant.surroundCurrentPk.current);

  return (
    <Container>
      {
        program && (
          <React.Fragment>
            <Program program={program} />
          </React.Fragment>
        )
      }
    </Container>
  );
}