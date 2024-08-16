import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import { createTheme } from '@mui/material';

export const theme = createTheme({
    breakpoints:{
        values:{
         mobile:0,
         tablet:768,
         laptop:1024,
         desktop:1200
        }
    }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={appStore}>
     <App />
    </Provider>
);
reportWebVitals();
