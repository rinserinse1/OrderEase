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


const ItemDisplay = () => {

  const { id, category, food } = useParams();


  const [error, setError] = useState("");
  const [itemInfo, setItemInfo] = useState([]);



    useEffect(() => {
        if (id === "regular") {
          setItemInfo(RegularFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food));
        } else if (id === "deluxe") {
            setItemInfo(DeluxeFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food));
        } else {
          setError("Invalid id parameter.");
        }
      }, []);


      console.log(itemInfo)   //THIS IS UR DATA ****
  return (
    <>
          <br></br><br></br>
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
        Item: {itemInfo.name}
      </Typography>
        <br></br><br></br>
        Photo:  <img src={itemInfo.photo} alt={itemInfo.name} style={{ maxWidth: '30%', height: '20%' }} />
        <br></br><br></br>
        Price: {itemInfo.price}
        <br></br><br></br>
        Description: <br></br>{itemInfo.description}
        <br></br><br></br>



        <Button 
        component={Link} 
        to={`/NutritionDisplay/${id}/${category}/${food}`}
        variant="contained" 
        color="primary"
        style={{
          display: 'block',
          
          backgroundColor: 'green',
          color: 'white',
        }}
      >
        NutritionalInfo
      </Button>
      <br></br><br></br>


      <Button 
        component={Link} 
        to={`/menuitems/${id}/${category}`}
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
    
export default ItemDisplay;
    