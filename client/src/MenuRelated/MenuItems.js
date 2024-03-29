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
import { TextField, Grid } from "@mui/material"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';


//import mozarellasticks from "../images/mozarellasticks.jpg"

const MenuItems = () => {

  const { id, category } = useParams();
  const [error, setError] = useState("");

    const [foods, setFoods] = useState([]);
    useEffect(() => {
      if (id === "regular") {
        setFoods(RegularFoods.categories.find(cat => cat.name === category).foods);
      } else if (id === "deluxe") {
        setFoods(DeluxeFoods.categories.find(cat => cat.name === category).foods);
      } else {
        setError("Invalid id parameter.");
      }
    }, []);
    console.log(foods)  //THIS IS UR DATA ****


    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value.toLowerCase());
    };
  
    // Filter menu items based on search query
    const filteredFoods = foods.filter(food =>
      food.name.toLowerCase().includes(searchQuery)
    );


  return (
    <>
          <br></br><br></br>
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
      <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
        {category}
      </Typography>
      <br></br><br></br>
      <TextField 
          id="outlined-basic" 
          label=""
          variant="outlined" 
          placeholder="Search by Menu Item Name" 
          fullWidth
          value={searchQuery}
          onChange={handleSearchInputChange}
          InputProps={{
            startAdornment: (
              <SearchOutlinedIcon />
            ),
            sx: { backgroundColor: 'white' }
          }}
        />     
      <br/><br/><br/><br/>
      <TableContainer component={Paper} style={{
        fontFamily: 'Roboto Mono',
        backgroundColor: '#F9F9F9',
        border: 'none',
        boxShadow: 'none', 
        marginRight: '100px',
      }}>
        <Table aria-label="order data table" style={{ fontFamily: 'Roboto Mono' }}>
          <TableHead>
            <TableRow>    
              {/*<TableCell style={{ fontFamily: 'Roboto Mono' }}>Category</TableCell>
              <TableCell style={{ fontFamily: 'Roboto Mono' }}>Price</TableCell>
              <TableCell style={{ fontFamily: 'Roboto Mono' }}>Description</TableCell>
    <TableCell style={{ fontFamily: 'Roboto Mono' }}>Photo</TableCell>*/}
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFoods.map((item, index) => (
              <TableRow key={index} sx={{border: 1}}>
                <TableCell component="th" scope="row" style={{ paddingRight: '-10px' }} >
                  <Button component={Link} to={`/itemDisplay/${id}/${category}/${item.name}`} style={{ color: 'black', textDecoration: 'none', fontSize: '10px', fontWeight: 'bold' }}>
                  <img src={item.photo} alt={item.name} style={{ maxWidth: '100%', height: '20%' }} />
                    
                  </Button>
                </TableCell>
                <TableCell>
                {item.name}
                <br></br><br></br>
                  {item.price}
                  <br></br><br></br>
                  <Button 
                    component={Link} 
                    to={`/itemDisplay/${id}/${category}/${item.name}`}
                    variant="contained" 
                    color="primary"
                    style={{
                      display: 'block',
                      backgroundColor: 'green',
                      color: 'white',
                      textTransform: 'none', // Prevent text from being all caps
                    }}
                  >
                         <Typography style = {{fontSize:"8px"}} >VIEW ITEM</Typography>
                  </Button>

                </TableCell>


              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      
      <Button 
        component={Link} 
        to={`/menucategories/${id}`}
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
    
export default MenuItems;
    