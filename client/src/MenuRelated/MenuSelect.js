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
const MenuSelect = () => {


  const [error, setError] = useState("");


    return (
        <>
        <br/><br/><br/><br/><br/><br/>
        <Container maxWidth="sm">
          <Typography variant="h4" align="center" gutterBottom>
            Welcome! <br></br> Pick your menu
          </Typography>
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
        </Container>
      </>
    )
    
};

export default MenuSelect