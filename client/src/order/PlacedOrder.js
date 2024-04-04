import React, { useContext, useState, useEffect }  from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Box
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
            <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p={2}
            sx={{ border: '2px solid grey', bgcolor: "white", boxShadow: 2, mb: -2, borderRadius: '10px', padding: '20% 0 20% 0' }}
            >
              <Typography variant="h5" align="center" gutterBottom fontWeight='Bold'>
                Your order has been placed!
              </Typography>
            </Box>
            <br></br><br></br><br></br><br></br><br></br>
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
              fontWeight: 'bold',
              padding: '5% 0 5% 0'
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
              fontWeight: 'bold',
              padding: '5% 0 5% 0'
            }}
            >
              
              Pay for Items
            </Button>

    </Container>
  );
};

export default PlacedOrder;


