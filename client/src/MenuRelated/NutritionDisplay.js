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


const NutritionDisplay = () => {

  const { id, category, food } = useParams();
  //console.log(id)
  //console.log(category)
  //console.log(food)
  //console.log(DeluxeFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food).nutritionalInfo)

  const [error, setError] = useState("");
  
    //console.log(RegularFoods.categories)

    const [itemInfo, setItemInfo] = useState([]);
    const [nutritionalInfo, setNutritionalInfo] = useState([]);
    //const [foods, setFoods] = useState([]);
    //const deluxeFoods = DeluxeFoods;

    useEffect(() => {
        if (id === "regular") {
          setItemInfo(RegularFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food));
          setNutritionalInfo(RegularFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food).nutritionalInfo);
        } else if (id === "deluxe") {
            setItemInfo(DeluxeFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food));
            setNutritionalInfo(DeluxeFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food).nutritionalInfo);
        } else {
          setError("Invalid id parameter.");
        }
      }, [DeluxeFoods]);


      console.log(itemInfo)                    //THESE ARE BOTH UR DATA *****
      console.log(nutritionalInfo.calories)

  return (
    <>
          <br></br><br></br>
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
        Item: {itemInfo.name}
      </Typography>
        <br></br><br></br>
        Photo: {itemInfo.photo}
        <br></br><br></br>
        Calories: {nutritionalInfo.calories}
        <br></br><br></br>
        Fat: {nutritionalInfo.fat}
        <br></br><br></br>
        Carbohydrate: {nutritionalInfo.carbohydrates}
        <br></br><br></br>
        Protein: {nutritionalInfo.protein}
        <br></br><br></br>

        <Button 
        component={Link} 
        to={`/itemDisplay/${id}/${category}/${food}`}
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
    
export default NutritionDisplay;
    