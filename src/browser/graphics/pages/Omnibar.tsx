import '../common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ReplicantProvider } from '../../ReplicantProvider';
import { Title } from '../components/Omnibar/Title';
import { Clock } from '../components/Omnibar/Clock';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 50px;
  background-color: #222;
  display: grid;
  grid-template-columns: auto 120px;
  grid-template-rows: 1fr;
  justify-items: center;
  font-size: 48px;
  font-family: 'Iceland', 'Noto Sans JP', sans-serif, cursive;
`;

const App = () => {
  return (
    <ReplicantProvider>
      <Container>
        <Title />
        <Clock />
      </Container>
    </ReplicantProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));