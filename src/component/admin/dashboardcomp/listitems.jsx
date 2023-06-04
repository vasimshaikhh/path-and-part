import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PeopleIcon from '@mui/icons-material/People';
import BarChartIcon from '@mui/icons-material/BarChart';
import LayersIcon from '@mui/icons-material/Layers';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { Link } from 'react-router-dom';
import TwoWheelerIcon from '@mui/icons-material/TwoWheeler';
import LockIcon from '@mui/icons-material/Lock';
import RouteIcon from '@mui/icons-material/Route';

export const mainListItems = (
  <React.Fragment>

  {/* <Link to='/admin/dashboard'>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>   
        <ListItemText primary="Dashboard" />
      </ListItemButton>
    </Link> */}


    <Link to='/admin/allriders'>
    <ListItemButton>
      <ListItemIcon>
        <TwoWheelerIcon />
      </ListItemIcon>
      <ListItemText primary="Rider's Detail" />
      </ListItemButton>
      </Link>

    {/* <Link to='/admin/rider-route'>
    <ListItemButton>
      <ListItemIcon>
        <RouteIcon />
      </ListItemIcon>
      <ListItemText primary="Rider's Route" />
      </ListItemButton>
      </Link> */}

      <Link to='/admin/users'>
    <ListItemButton>
      <ListItemIcon>
        <BarChartIcon />
      </ListItemIcon>
      <ListItemText primary="Users" />
    </ListItemButton>
    </Link>

    <ListItemButton>
      <ListItemIcon>
        <LayersIcon />
      </ListItemIcon>
      <ListItemText primary="Integrations" />
    </ListItemButton>

  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      Auth
    </ListSubheader>
    <Link to='/admin/signin'>
    <ListItemButton>
      <ListItemIcon>
        <LockIcon />
      </ListItemIcon>   
        <ListItemText primary="Signin" />
      </ListItemButton>
    </Link>
  </React.Fragment>
);