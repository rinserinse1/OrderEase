import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import React,  { Component }  from 'react';
import { Box, Button, Drawer, Typography, Avatar, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import Divider from "@mui/material/Divider";
import useResponsive from '../hooks/useResponsive';
import { ListItemIcon, ListItemButton } from '@mui/material';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import DateRangeIcon from '@mui/icons-material/DateRange';


const NAV_WIDTH = 280;

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { pathname } = useLocation();

  const isDesktop = useResponsive('up', 'lg');

  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
  }, [pathname]);



  const renderContent = (
    <>
   

      <br></br><br></br><br></br>
      <Button
        component={Link}
        to="/"
        sx={{
          color: "#FFFFFF",
          fontFamily: "Roboto Mono",
          textTransform: "none",
          fontSize: "20px",
          fontStyle: "none",
          fontWeight: "bold",
          marginLeft: "5px",
          '&:hover': {
            backgroundColor: 'transparent', // Remove background color on hover
            textDecoration: 'none', // Remove underline on hover
          },
        }}
      >
        OrderEase
      </Button>

     
      <br></br><br></br><br></br>
        <Divider />
        <Divider />
        <Divider />
        

      
          <br></br><br></br>   
          <Typography component={Link} to="/menucategories" style={{ color: '#FFFFFF', fontFamily: 'Roboto Mono', display: 'flex', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', marginLeft: '20%', border: 'none', }}>
            <ListItemIcon style={{ color: '#808080', marginRight: '-25px' }}>
              <DateRangeIcon />
            </ListItemIcon>
            Menu Categories
          </Typography>       
        <br></br><br></br>

        <Typography component={Link} to="/" style={{ color: '#FFFFFF', fontFamily: 'Roboto Mono', display: 'flex', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', marginLeft: '20%', border: 'none', }}>
            <ListItemIcon style={{ color: '#808080', marginRight: '-25px' }}>
              <DateRangeIcon />
            </ListItemIcon>
            Sample
          </Typography>       
        <br></br><br></br>

        <Typography component={Link} to="/menuselect" style={{ color: '#FFFFFF', fontFamily: 'Roboto Mono', display: 'flex', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', marginLeft: '20%', border: 'none', }}>
            <ListItemIcon style={{ color: '#808080', marginRight: '-25px' }}>
              <DateRangeIcon />
            </ListItemIcon>
            Menu Select
          </Typography>       
        <br></br><br></br>

        <Typography component={Link} to="/yourorder" style={{ color: '#FFFFFF', fontFamily: 'Roboto Mono', display: 'flex', textDecoration: 'none', fontSize: '15px', fontWeight: 'bold', marginLeft: '20%', border: 'none', }}>
            <ListItemIcon style={{ color: '#808080', marginRight: '-25px' }}>
              <AccountBoxIcon />
            </ListItemIcon>
            Order Status
          </Typography>    


      <Box sx={{ flexGrow: 1 }} />
  

      </>
  );

  return (

    <Box 
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      {isDesktop ? (
        <Drawer
          open
          variant="permanent"
          PaperProps={{
            sx: {
              width: NAV_WIDTH,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
              "backgroundColor":"#333333"
            },
          }}
        >
        {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: { width: NAV_WIDTH ,"backgroundColor":"#333333"},
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>

  );
}
