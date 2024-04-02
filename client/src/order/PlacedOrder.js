import React, { useContext, useState, useEffect }  from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link, useParams } from 'react-router-dom';



const PlacedOrder = () => {
  const [item, setItem] = useState('');
  const { id } = useParams();

  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const [foodList, setFoodList] = useState([]);

  useEffect(() => {

    const getFoodListFromLocalStorage = () => {
      const storedFoodList = localStorage.getItem('foodList');
      if (storedFoodList) {
        setFoodList(JSON.parse(storedFoodList));
      }
    };


    getFoodListFromLocalStorage();
  }, []); 

  console.log(foodList);

  const handleRemoveItem = (indexToRemove) => {
    const updatedFoodList = foodList.filter((item, index) => index !== indexToRemove);
    setFoodList(updatedFoodList);
    localStorage.setItem('foodList', JSON.stringify(updatedFoodList));
  };




  return (
    <Container maxWidth="md">


            <br></br><br></br><br></br>
            YOUR ORDER HAS BEEN PLACED
            <br></br><br></br><br></br>
            <Button 
            component={Link} 
            to={`/menucategories/${id}`}
            variant="contained" 
            color="primary"
            style={{
              display: 'block',
              backgroundColor: 'green',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Roboto Mono',
              fontWeight: 'bold'
            }}
            >
        
              Order Again
            </Button>

            <br></br><br></br><br></br>


            <Button 
            component={Link} 
            to={`/paying/${id}`}
            variant="contained" 
            color="primary"
            style={{
              display: 'block',
              backgroundColor: 'green',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Roboto Mono',
              fontWeight: 'bold'
            }}
            >
              
              Pay for Items
            </Button>

    </Container>
  );
};

export default PlacedOrder;


