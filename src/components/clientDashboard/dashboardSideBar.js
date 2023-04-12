import * as React from 'react';
import { Drawer, ListItem } from '@mui/material';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import PickupSchedule from './pickupSchedule';
import ListItemText from '@mui/material/ListItemText';
import ScheduleOutlinedIcon from '@mui/icons-material/ScheduleOutlined';

const drawerWidth = 240;
const Dashboardsidebar = () => {
    //const [isCollapsed, setIsCollapsed] = useState(false);
    //const [selected, setSelected] = useState('Dashboard');
    return (
        <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
        <List>
            <ListItem key="My Pickup" disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ScheduleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Pickup" />
                </ListItemButton>
            </ListItem>
            
        </List>
        </Box>
    </Drawer>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar/>
        <PickupSchedule />
    </Box>
    </Box>
        
        
    )
}
export default Dashboardsidebar;