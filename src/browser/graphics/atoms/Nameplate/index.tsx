import React from 'react';
import styled from 'styled-components';
import { Player } from '../../../../nodecg/generated/lib';

type Props = {
  player: Player;
  isCommentator?: boolean;
  index?: number;
}

const COLORS = [
  '#da536e',
  '#536eda',
  '#6eda53',
  '#ffcc00',
];

const Container = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: grid;
  grid-template-columns: 3px auto 3px;
  justify-content: space-between;
  font-size: 28px;
  font-weight: bold;
  text-shadow: 0px 2px 8px black;
`;

const Icon = styled.i`
  padding-right: 0.5em;
`;

type BorderProps = {
  index?: number;
}

const Border = styled.div`
  background-color: ${(props: BorderProps) => props.index !== undefined ? COLORS[props.index % (COLORS.length)] : '#f0f0f0'};
`;

export const Nameplate = ({player, isCommentator, index}: Props) => {
  return (
    <Container>
      <Border index={index} />
      <div>
        {
          isCommentator && (
            <Icon className="fas fa-headset" aria-hidden="true"></Icon>
          )
        }
        {player.name}
      </div>
      <Border index={index} />
    </Container>
  )
}