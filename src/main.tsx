import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import RootContext from './context';


ReactDOM.render(
  <React.StrictMode>
    <RootContext>
      <App />
    </RootContext>
  </React.StrictMode>,
  document.getElementById('root')
);
