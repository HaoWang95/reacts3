import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createTheme, ThemeProvider } from "@material-ui/core/styles";
import { teal, orange } from "@material-ui/core/colors";

const appDefaultTheme = createTheme({
  palette: {
    primary: {
      light: teal[350],
      main: teal[500],
      dark: teal[650],
    },
    secondary: {
      light: orange[350],
      main: orange[500],
      dark: orange[650],
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={appDefaultTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
