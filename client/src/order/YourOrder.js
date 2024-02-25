import React, { useContext, useState, useEffect }  from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';



const YourOrder = () => {
  const [item, setItem] = useState('');


  const isSmallScreen = useMediaQuery('(max-width:800px)');


  return (
    <Container maxWidth="md">
      <br /><br />
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Mono' }}><strong>Your Order</strong></Typography>
      <br />
      <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#F9F9F9' }}>

        <Grid container spacing={3}>
          <Grid item xs={6}>
            <Typography variant="h6" fontFamily="Roboto Mono">Item Name :</Typography>
            <Typography variant="h6" fontFamily="Roboto Mono">Item Name :</Typography>
            <Typography variant="h6" fontFamily="Roboto Mono">Item Name :</Typography>
            <Typography variant="h6" fontFamily="Roboto Mono">Item Name :</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', alignItems: 'center' }}>
              <Typography fontFamily="Roboto Mono">{item}</Typography>
          </Grid>

        </Grid>
      </Paper>
      <br />

    </Container>
  );
};

export default YourOrder;


