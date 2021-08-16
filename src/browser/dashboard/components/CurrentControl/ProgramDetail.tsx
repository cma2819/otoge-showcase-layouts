import { Grid, InputAdornment, TextField } from '@material-ui/core';
import { HeadsetMic, SportsEsports } from '@material-ui/icons';
import React from 'react';
import { Program } from '../../../../nodecg/generated/lib';

type Props = {
  program: Program
}

export const ProgramDetail = ({ program }: Props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <TextField
          label="企画名"
          value={program.name}
          InputProps={{
            readOnly: true,
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="ゲーム"
          value={program.game}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="予定時間"
          value={program.estimate}
          InputProps={{
            readOnly: true,
          }}
        />
      </Grid>
      <Grid item xs={12}>
        {program.players.map((player, index) => (
          <Grid item xs={6} key={`${program.pk}-p${index}`}>
            <TextField
              fullWidth
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <SportsEsports />
                  </InputAdornment>
                )
              }}
              value={player.name}
            />
          </Grid>
        ))}
      </Grid>
      <Grid item xs={12}>
        {program.commentators.map((commentator, index) => (
          <Grid item xs={6} key={`${program.pk}-c${index}`}>
            <TextField
              fullWidth
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <HeadsetMic />
                  </InputAdornment>
                )
              }}
              value={commentator.name}
            />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}