import React, { useState, useEffect, useContext } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Typography, Container} from '@mui/material'
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import { Card, CardMedia,Box, ButtonBase, } from '@mui/material';
const MenuSelectConfirm = () => {


  const [error, setError] = useState("");


    return (
        <>
        <br/><br/><br/><br/>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Welcome to <br></br> OrderEase! <br></br> Pick your menu
          </Typography>
          </Container>
          <br/><br/><br/><br/>
          {/*
          <Grid container spacing={2}>
          <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth
                component={Link}
                to="/menucategories"
              >
                Regular
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                variant="contained"
                size="large"
                color="primary"
                fullWidth

                component={Link}
                to="/menucategories"
              >
                Deluxe
              </Button>
            </Grid>

          </Grid>
        
    */}


        <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <ButtonBase
            component={Link}
            to="/menucategories"
            style={{ width: '100%' }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/345x140"
              alt="Deluxe Menu"
            />
          </ButtonBase>
          <Box
            sx={{
              backgroundColor: 'white',
              textAlign: 'center',
              padding: '10px',
            }}
          >
            <Typography variant="h6" component="div">
              Deluxe Menu
            </Typography>
          </Box>
        </Card>
      </Grid>
      
      <Grid item>
        <Card sx={{ maxWidth: 345, marginTop: 10 }}>
          <ButtonBase
            component={Link}
            to="/menucategories"
            style={{ width: '100%' }}
          >
            <CardMedia
              component="img"
              height="140"
              image="https://via.placeholder.com/345x140"
              alt="Deluxe Menu"
            />
          </ButtonBase>
          <Box
            sx={{
              backgroundColor: 'white',
              textAlign: 'center',
              padding: '10px',
            }}
          >
            <Typography variant="h6" component="div">
              Deluxe Menu
            </Typography>
          </Box>
        </Card>
      </Grid>
    </Grid>
      </>
    )
    
};

export default MenuSelectConfirm