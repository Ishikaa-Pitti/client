
import './App.css';

import { Outlet } from 'react-router-dom';
import { ThemeProvider, createTheme, } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#FFB901'
    },
    secondary:{
      main: '#0149ff'
    }
  }
});

function App() {
  return (
    <div className="App">
       <ThemeProvider theme={theme}>
        
       </ThemeProvider>
      
      <Outlet />
     
    </div>
  );
}

export {App, theme};

