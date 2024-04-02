import React, { useState, useEffect, useContext } from 'react';
import { Button, Typography, Container, Box, CircularProgress } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
const Paying = () => {
  const { id } = useParams();  // This is either deluxe or regular
  const [error, setError] = useState("");


  useEffect(() => {

    const timeoutId = setTimeout(() => {

      window.location.href = "/menuselect"; 
    }, 10000); // 10000 milliseconds = 10 seconds

    // Clean up the timeout on component unmount
    return () => clearTimeout(timeoutId);
  }, []);



  return (
    <>
    <br></br><br></br>
      <Container maxWidth="sm" sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <Box p={2} sx={{ border: '2px solid grey', bgcolor: 'white', textAlign: 'center', marginBottom: '10px'}}>
          <Typography variant="h4" gutterBottom>
            Server is on the way.
            <br />
            Please wait...
          </Typography>
        </Box>
        
        <Box sx={{ position: 'relative', marginTop: '190px', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-start' }}>
          <CircularProgress sx={{ alignSelf: 'center', marginBottom: '20px' }} />
          <Button 
          variant="contained" color="error" sx={{ marginTop: '190px' }}
          component={Link} 
          to={`/placedorder/${id}`}>
          Cancel
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Paying;
