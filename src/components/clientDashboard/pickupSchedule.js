import * as React from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import { Button, Typography } from "@mui/material";

function createData(id, status) {
  return {id, status };
}
function createAData(id, name, time, otp){
  return{id, name, time, otp};
}

const rows = [
  createData('01','Accepted'),
  createData('02', 'Rejected'),
  
];
const acceptedrows =[
  createAData('01', 'Rahul', '10 AM', '3458')
]
const PickupSchedule = () => {
    return(
      <Box>
      <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Pickup ID</TableCell>
            <TableCell>Pickup Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
             
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.status}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <Box padding={6}>
    <Typography>
            Accepted Pickups
    </Typography>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="medium">
        <TableHead>
          <TableRow>
            <TableCell>Pickup ID</TableCell>
            <TableCell>Recycler Name</TableCell>
            <TableCell>Sceduled Time</TableCell>
            <TableCell>OTP</TableCell>
            <TableCell>Action </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {acceptedrows.map((acceptedrows) => (
            <TableRow
              key={acceptedrows.name}
            >
              
              <TableCell align="left">{acceptedrows.id}</TableCell>
              <TableCell align="left">{acceptedrows.name}</TableCell>
              <TableCell align="left">{acceptedrows.time}</TableCell>
              <TableCell align="left">{acceptedrows.otp}</TableCell>
              <TableCell><Button>Reschedule</Button><Button>Cancel</Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>

    </Box>
    </Box>
    )
}
export default PickupSchedule;