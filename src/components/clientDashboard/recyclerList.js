import * as React from "react";
import { Box, Card, Paper, ThemeProvider, Typography, CardContent, Button , CardActions, Avatar, CardHeader, CardActionArea, CardMedia} from "@mui/material";
import { theme } from "../../App";
import ProcessSteps from "./processSteps";

const RecyclerList = () => {
    return (
    <ThemeProvider theme={theme}>     
     <Box sx={{ maxWidth:'100%'}}>
        <Box>
            <Typography>Recycler List</Typography>
        </Box>
        <Box>
            <ProcessSteps />
        </Box>
        <Box >
            <Typography>This is card section</Typography>
            <Paper elevation={2}>
            <Card sx={{ maxWidth: 345 }}>
                <CardActionArea sx={{display:'flex' }}>
                    <CardMedia sx={{alignItems:'center'}}>
                        <Avatar>R</Avatar>
                    </CardMedia>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Rahul Mishra
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            Rate List
                            Paper : 15/kg
                            Metal: 30/kg
                            Plastic: 25/kg
          </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button>Schedule a PickUp</Button>
                </CardActions>
            
      
    </Card>
    
            </Paper>
        </Box>
        </Box>
    </ThemeProvider>  
    )
}
export default RecyclerList;