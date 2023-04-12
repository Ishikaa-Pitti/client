import React from 'react'
import { ThemeProvider } from '@mui/material';
import { theme } from '../App';
import DashboardNavbar from '../components/clientDashboard/dashboardNavbar'
const Dashboardr = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardNavbar />
    </ThemeProvider>
  )
}

export default Dashboardr