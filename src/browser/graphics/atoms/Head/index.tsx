import React from 'react';
import styled from 'styled-components';

type Props = {
  text: string;
}

const Container = styled.div`
  display: grid;
  font-family: 'Iceland', 'Noto Sans JP', sans-serif, cursive;
  justify-content: center;
  grid-template-columns: 480px auto 480px;
  align-items: center;
`;

const Text = styled.div`
  margin: 0.5em 0.5em;
  font-size: 72px;
  font-weight: bold;
`;

const LeftLine = styled.div`
  height: 4px;
  /* background: linear-gradient(to right, rgba(240, 240, 240, 0), rgba(240, 240, 240, 1) 20%, rgba(240, 240, 240, 1) 80%); */
  background-color: #f0f0f0;
`;

const RightLine = styled.div`
  height: 4px;
  /* background: linear-gradient(to left, rgba(240, 240, 240, 0), rgba(240, 240, 240, 1) 20%, rgba(240, 240, 240, 1) 80%); */
  background-color: #f0f0f0;
`;

export const Head = ({text}: Props) => {
  return (
    <Container>
      <LeftLine />
      <Text>
        { text }
      </Text>
      <RightLine />
    </Container>
  );
}