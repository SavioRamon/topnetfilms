import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ThemeProvider } from './context/themeContext';
import { MovieListProvider } from "./context/movieList";
import { AuthProvider } from './context/authentication';


ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <MovieListProvider>
          <App />
        </MovieListProvider>
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
