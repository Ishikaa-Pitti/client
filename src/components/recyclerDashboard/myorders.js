import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";
function createData(id, clientName, clientAddress, Date, Time) {
    return {id, clientName, clientAddress, Date, Time};
  }
  const rows = [
    createData('01','Sneha', 'Aundh', '05-06-09', '11 AM'),
    createData('01','Sneha', 'Aundh', '05-06-09', '11 AM'),
    createData('01','Sneha', 'Aundh', '05-06-09', '11 AM'),
    createData('01','Sneha', 'Aundh', '05-06-09', '11 AM'),
    createData('01','Sneha', 'Aundh', '05-06-09', '11 AM'),
    createData('01','Sneha', 'Aundh', '05-06-09', '11 AM'),
    createData('01','Sneha', 'Aundh', '05-06-09', '11 AM'),
    
  ];
const Myorders = () => {
    return(
        <Box padding={6}>
    <Typography>
            Pending Orders
    </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Order ID</TableCell>
            <TableCell> Client Name</TableCell>
            <TableCell>Client Address</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Time</TableCell>
            <TableCell>Action </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((rows) => (
            <TableRow
              key={rows.name}
            >
              
              <TableCell align="left">{rows.id}</TableCell>
              <TableCell align="left">{rows.clientName}</TableCell>
              <TableCell align="left">{rows.clientAddress}</TableCell>
              <TableCell align="left">{rows.Date}</TableCell>
              <TableCell align="left">{rows.Time}</TableCell>
              
              <TableCell><Button>Accept</Button><Button>Reject</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>
        </Box>
    )
}
export default Myorders;