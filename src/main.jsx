import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import GlobalStyles from './styles/global';
import { RefreshProvider } from './hooks/refresh'
import { RoutesApp } from './routes/index';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RefreshProvider>
        <RoutesApp/>
      </RefreshProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
