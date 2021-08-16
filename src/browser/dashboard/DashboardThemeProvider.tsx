import { createTheme, ThemeProvider } from '@material-ui/core';
import React, { ReactNode } from 'react';

type Props = {
  children: ReactNode
};

export const DashboardThemeProvider = ({children}: Props) => {

  const theme = createTheme({
    palette: {
      type: 'dark',
    }
  });

  return (
    <ThemeProvider theme={theme} children={children}></ThemeProvider>
  )
}