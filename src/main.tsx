import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ThemeProvider } from 'styled-components';
import { ScrollContextProvider } from './contexts/ScrollContext.tsx';

const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    blackSecondary: 'rgba(0, 0, 0, 0.85)',
    primary: '#3000B8',
    secondary: '#260093',
    tertiary: '#3A00DD',
    textColor: '#F2EEEE',
    textColorBlack: '#0F0F0F',
    textSecondary: '#7E7E7E',
    bg: '#ECECEC',
  },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ScrollContextProvider>
        <App />
      </ScrollContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
