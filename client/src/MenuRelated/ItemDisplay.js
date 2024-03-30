import React, { useState, useEffect } from 'react';
import { Button, Typography, Container, Box } from '@mui/material'
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
      <img src={itemInfo.photo} alt={itemInfo.name} style={{ objectFit: 'cover', width: '100vw', height: '30vh' }} />
      <Box padding={'2vh'} marginTop={'-4vh'} sx={{backgroundColor: "white", borderTopLeftRadius: '25px', borderTopRightRadius: '25px', display: 'relative', zIndex: 10}}>
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
        Item: {itemInfo.name}
      </Typography>
        <br></br><br></br>
        Portion Size per Order: {itemInfo.price}
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
      </Box>


      <br></br><br></br><br></br>


    </>
    );
  };
    
export default ItemDisplay;
    