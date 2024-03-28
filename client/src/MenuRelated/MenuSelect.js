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
import { Card, CardMedia,Box, ButtonBase } from '@mui/material';

import MenuSelect from "./MenuSelect.css"
import Deluxe_Menu from "../images/Deluxe Menu.png";
import Regular_Menu from "../images/Regular Menu.png";
import GlobalStyles from '@mui/material/GlobalStyles';

const MenuSelectConfirm = () => {

  const [error, setError] = useState("");

  return (
    <>
      <GlobalStyles
        styles={{
          body: { background: `radial-gradient(#FFFFFF, #CA933F)` }
        }}
      />
      <br/><br/><br/><br/>
      <Container maxWidth="sm">
      <Box
  height="100%"
  display="flex"
  alignItems="center"
  justifyContent="center"
  flexDirection="column"
  p={2}
  sx={{ border: '2px solid grey', bgcolor: "white", boxShadow: 2 }}
>
  <Typography variant="h4" align="center" gutterBottom fontWeight='medium'>
    Welcome to <br/> OrderEase! <br/> Pick your menu:
  </Typography>
</Box>
      </Container>
      <br/><br/><br/><br/>

      <Grid container justifyContent="center" spacing={2}>
        <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">

          <Card sx={{ maxWidth: 345, boxShadow: 3, border: 1}}>
            <ButtonBase
              component={Link}
              to="/menuselectconfirm/deluxe"
              style={{ width: '100%' }}
            >
              <CardMedia
                component="img"
                height="140"
                image={Deluxe_Menu}
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
              <Typography variant="h6" component="div" fontWeight='bold'>
                Deluxe Menu
              </Typography>
            </Box>
          </Card>
          </Box>

        </Grid>

        <Grid item xs={12} sm={6}>
        <Box display="flex" justifyContent="center">

          <Card sx={{ maxWidth: 345, marginTop: 10, boxShadow: 3, border: 1 }}>
            <ButtonBase
              component={Link}
              to="/menuselectconfirm/regular"
              style={{ width: '100%' }}
            >
              <CardMedia
                component="img"
                height="140"
                image={Regular_Menu}
              />
            </ButtonBase>
            <Box
              sx={{
                backgroundColor: 'white',
                textAlign: 'center',
                padding: '10px',
              }}
            >
              <Typography variant="h6" component="div" fontWeight='bold'>
                Regular Menu
              </Typography>
            </Box>
          </Card>
          </Box>

        </Grid>
      </Grid>
    </>
  );
};

export default MenuSelectConfirm;
