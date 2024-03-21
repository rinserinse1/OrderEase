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
import { useParams } from 'react-router-dom'

const MenuSelectConfirm = () => {

  const {id} = useParams();  //this is either deluxe or regular
  const [error, setError] = useState("");


    return (
      <>
        Menu Select = 
        {id}
        <br></br><br></br>
        <Button variant="contained" color="primary"
        component={Link}
        to={`/menucategories/${id}`}
        >

        confirm
        </Button>

        <br></br><br></br>
        <Button variant="contained" color="primary"
        component={Link}
        to="/menuselect"
        >
            
        Go back
        </Button>

       </>
    )
    
};

export default MenuSelectConfirm