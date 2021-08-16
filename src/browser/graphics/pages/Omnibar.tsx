import '../common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ReplicantProvider } from '../../ReplicantProvider';
import { Title } from '../components/Omnibar/Title';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 50px;
  background-color: #222;
  display: grid;
  justify-items: center;
`;

const App = () => {
  return (
    <ReplicantProvider>
      <Container>
        <Title />
      </Container>
    </ReplicantProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));