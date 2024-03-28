import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TextField, Typography, Container, Grid, Card, CardMedia, CardContent, BottomNavigation, BottomNavigationAction, Box, Modal, Button, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { alpha } from '@mui/material/styles';
import { styled } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';
import {  Stack, AppBar, Toolbar } from '@mui/material';

// ----------------------------------------------------------------------
const AssistanceModal = ({ open, onClose }) => {
    const {id} = useParams();  
    return (
      <>
      
        <GlobalStyles
          styles={{
            body: { backgroundColor: '#FDDFB3' }
          }}
        />
        <Modal
          open={open}
          onClose={onClose}
          aria-labelledby="assistance-modal-title"
          aria-describedby="assistance-modal-description"
          
        >
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              bgcolor: 'white',
              boxShadow: 24,
              p: 4,
              width: 'calc(100% - 40px)',
              maxWidth: 300,
            }}
          >
            <IconButton
              sx={{
                position: 'absolute',
                top: 8,
                right: 8,
              }}
              onClick={onClose}
            >
              <CloseIcon />
            </IconButton>
            <Typography id="assistance-modal-title" variant="h6" component="h2">
              Do you want to call a server for assistance?
            </Typography>
            <Typography id="assistance-modal-description" sx={{ mt: 2 }}>
              Describe your issue or ask for help here.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
              <Button variant="contained" color="error" onClick={onClose}>No, Cancel</Button>
              <Button       
              component={Link} 
                to={`/assistance/${id}`}
              variant="contained" color="success" onClick={onClose}>Yes, Confirm</Button>
            </Box>
          </Box>
        </Modal>
      </>
    );
  };





export default function Footer() {
    const {id} = useParams();  //this is either deluxe or regular
 const [value, setValue] = useState(0);

  const [assistanceModalOpen, setAssistanceModalOpen] = useState(false);

  const handleAssistanceIconClick = () => {
    setAssistanceModalOpen(true);
  };

  const closeAssistanceModal = () => {
    setAssistanceModalOpen(false);
  };

  return (
    <>

    <Box sx={{ width: '100%', position: 'fixed', bottom: 0, zIndex: 9999 }}>
    <BottomNavigation
      showLabels
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    >
      <BottomNavigationAction label="Categories"
      component={Link} 
      to={`/menucategories/${id}`}
      icon={<GridViewOutlinedIcon />} />
      <BottomNavigationAction label="View Order" icon={<ShoppingCartOutlinedIcon />} />
      <BottomNavigationAction label="Assistance"  icon={<HelpOutlineOutlinedIcon />} onClick={handleAssistanceIconClick} />
    </BottomNavigation>
  </Box>

  <AssistanceModal open={assistanceModalOpen} onClose={closeAssistanceModal} />

  </>
  );
}
