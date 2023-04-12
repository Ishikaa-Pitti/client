import * as React from "react"
import { Box, Container} from "@mui/material";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { ThemeProvider } from "@mui/material";
import {theme} from '../../App.js';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
const TurnScrapIntoCash = () => {
  return (
    <ThemeProvider theme = {theme}>
    <Box 
    sx = {{
      width: '100%',
      height: '60%',
      background : '#F6F6F6',
          }}>
      <h1>Turn your scrap into cash</h1>
      <h3>Sell your scrap in just 4 simple steps</h3>
      <Container sx={{display:'flex', flexDirection:'row', justifyContent:'space-evenly'}}>
      <Card sx = {{maxWidth: 260}} >
        <CardActionArea>
          <CardMedia
            
            height = '50'>
            <PersonAddAltIcon fontSize="large"/>  
          </CardMedia>
        <CardContent>Create Profile</CardContent>
        </CardActionArea>
      </Card>
      <Card sx = {{maxWidth: 260}} >
        <CardActionArea>
          <CardMedia
            
            height = '50'>
            <PersonAddAltIcon fontSize="large"/>  
          </CardMedia>
        <CardContent>Create Profile</CardContent>
        </CardActionArea>
      </Card>
      <Card sx = {{maxWidth: 260}} >
        <CardActionArea>
          <CardMedia
            
            height = '50'>
            <PersonAddAltIcon fontSize="large"/>  
          </CardMedia>
        <CardContent>Create Profile</CardContent>
        </CardActionArea>
      </Card>
      <Card sx = {{maxWidth: 260}} >
        <CardActionArea>
          <CardMedia
            
            height = '50'>
            <PersonAddAltIcon fontSize="large"/>  
          </CardMedia>
        <CardContent>Create Profile</CardContent>
        </CardActionArea>
      </Card>
      </Container>
      
    </Box>
    </ThemeProvider>
  );
}
export default TurnScrapIntoCash;
