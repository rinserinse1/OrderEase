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
import RegularFoods from "../FoodInfo/RegularFoods.json"
import DeluxeFoods from "../FoodInfo/DeluxeFoods.json"


const CategoryDisplay = () => {

  const {id} = useParams();  //this is either deluxe or regular
  const [error, setError] = useState("");

  
    const [categories, setCategories] = useState([]);
    useEffect(() => {
      if (id === "regular") {
        setCategories(RegularFoods.categories);
      } else if (id === "deluxe") {
        setCategories(DeluxeFoods.categories);
      } else {
        setError("Invalid id parameter.");
      }
    }, []);

    console.log(categories)  //THIS IS UR DATA


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
              <TableCell style={{ fontFamily: 'Roboto Mono' }}>Amount of Items</TableCell>
              <TableCell style={{ fontFamily: 'Roboto Mono' }}>Photos</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {categories.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" style={{ fontFamily: 'Roboto Mono' }}>
                  <Button component={Link} to={`/menuItems/${id}/${item.name}`} style={{ color: 'black', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
                    {item.name}
                  </Button>
                </TableCell>
                <TableCell style={{ fontFamily: 'Roboto Mono' }}>
                    {item.foods.length}
                </TableCell>
                <TableCell style={{ fontFamily: 'Roboto Mono' }}>
                    {item.foods[0].photo}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
        </Container>
        <br></br><br></br><br></br>



       </>
    )
    
};

export default CategoryDisplay