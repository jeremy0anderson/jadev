import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {register} from './serviceWorkerRegistration';
import {NextUIProvider} from "@nextui-org/react";
import theme from "./Components/theme";
import {ApolloClient, ApolloProvider, InMemoryCache} from "@apollo/client";

const token = localStorage.getItem('token');
const client = new ApolloClient({
   uri:'https://jeremyjs-server.herokuapp.com/graphql',
   cache: new InMemoryCache(),
   headers:{
      authorization: token!==null?`Bearer ${localStorage.getItem('token')}`:''
   },
});
// import {ThemeProvider} from "@mui/material";
// import theme from "./Components/theme";
// import {NextUIProvider, createTheme} from "@nextui-org/react";
// const darkTheme = createTheme({
//     type: "light", // it could be "light" or "dark"
//     theme: {
//         breakpoints: {
//             xs: '390px',
//             sm: '600px',
//             md: '900px',
//             lg: '1200px',
//             xl: '1920px'
//         },
//         colors: {
//
//             gradient: 'linear-gradient(112deg, $blue100 -25%, $pink500 -10%, $purple500 80%)',
//             link: '#5E1DAD',
//
//             // you can also create your own color
//             myColor: '#ff4ecd'
//
//             // ...  more colors
//         },
//         space: {},
//         fonts: {}
//     }
// })
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
       <ApolloProvider client={client}>
          {/*<NextUIProvider theme={theme}>*/}
          <BrowserRouter>
             <App />
          </BrowserRouter>
          {/*</NextUIProvider>*/}
       </ApolloProvider>
    </React.StrictMode>
);

reportWebVitals();
register();