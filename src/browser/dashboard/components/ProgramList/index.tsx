import React from 'react';
import { Grid } from '@material-ui/core';
import { useContext } from 'react';
import { ReplicantContext } from '../../../ReplicantProvider';
import { ProgramAccordion } from './ProgramAccordion';

export const ProgramList = () => {

  const replicant = useContext(ReplicantContext);

  const programs = replicant.programs;

  return (
    <Grid container spacing={2}>
      <Grid item>
        { programs.map(program => (
          <ProgramAccordion program={program} />
        ))}
      </Grid>
    </Grid>
  );
}