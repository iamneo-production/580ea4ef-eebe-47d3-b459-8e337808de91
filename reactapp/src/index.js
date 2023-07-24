import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@mui/material';

const root = ReactDOM.createRoot(document.getElementById('root'));
ReactDOM.render(
  <>
    <SnackbarProvider
      anchorOrigin={{
        vertical: "top",
        horizontal: "right"
      }}
      TransitionComponent={Slide}
      maxSnack={3}
    ></SnackbarProvider>
    <App />
  </>,
  document.getElementById('root')
);


reportWebVitals();
