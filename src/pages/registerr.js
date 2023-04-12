import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import {theme} from '../App';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Registerr() {
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const form={
      firstName: data.get('firstName'),
      lastName: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
   const res = await fetch('http://localhost:4000/auth/registerr', {
    method:'POST', 
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(form),
  });
  if (res.ok) {
    console.log('Registration successful');
    navigate('/loginR');
  }
};

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
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  
                  id="address"
                  autoComplete="address"
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
              <Typography component="h1" variant="h5" padding={3} >Types of Scrap Accepted</Typography>
              <Grid item xs={6} >
              <FormGroup>
                <FormControlLabel control={<Checkbox defaultChecked />} label="Paper" />
                <TextField
                  required
                  fullWidth
                  name="Paperrate"
                  label="Rate"
                  id="PaperRate"
                  autoComplete="paper-rate"
                />
                <FormControlLabel control={<Checkbox />} label="Metal" />
                <TextField
                  required
                  fullWidth
                  name="Metalrate"
                  label="Rate"
                  id="MetalRate"
                  autoComplete="metal-rate"
                />
                <FormControlLabel control={<Checkbox />} label=" Plastic" />
                <TextField
                  required
                  fullWidth
                  name="Plasticrate"
                  label="Rate"
                  id="PlasticRate"
                  autoComplete="plastic-rate"
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
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/loginr" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}