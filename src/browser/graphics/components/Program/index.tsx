import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReplicantContext } from '../../../ReplicantProvider';
import { Nameplate } from '../../atoms/Nameplate';

type Props = {
  horizontal?: boolean;
  views: number;
}

const Container = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  display: grid;
  align-content: space-evenly;
  align-items: center;
  ${(props: {horizontal?: boolean}) => props.horizontal
    ? (
      `
        grid-template-rows: 1fr;
        grid-template-columns: auto auto;
      `
    )
    : 'grid-template-columns: 1fr;'
}
`;

const Name = styled.div`
  font-size: 42px;
  font-weight: bold;
`;

const ConsoleLabel = styled.div`
  display: inline-block;
  font-size: 24px;
  padding: 0.2em 0.5em;
`;
const Console =styled.div``;

const CoopPlayer = styled.div`
  height: 48px;
`;

const Commentator = styled.div`
  height: 48px;
`;

export const Program = ({horizontal, views}: Props) => {
  
  const replicant = useContext(ReplicantContext);

  const currentProgram = replicant.programs.find((program) => program.pk === replicant.surroundCurrentPk.current);

  const coops = currentProgram?.players.slice(views) || [];

  return (
    <Container horizontal={horizontal}>
      { currentProgram && (
        <React.Fragment>
          <Name>
            {currentProgram.name.split('\n').map((n, index) => (
              <p style={{margin: 0}} key={`program${index}`}>{n}</p>
            ))}
          </Name>
          {
            coops.length + currentProgram.commentators.length > 0 && (
              <div>
                {
                  coops.map((player, index) => (
                    <CoopPlayer>
                      <Nameplate player={player} index={views + index} key={`coop${index}`} isPlayer />
                    </CoopPlayer>
                  ))
                }
                {
                  currentProgram.commentators.map((commentator, index) => (
                    <Commentator>
                      <Nameplate player={commentator} key={`comment${index}`} isCommentator />
                    </Commentator>
                  ))
                }
              </div>
            )
          }
          <Console>
            <ConsoleLabel>Now Playing</ConsoleLabel>
            <div>
              {currentProgram.game}
            </div>
          </Console>
        </React.Fragment>
      )}
    </Container>
  );
}