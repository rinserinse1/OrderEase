import React, { useState, useEffect, } from 'react';
import {Button, Typography, Container, Box} from '@mui/material'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import RegularFoods from "../FoodInfo/RegularFoods.json"
import DeluxeFoods from "../FoodInfo/DeluxeFoods.json"


const NutritionDisplay = () => {
  const { id, category, food } = useParams();

  const [itemInfo, setItemInfo] = useState([]);
  const [nutritionalInfo, setNutritionalInfo] = useState([]);

  useEffect(() => {
    if (id === "regular") {
      setItemInfo(
        RegularFoods.categories
          .find((cat) => cat.name === category)
          .foods.find((cat) => cat.name === food)
      );
      setNutritionalInfo(
        RegularFoods.categories
          .find((cat) => cat.name === category)
          .foods.find((cat) => cat.name === food).nutritionalInfo
      );
    } else if (id === "deluxe") {
      setItemInfo(
        DeluxeFoods.categories
          .find((cat) => cat.name === category)
          .foods.find((cat) => cat.name === food)
      );
      setNutritionalInfo(
        DeluxeFoods.categories
          .find((cat) => cat.name === category)
          .foods.find((cat) => cat.name === food).nutritionalInfo
      );
    } else {
    }
  }, [DeluxeFoods]);

  return (
    <>
      <Container maxWidth="md" sx={{ textAlign: "center", marginTop: "20px" }}>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={2}
          sx={{
            border: "2px solid grey",
            bgcolor: "white",
            borderRadius: "10px",
            fontFamily: "Roboto Mono",
          }}
        >
          <Typography
            variant="h6"
            style={{
              color: "black",
              fontFamily: "Roboto Mono",
              fontSize: "30px",
            }}
          >
            Item: {itemInfo.name}
          </Typography>
          <br></br>
          <Box
            component="img"
            src={itemInfo.photo}
            sx={{
              width: "80vw",
              height: "20vh",
              objectFit: "cover",
              boxShadow: 3,
              border: 1,
            }}
          ></Box>
          <br></br>
        </Box>
        <br></br>
        <br></br>
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={2}
          sx={{
            border: "2px solid grey",
            bgcolor: "white",
            borderRadius: "10px",
            fontFamily: "Roboto Mono",
          }}
        >
          <Typography
            variant="h5"
            style={{
              color: "black",
              fontFamily: "Roboto Mono",
              fontSize: "20px",
              fontWeight: "bold",
            }}
          >
            Nutritional Information:
          </Typography>
          <br></br>
          <div>
            <b>Calories:</b> {nutritionalInfo.calories} g
          </div>
          <br></br>
          <div>
            <b>Fat:</b> {nutritionalInfo.fat} g
          </div>
          <br></br>
          <div>
            <b>Carbohydrate:</b> {nutritionalInfo.carbohydrates} g
          </div>
          <br></br>
          <div>
            <b>Protein:</b> {nutritionalInfo.protein} g
          </div>
        </Box>

        <br></br>
        <br></br>

        <Button
          component={Link}
          to={`/itemDisplay/${id}/${category}/${food}`}
          variant="contained"
          color="primary"
          style={{
            display: "block",
            border: 1,
            backgroundColor: "green",
            color: "white",
            boxShadow: 3,
            fontWeight: "bold",
            fontFamily: "Roboto Mono",
          }}
        >
          Go Back
        </Button>
      </Container>
      <br></br>
      <br></br>
      <br></br>
    </>
  );
};

export default NutritionDisplay;
