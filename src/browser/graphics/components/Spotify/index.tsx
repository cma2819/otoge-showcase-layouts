import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { SpotifyPlayingTrack } from '../../../../nodecg/generated/external/nodecg-spotify-widget';
import { SpotifyWidgetInstance } from '../../../../nodecg/spotify';

const Container = styled.div``;

const Icon = styled.i`
  padding-right: 0.2em;
`;

const ncg = nodecg as SpotifyWidgetInstance;

export const Spotify = () => {

  const [ playingTrack, setPlayingTrack ] = useState<SpotifyPlayingTrack>(null);

  useEffect(() => {
    ncg.Replicant('spotifyPlayingTrack', 'nodecg-spotify-widget').on('change', (newVal) => {
      setPlayingTrack(newVal);
    });
  }, [ setPlayingTrack ])

  return (
    <Container>
      {
        playingTrack && (
          <div>
            <Icon className="fas fa-music"></Icon>
            { playingTrack?.name } / { playingTrack?.artists.join(',')}
          </div>
        )
      }
    </Container>
  )
}