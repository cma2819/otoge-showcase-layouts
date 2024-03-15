import React, { useContext } from 'react';
import styled from 'styled-components';
import { ReplicantContext } from '../../../ReplicantProvider';
import { Slot } from './Slot';

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
`;

const SlotArea = styled.div`
  display: grid;
  grid-template-columns: 48px 1fr;
  height: 165px;
`;

const IconArea = styled.div`
  align-self: center;
`;
const Icon = styled.i`
  filter: drop-shadow(0px 2px 16px black);
`;

export const ProgramDeck = () => {
  const replicant = useContext(ReplicantContext);

  const prevPk = replicant.surroundCurrentPk.prev;
  const prevProgram = prevPk ? replicant.programs.find(program => program.pk === prevPk) : undefined;
  const currentProgram = replicant.programs.find((program) => program.pk === replicant.surroundCurrentPk.current);

  const currentIndex = replicant.programs.findIndex((program) => program.pk === currentProgram?.pk);
  const decks = replicant.programs.filter((_, index) => {
    return index >= currentIndex && index < currentIndex + 2;
  });

  const deckStartAfter = decks.map((_, index) => {
    return decks.filter((_, tIndex) => tIndex < index)
      .reduce((currentSumOfSeconds, deck) => currentSumOfSeconds + deck.estimateRawSeconds + (10 * 60), 0);
  });

  return (
    <Container>
      <SlotArea style={{
        transform: 'scale(0.8)',
        opacity: 0.6,
      }}>
        <div></div>
        { prevProgram && (
          <Slot program={prevProgram} />
        )}
      </SlotArea>
      {
        decks.map((deck, index) => (
          <SlotArea key={deck.pk}>
            <IconArea>
              { index === 0 && (
                <div>
                  <Icon className="fas fa-arrow-right" />
                </div>
              )}
            </IconArea>
            <Slot program={deck} secondsStartAfter={deckStartAfter[index]} />
          </SlotArea>
        ))
      }
    </Container>
  );
}