import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TextField, Typography, Container, Grid, Card, CardMedia, CardContent, BottomNavigation, BottomNavigationAction, Box, Modal, Button, IconButton } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import RegularFoods from "../FoodInfo/RegularFoods.json";
import DeluxeFoods from "../FoodInfo/DeluxeFoods.json";
import GlobalStyles from '@mui/material/GlobalStyles';



const MenuCategories = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);


  useEffect(() => {
    if (id === "regular") {
      setCategories(RegularFoods.categories);
    } else if (id === "deluxe") {
      setCategories(DeluxeFoods.categories);
    } else {
      setError("Invalid id parameter.");
    }
  }, [id]);
  console.log(categories)




    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value);
      // Here you can perform any additional actions you need, like filtering data based on the search query.


    }

  // Filter categories based on search query
  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery)
  );




  return (
    <>

      <br/><br/>
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
        <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
          Menu Categories
        </Typography>
        <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
          Order Categories For {id}
        </Typography>
        <br/><br/>

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="Search by Menu Category"
          value={searchQuery}
          onChange={handleSearchInputChange}
          InputProps={{
            startAdornment: <SearchOutlinedIcon />,
            sx: { backgroundColor: 'white' }
          }}
        />
        <br/><br/>
        <br/><br/>

        <Grid container spacing={3}>
        {filteredCategories.map((category, index) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={index}>
              <Link to={`/menuItems/${id}/${category.name}`} style={{ textDecoration: 'none' }}>
                <Card>
                  <CardMedia
                    component="img"
                    height="140"
                    image={category.foods[0].photo}
                    alt={category.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {category.description}
                   
                      ({category.foods.length})
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

    </>
  );
};

export default MenuCategories;
