import React, { }  from 'react';
import {Container, Typography, Button, Box} from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const PlacedOrder = () => {
  const { id } = useParams();

  return (
    <Container maxWidth="md">
      <br></br>
      <br></br>
      <br></br>
      <Box
        height="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
        p={2}
        sx={{
          border: "2px solid grey",
          bgcolor: "white",
          boxShadow: 2,
          mb: -2,
          borderRadius: "10px",
          padding: "20% 0 20% 0",
        }}
      >
        <Typography variant="h5" align="center" gutterBottom fontWeight="Bold">
          Your order has been placed!
        </Typography>
      </Box>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <Button
        component={Link}
        to={`/menucategories/${id}`}
        variant="contained"
        color="primary"
        style={{
          display: "block",
          backgroundColor: "green",
          color: "white",
          textAlign: "center",
          fontFamily: "Roboto Mono",
          fontWeight: "bold",
          padding: "5% 0 5% 0",
          fontSize: "5vw",
        }}
      >
        Order More Items
      </Button>

      <br></br>
      <br></br>
      <br></br>

      <Button
        component={Link}
        to={`/paying/${id}`}
        variant="contained"
        color="primary"
        style={{
          display: "block",
          backgroundColor: "#4CBB17",
          color: "white",
          textAlign: "center",
          fontFamily: "Roboto Mono",
          fontWeight: "bold",
          padding: "5% 0 5% 0",
          fontSize: "5vw",
        }}
      >
        Pay for Items
      </Button>
    </Container>
  );
};

export default PlacedOrder;
