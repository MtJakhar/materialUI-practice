import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { ThemeProvider, createTheme} from '@mui/material'
import { orange, red, blueGrey } from '@mui/material/colors'
import './index.css'
// create theme variable that uses createTheme and use Object to select themes you want to change.
// also wrap your App with ThemeProvider tags and pass theme in it
// you can also create new variants with create themes by creating new key:value pair in whatever component you want look at typography
const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: blueGrey[500]
    },
    secondary: {
      main: orange[500]
    },
    myCustomColor: {
      main: red[500],
      superDark: red[800],
      superLight: red[100]
    }
  },
  typography: {
    orangeFont: {
      fontSize: "2rem",
      color: orange[500]
    }
  }
});



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
