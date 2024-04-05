import React, { useEffect } from 'react';
import { Button, Typography, Container, Box, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom'; 

const Assistance = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem('assistance', JSON.stringify(true));

    const timer = setTimeout(() => {
      localStorage.setItem('assistance', JSON.stringify(false));
      navigate(-1); 
    }, 10000); 

    return () => clearTimeout(timer);
  }, [navigate]);

  const handleCancel = () => {
    localStorage.setItem('assistance', JSON.stringify(false));
    navigate(-1); 
  };

  const handleContinueBrowsing = () => {
    navigate(`/menucategories/${id}`);
  };

  return (
    <>
      <br /><br />
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Box p={2} sx={{ border: '2px solid grey', bgcolor: 'white', textAlign: 'center', marginBottom: '10px' }}>
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
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Assistance;
