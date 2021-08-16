import '../common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ReplicantProvider } from '../../ReplicantProvider';
import { Player } from '../components/Player';
import { Program } from '../components/Program';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
`;

const ProgramArea = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  width: 660px;
  height: 1030px;
  margin: 24px;
`;

const PlayerArea = styled.div`
  position: fixed;
  top: 960px;
  left: 720px;
  width: 1080px;
  height: 48px;
`;

const App = () => {
  return (
    <ReplicantProvider>
      <Container>
        <ProgramArea>
          <Program />
        </ProgramArea>
        <PlayerArea>
          <Player index={0} />
        </PlayerArea>
      </Container>
    </ReplicantProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));