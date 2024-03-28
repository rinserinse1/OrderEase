import React, { useState, useEffect, useContext } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Button, Typography, Container, Box} from '@mui/material'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import GlobalStyles from '@mui/material/GlobalStyles';
import Deluxe_Menu from "../images/Deluxe Menu.png";

const MenuSelectConfirm = () => {

  const {id} = useParams();  //this is either deluxe or regular
  const [error, setError] = useState("");


    return (
      <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#FDDFB3' }
        }}
      />

      <Container maxWidth="sm">
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={2}
          sx={{ border: '2px solid grey', bgcolor: "white" }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            You have Selected the {id} Menu
          </Typography>
        </Box>
      </Container>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2} // Adjust margin top as needed
      >
        <img
          src={Deluxe_Menu}
          alt="Deluxe Menu"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: 'auto',
            height: 'auto'
          }}
        />
      </Box>
<br></br>
      <Container maxWidth="sm">
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={2}
          sx={{ border: '2px solid grey', bgcolor: "white" }}
        >
          <Typography variant="h6" align="center" gutterBottom>
              {id === 'deluxe' && (
            "DELUXE DESC"
          )}
            {id === 'regular' && (
          "REG DESC"
            )}
    </Typography>
        </Box>
      </Container>

    <br></br>
      <Container maxWidth="sm">
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={2}
          sx={{ border: '2px solid grey', bgcolor: "white" }}
        >
        
          <Typography variant="h4" align="center" gutterBottom>
           Confirm menu Selection
          </Typography>

          <Box display="flex" justifyContent="space-between" mt={2}>

          <Button variant="contained" color="error" component={Link}  to="/menuselect" sx={{ marginRight: 2 }}>
              Cancel
            </Button>

            <Button variant="contained"  color="success" component={Link} to={`/menucategories/${id}`} sx={{ marginRight: 2 }}>
              Confirm
            </Button>

           
          </Box>
        </Box>
      </Container>

      <Typography variant="h6" align="center" gutterBottom>
        Menu Select = {id}
      </Typography>

      <br/><br/>

     

      <br/><br/>

      
    </>
  );
};

export default MenuSelectConfirm;
