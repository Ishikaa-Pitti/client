import React from 'react';
import { Box, Typography, TextField, FormControlLabel, Checkbox, Button, Grid, Container, CssBaseline, FormGroup} from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../App';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';


const PickupForm = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography component="h1" variant="h5">
           Pickup Form
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="contact"
                  label="Contact Number"
                  name="contactNumber"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                />
                
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="pincode"
                  label="Pincode"
                  
                  id="pincode"
                  autoComplete="pincode"
                />
                
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="city"
                  label="City"
                  
                  id="city"
                  autoComplete="city"
                />
                
              </Grid>
                <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  icon = {<CalendarMonthOutlinedIcon/>}
                  name="date"
                  label="Date"
                  id="date"
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  required
                  fullWidth
                  name="time"
                  label="Time"
                  id="time"
                />
              </Grid>
              <Typography component="h1" variant="h5" padding={3} >Scrap Details</Typography>
              <Grid item xs={6} >
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Paper" />
                <TextField
                  required
                  fullWidth
                  name="Paperweight"
                  label="Approx. Weight"
                  id="Paperweight"
                  autoComplete="paper-weight"
                />
                <FormControlLabel control={<Checkbox />} label="Metal" />
                <TextField
                  required
                  fullWidth
                  name="Metalweight"
                  label="Approx. Weight"
                  id="Metalweight"
                  autoComplete="metal-weight"
                />
                <FormControlLabel control={<Checkbox />} label=" Plastic" />
                <TextField
                  required
                  fullWidth
                  name="Plasticweight"
                  label="Approx. Weight"
                  id="Plasticweight"
                  autoComplete="plastic-weight"
                />
              </FormGroup>
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Schedule a Pickup
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  )
}

export default PickupForm;