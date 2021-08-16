import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Button, Grid, InputAdornment, TextField, Typography } from '@material-ui/core';
import { Program } from '../../../../nodecg/generated/lib';
import { ExpandMore, Gamepad, HeadsetMic, SportsEsports, Timer } from '@material-ui/icons';
import { ShowcaseNodecgInstance } from '../../../global';

type Props = {
  program: Program
};

const ncg = nodecg as ShowcaseNodecgInstance;

export const ProgramAccordion = ({program}: Props) => {
  return (
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMore />}
      >
        <Typography>{program.name}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              fullWidth
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Gamepad />
                  </InputAdornment>
                )
              }}
              value={program.game}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              fullWidth
              InputProps={{
                readOnly: true,
                startAdornment: (
                  <InputAdornment position="start">
                    <Timer />
                  </InputAdornment>
                )
              }}
              value={program.estimate}
            />
          </Grid>
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
          <Grid item xs={12}>
            <Button variant="contained" color="primary" onClick={() => {ncg.sendMessage('current.update', {pk: program.pk})}}>
              表示する
            </Button>
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}