import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SnackbarProvider } from 'notistack';
import { Slide } from '@mui/material';
import AuthProvider from './context/AuthProvider';

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
    {/*<AuthProvider>*/}
    <App />
    {/*</AuthProvider>*/}
  </>,
  document.getElementById('root')
);


reportWebVitals();
