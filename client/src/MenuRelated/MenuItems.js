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


//import mozarellasticks from "../images/mozarellasticks.jpg"

const MenuItems = () => {

  const { id, category } = useParams();
  const [error, setError] = useState("");

    const [foods, setFoods] = useState([]);
    useEffect(() => {
      if (id === "regular") {
        setFoods(RegularFoods.categories.find(cat => cat.name === category).foods);
      } else if (id === "deluxe") {
        setFoods(DeluxeFoods.categories.find(cat => cat.name === category).foods);
      } else {
        setError("Invalid id parameter.");
      }
    }, []);
    console.log(foods)  //THIS IS UR DATA ****



  return (
    <>
          <br></br><br></br>
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
        Food Items For {category}
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
              {/*<TableCell style={{ fontFamily: 'Roboto Mono' }}>Category</TableCell>
              <TableCell style={{ fontFamily: 'Roboto Mono' }}>Price</TableCell>
              <TableCell style={{ fontFamily: 'Roboto Mono' }}>Description</TableCell>
    <TableCell style={{ fontFamily: 'Roboto Mono' }}>Photo</TableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {foods.map((item, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row" style={{ fontFamily: 'Roboto Mono' }}>
                  <Button component={Link} to={`/itemDisplay/${id}/${category}/${item.name}`} style={{ color: 'black', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>
                  <img src={item.photo} alt={item.name} style={{ maxWidth: '30%', height: '20%' }} />
                    
                  </Button>
                </TableCell>
                <TableCell style={{ fontFamily: 'Roboto Mono' }}>
                {item.name}
                <br></br><br></br>
                  {item.price}
                  <br></br><br></br>
               

                </TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      
      <Button 
        component={Link} 
        to={`/menucategories/${id}`}
        variant="contained" 
        color="primary"
        style={{
          display: 'block',
          
          backgroundColor: 'green',
          color: 'white',
        }}
      >
        Go Back
      </Button>
        </Container>
        <br></br><br></br><br></br>
        
    </>
    );
  };
    
export default MenuItems;
    