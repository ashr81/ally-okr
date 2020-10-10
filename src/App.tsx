import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import { GlobalStyles } from './styles/base';
import KeyAndObjectivePage from './containers/KeyAndObjectivePage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <KeyAndObjectivePage />
    </ThemeProvider>
  );
}

export default App;
