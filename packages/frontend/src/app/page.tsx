'use client';

import Header from '@/components/top/header';
import TopMain from '@/components/top/main';
import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';

export default function Home() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#60fdfc',
      },
      background: {
        default: '#031744',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <TopMain />
    </ThemeProvider>
  );
}
