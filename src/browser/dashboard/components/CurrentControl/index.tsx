import { Button, Grid } from '@material-ui/core';
import React from 'react';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import { useContext } from 'react';
import { ReplicantContext } from '../../../ReplicantProvider';
import { ProgramDetail } from './ProgramDetail';
import { ShowcaseNodecgInstance } from '../../../global';

const ncg = nodecg as ShowcaseNodecgInstance;

export const CurrentControl = () => {

  const replicant = useContext(ReplicantContext);

  const surroundCurrentPk = replicant.surroundCurrentPk;
  const currentProgram = replicant.programs.find((program) => {
    return program.pk === surroundCurrentPk.current;
  });

  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          startIcon={<ArrowLeftIcon />}
          onClick={() => {
            if (surroundCurrentPk.prev) {
              ncg.sendMessage('current.update', {pk: surroundCurrentPk.prev});
            }
          }}
          disabled={!surroundCurrentPk.prev}
        >
          戻る
        </Button>
      </Grid>
      <Grid item xs>
      </Grid>
      <Grid item xs={3}>
        <Button
          fullWidth
          variant="contained"
          color="primary"
          endIcon={<ArrowRightIcon />}
          onClick={() => {
            if (surroundCurrentPk.next) {
              ncg.sendMessage('current.update', {pk: surroundCurrentPk.next});
            }
          }}
          disabled={!surroundCurrentPk.next}
        >次へ
        </Button>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          {
            currentProgram && (
              <ProgramDetail program={currentProgram} />
            )
          }
        </Grid>
      </Grid>
    </Grid>
  );
}