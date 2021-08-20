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
  width: 500px;
  height: 1030px;
  margin: 24px;
`;

const Player1Area = styled.div`
  position: fixed;
  top: 460px;
  left: 540px;
  width: 670px;
  height: 48px;
`;

const Player2Area = styled.div`
  position: fixed;
  top: 460px;
  left: 1220px;
  width: 670px;
  height: 48px;
`;

const Player3Area = styled.div`
  position: fixed;
  top: 940px;
  left: 540px;
  width: 670px;
  height: 48px;
`;

const Player4Area = styled.div`
  position: fixed;
  top: 940px;
  left: 1220px;
  width: 670px;
  height: 48px;
`;

const App = () => {
  return (
    <ReplicantProvider>
      <Container>
        <ProgramArea>
          <Program views={4} />
        </ProgramArea>
        <Player1Area>
          <Player index={0} />
        </Player1Area>
        <Player2Area>
          <Player index={1} />
        </Player2Area>
        <Player3Area>
          <Player index={2} />
        </Player3Area>
        <Player4Area>
          <Player index={3} />
        </Player4Area>
      </Container>
    </ReplicantProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));