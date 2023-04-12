import * as React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import { theme } from '../../App';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
const Dashboardnavbar = () => {
    return(
        <ThemeProvider theme={theme}>
         <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
        <Toolbar sx={{display:'flex', justifyContent:'space-between'}}>
          <Typography variant="h6" noWrap component="div">
            Welcome Username 
          </Typography>
          <Box>
            <IconButton><LogoutRoundedIcon/></IconButton>
            <IconButton><NotificationsRoundedIcon/></IconButton>
          </Box>
        
        </Toolbar>
      </AppBar>
      </Box>
      </ThemeProvider>
    )

}
export default Dashboardnavbar;