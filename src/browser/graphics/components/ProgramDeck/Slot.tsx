import React from 'react';
import styled from 'styled-components';
import { Program } from '../../../../nodecg/generated/lib';

type Props = {
  program: Program
};

const Container = styled.div`
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 2px auto;
  align-content: space-evenly;
`;

const Border = styled.div`
  background-color: #f0f0f0;
  height: 2px;
`;

const Name = styled.div`
  font-weight: bold;
`;

const Game = styled.div`
  justify-self: end;
  font-size: 24px;
`;

export const Slot = ({program}: Props) => {
  return (
    <Container>
      <Name>
        { program.name }
      </Name>
      <Border />
      <Game>
        { program.game }
      </Game>
    </Container>
  );
}