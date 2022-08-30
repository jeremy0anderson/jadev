import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {register} from './serviceWorkerRegistration.ts';
import {ThemeProvider} from "@mui/material";
import theme from "./Components/theme";
import {NextUIProvider, createTheme} from "@nextui-org/react";
const darkTheme = createTheme({
    type: "light", // it could be "light" or "dark"
    theme: {
        breakpoints: {
            xs: '390px',
            sm: '600px',
            md: '900px',
            lg: '1200px',
            xl: '1920px'
        },
        colors: {

            gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
            link: '#5E1DAD',

            // you can also create your own color
            myColor: '#ff4ecd'

            // ...  more colors
        },
        space: {},
        fonts: {}
    }
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
              <BrowserRouter>
                  <App />
              </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
register();