import React from 'react'
import { ThemeProvider } from '@mui/material';
import { theme } from '../App';
import DashboardNavbar from '../components/clientDashboard/dashboardNavbar'
import RecyclerSidebar from '../components/recyclerDashboard/recyclerSidebar';
const Dashboardr = () => {
  return (
    <ThemeProvider theme={theme}>
      <DashboardNavbar />
      <RecyclerSidebar/>
    </ThemeProvider>
  )
}

export default Dashboardr