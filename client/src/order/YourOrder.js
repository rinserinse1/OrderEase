import React, { useContext, useState, useEffect }  from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';



const YourOrder = () => {
  const [item, setItem] = useState('');


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



  const handleRemoveItem = (indexToRemove) => {
    const updatedFoodList = foodList.filter((item, index) => index !== indexToRemove);
    setFoodList(updatedFoodList);
    localStorage.setItem('foodList', JSON.stringify(updatedFoodList));
  };


  return (
    <Container maxWidth="md">
      <br /><br />
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Mono' }}><strong>Your Order</strong></Typography>
      <br />
      <Paper elevation={3} sx={{ padding: 3, backgroundColor: '#F9F9F9' }}>

      <Grid container spacing={2}>
      <Grid item xs={10}>
      {foodList.map((item, index) => (
          <div key={index}>
            <Typography variant="h6" >
              {item} <Button onClick={() => handleRemoveItem(index)}>Remove</Button>
            </Typography>
            
          </div>
        ))}
      </Grid>
    </Grid>
      </Paper>
      <br />

    </Container>
  );
};

export default YourOrder;


