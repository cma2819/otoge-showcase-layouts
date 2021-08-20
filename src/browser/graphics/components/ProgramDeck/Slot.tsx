import React from 'react';
import styled from 'styled-components';
import { Program } from '../../../../nodecg/generated/lib';

type Props = {
  program: Program;
  secondsStartAfter?: number;
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

const Detail = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  grid-template-rows: 1fr;
  justify-content: space-between;
  font-size: 24px;
`;

const Game = styled.div``;

const Time = styled.div``;

export const Slot = ({program, secondsStartAfter}: Props) => {

  const displayStartAfter = secondsStartAfter ? {
    hours: Math.floor(secondsStartAfter / 3600),
    minutes: Math.floor(secondsStartAfter % 3600 / 60),
    seconds: secondsStartAfter % 60,
  } : null;
  return (
    <Container>
      <Name>
        { program.name }
      </Name>
      <Border />
      <Detail>
        <Time>
          {
            secondsStartAfter === 0 && (
              <div>NEXT</div>
            )
          }
          { displayStartAfter && (
            <div>
              { (displayStartAfter.hours > 0) && `${displayStartAfter.hours} 時間 ` }
              { (displayStartAfter.minutes > 0) && `${displayStartAfter.minutes} 分 ` }
              { (displayStartAfter.seconds > 0) && `${displayStartAfter.seconds} 秒 ` }
              後
            </div>
          )}
        </Time>
        <Game>
          { program.game }
        </Game>
      </Detail>
    </Container>
  );
}