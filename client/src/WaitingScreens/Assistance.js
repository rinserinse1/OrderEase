import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Assistance = () => {
  const { id } = useParams();  

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      window.location.href = `/menucategories/${id}`;
    }, 10000); 

    
    return () => clearTimeout(timeoutId);
  }, [id]);

  // this will just use the history of the browser, alternatively we have to import like it says here "https://stackoverflow.com/questions/52039083/handle-back-button-with-react-router"
  const handleContinueBrowsing = () => {
    window.history.back();
  };

  return (
    <>
      <br /><br />
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Box p={2} sx={{ border: '2px solid grey', bgcolor: 'white', textAlign: 'center', marginBottom: '10px'}}>
          <Typography variant="h4" gutterBottom>
            Assistance on the way.<br />Please wait...
          </Typography>
        </Box>
        
        <Box sx={{ position: 'relative', marginTop: '190px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <CircularProgress sx={{ alignSelf: 'center', marginBottom: '20px' }} />
          <Button 
            variant="contained" 
            color="primary" 
            sx={{ marginBottom: '20px', marginTop: '15vh' }}
            onClick={handleContinueBrowsing}
          >
            Continue Browsing
          </Button>
          <Button 
            variant="contained" 
            color="error" 
            sx={{ marginTop: '20px' }}
            component={Link} 
            to={`/menucategories/${id}`}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Assistance;
