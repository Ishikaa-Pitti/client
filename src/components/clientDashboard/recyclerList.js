import * as React from "react";
import { Box, Card, Paper, ThemeProvider, Typography, CardContent, Button , CardActions, Avatar, CardActionArea, CardMedia} from "@mui/material";
import { theme } from "../../App";
import ProcessSteps from "./processSteps";

const RecyclerList = () => {
    return (
    <ThemeProvider theme={theme}>     
     <Box sx={{ maxWidth:'100%'}}>
        <Box>
            <ProcessSteps />
        </Box>
        <Box >
            <Typography>List of all Recyclers</Typography>
            <Paper elevation={2} sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex', gap: 2 }}>
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia sx={{ alignItems: 'center', paddingTop:3}}>
        <Avatar>R</Avatar>
      </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            Rahul Mishra
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rate List <br />
            Paper : 15/kg <br />
            Metal: 30/kg <br />
            Plastic: 25/kg
          </Typography>
        </CardContent>
        <CardActions sx={{ alignSelf: 'center', pt: 2 }}>
          <Button>Schedule a PickUp</Button>
        </CardActions>
      </Box>
    </CardActionArea>
  </Card>
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia sx={{ alignItems: 'center', paddingTop:3}}>
        <Avatar>R</Avatar>
      </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            Hitesh Pawar
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rate List <br />
            Paper : 18/kg <br />
            Metal: 28/kg <br />
            Plastic: 26/kg
          </Typography>
        </CardContent>
        <CardActions sx={{ alignSelf: 'center', pt: 2 }}>
          <Button>Schedule a PickUp</Button>
        </CardActions>
      </Box>
    </CardActionArea>
  </Card>
  <Card sx={{ maxWidth: 345 }}>
    <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia sx={{ alignItems: 'center', paddingTop:3}}>
        <Avatar>R</Avatar>
      </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
           Sourabh Patil
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rate List <br />
            Paper : 15/kg <br />
            Metal: 30/kg <br />
            Plastic: 25/kg
          </Typography>
        </CardContent>
        <CardActions sx={{ alignSelf: 'center', pt: 2 }}>
          <Button>Schedule a PickUp</Button>
        </CardActions>
      </Box>
    </CardActionArea>
  </Card>
  <Card sx={{ maxWidth: 445 }}>
    <CardActionArea sx={{ display: 'flex', flexDirection: 'column' }}>
      <CardMedia sx={{ alignItems: 'center', paddingTop:3}}>
        <Avatar>R</Avatar>
      </CardMedia>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            Omkar More
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Rate List <br />
            Paper : 15/kg <br />
            Metal: 30/kg <br />
            Plastic: 25/kg
          </Typography>
        </CardContent>
        <CardActions sx={{ alignSelf: 'center', pt: 2 }}>
          <Button>Schedule a PickUp</Button>
        </CardActions>
      </Box>
    </CardActionArea>
  </Card>
  </Box>
</Paper>

        </Box>
        </Box>
    </ThemeProvider>  
    )
}
export default RecyclerList;