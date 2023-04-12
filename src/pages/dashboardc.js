
import { ThemeProvider } from '@mui/material';
import { theme } from '../App';
import * as React from 'react';
import Dashboardnavbar from '../components/clientDashboard/dashboardNavbar';
import Dashboardsidebar from '../components/clientDashboard/dashboardSideBar';

export default function dashboardc() {
  return (
    <ThemeProvider theme={theme}>
    <Dashboardnavbar />
    <Dashboardsidebar />
    
    </ThemeProvider>
  );
}