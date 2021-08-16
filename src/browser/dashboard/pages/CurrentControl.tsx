import React from 'react';
import ReactDOM from 'react-dom';
import { Grid } from '@material-ui/core';
import { DashboardThemeProvider } from '../DashboardThemeProvider';
import { ReplicantProvider } from '../../ReplicantProvider';

import '@fortawesome/fontawesome-free/js/all.js';
import { CurrentControl } from '../components/CurrentControl';

const App = () => {

  return (
    <DashboardThemeProvider>
      <ReplicantProvider>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <CurrentControl />
          </Grid>
        </Grid>
      </ReplicantProvider>
    </DashboardThemeProvider>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));