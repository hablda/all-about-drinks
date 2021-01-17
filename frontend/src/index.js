import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App/App';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
