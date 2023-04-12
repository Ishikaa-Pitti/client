
import './App.css';
import NavBar from './components/NavBar';
import { Outlet } from 'react-router-dom';
import Footer from './components/footer';
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
        <NavBar/>
       </ThemeProvider>
      
      <Outlet />
      <Footer />
    </div>
  );
}

export {App, theme};

