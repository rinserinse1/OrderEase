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

const CategoryDisplay = () => {

  const {id} = useParams();  //this is either deluxe or regular
  const [error, setError] = useState("");


    return (
      <>
      <br></br><br></br>
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
        Order Categories For {id}
      </Typography>
      <br></br><br></br>
    <TableContainer component={Paper} style={{
      fontFamily: 'Roboto Mono',
      backgroundColor: '#F9F9F9',
      border: 'none',
      boxShadow: 'none', 
      marginRight: '100px',
    }}>
      <Table aria-label="order data table" style={{ fontFamily: 'Roboto Mono' }}>
        <TableHead>
          <TableRow>    
            <TableCell style={{ fontFamily: 'Roboto Mono' }}>Category</TableCell>
            <TableCell style={{ fontFamily: 'Roboto Mono' }}>INSERT PHOTO</TableCell>

            </TableRow>
            </TableHead>
            <TableBody>
                <TableRow>
                  <TableCell component="th" scope="row" style={{ fontFamily: 'Roboto Mono' }}>
                    <Button component={Link} to={`/menu/$test`} style={{ color: 'black', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
                      Test
                    </Button>
                  </TableCell>
                  <TableCell style={{ fontFamily: 'Roboto Mono' }}>test</TableCell>

                </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        </Container>
        <br></br><br></br><br></br>



       </>
    )
    
};

export default CategoryDisplay