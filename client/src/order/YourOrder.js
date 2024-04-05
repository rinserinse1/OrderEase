import React, { useContext, useState, useEffect }  from 'react';
import {
  Container,
  Typography,
  Button,
  Grid,
  Paper,
  Table,
  TableContainer,
  TableCell,
  TableRow,
  TableBody,
  TableHead,
  Stack
} from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
import { styled } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';

const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);

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



  const reduceQuantity = (index) => {

    const temp = localStorage.getItem('foodList');  

    const parsedTemp = JSON.parse(temp);  //get info in copy
    //console.log(parsedTemp);



    if(parsedTemp[index].quantity <= 1){  //if quantity is 1 or less, return
      return;
    }
    parsedTemp[index].quantity -= 1; //else --1 in copy

    localStorage.setItem('foodList', JSON.stringify(parsedTemp));  //set the copy as the main

    const storedFoodList = localStorage.getItem('foodList'); 
    if (storedFoodList) {
      setFoodList(JSON.parse(storedFoodList));  //update foodlist
    }

  };


  const increaseQuantity = (index) => {

    const temp = localStorage.getItem('foodList'); //get info in copy

    const parsedTemp = JSON.parse(temp);
    //console.log(parsedTemp);

    parsedTemp[index].quantity += 1; //add quantity

    localStorage.setItem('foodList', JSON.stringify(parsedTemp)); //set the copy as the main


    const storedFoodList = localStorage.getItem('foodList'); 
    if (storedFoodList) {
      setFoodList(JSON.parse(storedFoodList)); //update foodlist
    }

  };




  return (
    <Container maxWidth="md">
      <br /><br />
      <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Mono' }}><strong>Your Order</strong></Typography>
      <br />
      <TableContainer component={Paper} sx={{border: 1}}>
      <Table aria-label="food items table">
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell sx={{fontWeight: 700, fontSize: '110%'}}>Food Item</TableCell>
            <TableCell sx={{fontWeight: 700, fontSize: '110%'}}>Quantity</TableCell>
            <TableCell sx={{fontWeight: 700, fontSize: '110%'}}>Size (per portion)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodList.map((item, index) => (
            <TableRow key={index}>
              <TableCell sx={{maxWidth: '10px', padding: '2px', justifyContent: 'center', alignItems: 'center'}}>
                <StyledButton onClick={() => handleRemoveItem(index)} sx={{color: 'black', backgroundColor: 'white', border: 0}}><DeleteIcon/></StyledButton>
              </TableCell>
              <TableCell>
                {item.food}
                <Typography marginLeft="20px" variant="h7" style={{ fontStyle: 'italic' }}>{item.note}</Typography>
                  <br></br>
              </TableCell>
              <TableCell>
                <Stack spacing={1} direction={'row'} sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                  <StyledButton onClick={() => reduceQuantity(index)}>-</StyledButton> 
                  <div>
                    {item.quantity} 
                  </div>
                  <StyledButton  onClick={() => increaseQuantity(index)}>+</StyledButton>
                </Stack>
              </TableCell>
              <TableCell>{item.portion}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br /><br />



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
            fontWeight: 'bold',
            width: '100%'
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

        <br></br>
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


    <br/><br/>

    <Typography variant="h4" gutterBottom sx={{ display: 'flex', alignItems: 'center', fontFamily: 'Roboto Mono' }}><strong>Order History</strong></Typography>
    <br/>
    <TableContainer component={Paper} sx={{border: 1}}>
      <Table aria-label="food items table">
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: 700, fontSize: '110%'}}>Food Item</TableCell>
            <TableCell sx={{fontWeight: 700, fontSize: '110%'}}>Quantity</TableCell>
            <TableCell sx={{fontWeight: 700, fontSize: '110%'}}>Size</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orderHistory.map((item, index) => (
            <TableRow key={index}>
              <TableCell>
                {item.food}
                <Typography marginLeft="20px" variant="h7" style={{ fontStyle: 'italic' }}><br/>{item.note}</Typography>
                  <br></br>
              </TableCell>
              <TableCell>
                {item.quantity}
              </TableCell>
              <TableCell>{item.portion}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>

    <br></br><br></br>

    </Container>
  );
};

export default YourOrder;


