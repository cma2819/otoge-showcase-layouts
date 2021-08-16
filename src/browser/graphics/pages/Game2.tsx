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
  top: 720px;
  left: 0px;
  width: 1872px;
  height: 210px;
  margin: 24px;
`;

const Player1Area = styled.div`
  position: fixed;
  top: 640px;
  left: 20px;
  width: 920px;
  height: 48px;
`;

const Player2Area = styled.div`
  position: fixed;
  top: 640px;
  left: 980px;
  width: 920px;
  height: 48px;
`;

const App = () => {
  return (
    <ReplicantProvider>
      <Container>
        <ProgramArea>
          <Program horizontal/>
        </ProgramArea>
        <Player1Area>
          <Player index={0} />
        </Player1Area>
        <Player2Area>
          <Player index={1} />
        </Player2Area>
      </Container>
    </ReplicantProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));