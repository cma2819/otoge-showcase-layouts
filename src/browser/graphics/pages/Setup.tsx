import '../common.css';
import '@fortawesome/fontawesome-free/js/all.js';

import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { ReplicantProvider } from '../../ReplicantProvider';
import { Head } from '../atoms/Head';
import { UpComing } from '../components/UpComing';
import { ProgramDeck } from '../components/ProgramDeck';
import { Spotify } from '../components/Spotify';
import { Logo } from '../components/Logo';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 1080px;
`;

const HeadArea = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 1920px;
  height: 136px;
  background-color: #222;
`;

const UpComingArea = styled.div`
  position: fixed;
  top: 222px;
  left: 24px;
  width: 912px;
  height: 684px;
`;

const DeckArea = styled.div`
  position: fixed;
  top: 136px;
  left: 990px;
  width: 900px;
`;

const SpotifyArea = styled.div`
  position: fixed;
  bottom: 74px;
  font-size: 24px;
  right: 0px;
  padding: 8px 24px 8px 24px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #f0f0f0;
  border-right-width: 0px;
`;

const SponsorArea = styled.div`
  position: fixed;
  top: 664px;
  left: 1006px;
  height: 240px;
  width: 848px;
  font-size: 24px;
  padding: 16px 24px 16px 24px;
  background-color: rgba(0, 0, 0, 0.6);
  border: 2px solid #f0f0f0;
`;

const App = () => {
  return (
    <ReplicantProvider>
      <Container>
        <HeadArea>
          <Head text="Setup" />
        </HeadArea>
        <UpComingArea>
          <UpComing />
        </UpComingArea>
        <DeckArea>
          <ProgramDeck />
        </DeckArea>
        <SpotifyArea>
          <Spotify />
        </SpotifyArea>
        <SponsorArea>
          <Logo />
        </SponsorArea>
      </Container>
    </ReplicantProvider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));