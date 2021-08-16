import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import { ReplicantProvider } from '../../ReplicantProvider';
import '@fortawesome/fontawesome-free/js/all.js';
import { ProgramList } from '../components/ProgramList';
import { DashboardThemeProvider } from '../DashboardThemeProvider';

const App = () => {

  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <ProgramList />
          </Grid>
        </Grid>
      </ReplicantProvider>
    </DashboardThemeProvider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));