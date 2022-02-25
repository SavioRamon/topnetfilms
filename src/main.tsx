import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from './context/themeContext';
import { MovieListProvider } from "./context/movieList";
import App from './App';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <MovieListProvider>
        <App />
      </MovieListProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
