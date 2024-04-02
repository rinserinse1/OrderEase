import React, { useContext, useState, useEffect }  from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';



const YourOrder = () => {

  const { id } = useParams();
  const [item, setItem] = useState('');


  const isSmallScreen = useMediaQuery('(max-width:800px)');
  const [foodList, setFoodList] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);

  useEffect(() => {

    const getDataFromLocalStorage = () => {

      const storedFoodList = localStorage.getItem('foodList');
      if (storedFoodList) {
        setFoodList(JSON.parse(storedFoodList));
      }


      const storedOrderHistory = localStorage.getItem('orderHistory');
      if (storedOrderHistory) {
        setOrderHistory(JSON.parse(storedOrderHistory));
      }


    };


    getDataFromLocalStorage();
  }, []); 

  console.log(foodList);

  const handleRemoveItem = (indexToRemove) => {
    const updatedFoodList = foodList.filter((item, index) => index !== indexToRemove);
    setFoodList(updatedFoodList);
    localStorage.setItem('foodList', JSON.stringify(updatedFoodList));
  };


  const handlePlaceOrder = () => {
    localStorage.removeItem('foodList');


    let orderHistory = [];
      
    const storedOrderHistory = localStorage.getItem('orderHistory');
  
    if (storedOrderHistory) {
      orderHistory  = JSON.parse(storedOrderHistory);
    }
  

    orderHistory.push(foodList);
    orderHistory = orderHistory.flat(); //flatten
  
    // Update the order in local storage
    localStorage.setItem('orderHistory', JSON.stringify(orderHistory ));
  
    alert('Placed Order');
    window.location.href = `/placedorder/${id}`;
  };


  return (
    <Container maxWidth="md">
      <br /><br />
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Mono' }}><strong>Your Order</strong></Typography>
      <br />
      <Paper elevation={3} sx={{ padding: 1, backgroundColor: '#F9F9F9' }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
          {foodList.map((item, index) => (
              <div key={index}>
                <Typography variant="h7" >
                  {item.food}
                  <Typography marginLeft="20px" variant="h7" style={{ fontStyle: 'italic' }}>{item.note}</Typography>
                  <br></br>
                  Qty: {item.quantity}  <Button onClick={() => handleRemoveItem(index)}>Remove</Button>
                </Typography>
                <br></br><br></br>
              </div>
            ))}
          </Grid>
        </Grid>
      </Paper>
      <br /><br />
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Mono' }}><strong>Order History</strong></Typography>
      <Paper elevation={3} sx={{ padding: 1, backgroundColor: '#F9F9F9' }}>
        <Grid container spacing={2}>
          <Grid item xs={10}>
          {orderHistory.map((item, index) => (
              <div key={index}>
                <Typography variant="h7" >
                  {item.food}
                  <Typography marginLeft="20px" variant="h7" style={{ fontStyle: 'italic' }}>{item.note}test</Typography>
                  <br></br>
                  Qty: {item.quantity}  
                </Typography>
                <br></br><br></br>
              </div>
            ))}
          </Grid>
        </Grid>
      </Paper>

      <br></br><br></br><br></br><br></br>
      {foodList.length == 0 ? (
        <Button
          variant="contained"
          color="primary"
          style={{
            display: 'block',
            backgroundColor: 'grey',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Roboto Mono',
            fontWeight: 'bold'
          }}
        >
          No items Added For Order To Be Placed
        </Button>
      ) : (
        <Button
          component={Link}
          to={`/placedorder/${id}`}
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
          onClick={handlePlaceOrder}
        >
          Place Order
        </Button>
      )}
    </Container>
  );
};

export default YourOrder;


