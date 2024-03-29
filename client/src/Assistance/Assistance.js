import React, { useState, useEffect, useContext } from 'react';
import { Button, Typography, Container, Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';

const Assistance = () => {
  const { id } = useParams();  // This is either deluxe or regular
  const [error, setError] = useState("");

  return (
    <>
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Box p={2} sx={{ border: '2px solid grey', bgcolor: 'white', textAlign: 'center', marginBottom: '10px'}}>
          <Typography variant="h4" gutterBottom>
            Assistance on the way.
            <br />
            Please wait...
          </Typography>
        </Box>
        
        <Box sx={{ position: 'relative', marginTop: '190px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <CircularProgress sx={{ alignSelf: 'center', marginBottom: '20px' }} />
          <Button variant="contained" color="error" sx={{ marginTop: '190px' }}>Cancel</Button>
        </Box>
      </Container>
    </>
  );
};

export default Assistance;
