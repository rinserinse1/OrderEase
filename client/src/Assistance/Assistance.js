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

const Assistance= () => {

  const {id} = useParams();  //this is either deluxe or regular
  const [error, setError] = useState("");


    return (
      <>
      ASSITANCE PAGE

      
    </>
  );
};

export default Assistance;
