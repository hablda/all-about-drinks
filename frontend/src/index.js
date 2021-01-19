import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './Components/App';
import { Theme, GlobalStyle } from './styles';
import 'normalize.css';

ReactDOM.render(
  <React.StrictMode>
    <Theme>
      <GlobalStyle />
      <App />
    </Theme>
  </React.StrictMode>,
  document.getElementById('root')
);
