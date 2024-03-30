import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import RegularFoods from "../FoodInfo/RegularFoods.json"
import DeluxeFoods from "../FoodInfo/DeluxeFoods.json"
import { Unstable_NumberInput as NumberInput } from '@mui/base/Unstable_NumberInput';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

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






      const addToOrder = () => {

        let foodList = [];

        const storedFood = localStorage.getItem('foodList');

        if (storedFood) {
          foodList = JSON.parse(storedFood);
        }

        const newFood = food;
        foodList.push(newFood);

        localStorage.setItem('foodList', JSON.stringify(foodList));

      alert('Added to Order');
      };






  return (
    <>
      <img src={itemInfo.photo} alt={itemInfo.name} style={{ objectFit: 'cover', width: '100vw', height: '30vh' }} />
      <Box paddingTop={'8vh'} paddingLeft={'5vw'} paddingRight={'5vw'} paddingBottom={'10vh'} marginTop={'-4vh'} marginBottom={'-10vh'} sx={{backgroundColor: "white", borderTopLeftRadius: '25px', borderTopRightRadius: '25px', display: 'relative', zIndex: 10}}>
        <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
          Item: {itemInfo.name}
        </Typography>
        <br/>
        <Typography variant="h7" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"18px" }}>
          Portion Size per Order: {itemInfo['Portion Size, Per Order']}
          <br></br><br></br>
        </Typography>
        <Typography variant="h8" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"15px" }}>
          <b>Description:</b> <br></br>{itemInfo.description}
          <br></br><br></br><br></br>
        </Typography>



        <Button 
        component={Link} 
        to={`/NutritionDisplay/${id}/${category}/${food}`}
        variant="contained" 
        color="primary"
        style={{
          display: 'block',
          backgroundColor: 'primary',
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Roboto Mono',
          fontWeight: 'bold'
        }}
        >
          Nutritional Information
        </Button>
        <br></br>

        <Button 
        component={Link} 
        variant="contained" 
        color="primary"
        style={{
          display: 'block',
          backgroundColor: 'primary',
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Roboto Mono',
          fontWeight: 'bold'
        }}
        >
          Customize your order
        </Button>
        <br></br>

        <Button 
          component={Link} 
          to={`/menuitems/${id}/${category}`}
          variant="contained" 
          color="primary"
          style={{
            display: 'block',
            backgroundColor: 'primary',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Roboto Mono',
            fontWeight: 'bold'
          }}
        >
          Go Back
        </Button>
        
        <br></br>

        <Grid container spacing={2}>
          <Grid>
            {/* {<NumberInput min={0} max={99} slotProps={<AddIcon/>}  />} */}
          </Grid>
          <Grid item xs={6} md={8}>
            <Button 
            component={Link} 
            variant="contained" 
            color="primary"
            style={{
              display: 'block',
              backgroundColor: 'primary',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Roboto Mono',
              fontWeight: 'bold'
            }}
            onClick={addToOrder}
            >
              
              Add to Order
            </Button>
          </Grid>

        </Grid>
      </Box>
    </>
    );
  };
    
export default ItemDisplay;
    