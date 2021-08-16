import React from 'react';
import styled from 'styled-components';
import { Program as ProgramType } from '../../../../nodecg/generated/lib';
import { Nameplate } from '../../atoms/Nameplate';

type Props = {
  program: ProgramType;
}

const Container = styled.div`
  display: grid;
  height: 100%;
  grid-template-columns: 1fr;
  align-content: space-evenly;
`;

const Label = styled.div`
  font-family: 'Iceland', 'Noto Sans JP', sans-serif, cursive;
  font-size: 48px;
`;

const Text = styled.div`
  padding-left: 1em;
`;

const Border = styled.div`
  height: 2px;
  background-color: #f0f0f0;
`;

export const Program = ({program}: Props) => {
  return (
    <Container>
      <Label>Program</Label>
      <Text>{ program.name }</Text>
      <Border />
      <Label>Game</Label>
      <Text>{ program.game }</Text>
      <Border />
      <Label>Player(s)</Label>
      {program.players.map((player, index) => (
        <Nameplate player={player} index={index} key={`p${index}`} />
      ))}
      {
        program.commentators.length > 0 && (
          <React.Fragment>
            <Border />
            <Label>Commentator(s)</Label>
            {program.commentators.map((commentator, index) => (
              <Nameplate player={commentator} key={`c${index}`} />
            ))}
          </React.Fragment>
        )
      }
    </Container>
  );
}