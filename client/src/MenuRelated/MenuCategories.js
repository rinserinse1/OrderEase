import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { TextField, Typography, Container, Grid, Card, CardMedia, CardContent } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import RegularFoods from "../FoodInfo/RegularFoods.json";
import DeluxeFoods from "../FoodInfo/DeluxeFoods.json";



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

      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '20px' }}>
        <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
          {id.charAt(0).toUpperCase() + id.slice(1)} Menu Categories
        </Typography>
        <br/><br/>

        <TextField
          id="outlined-basic"
          label=""
          variant="outlined"
          placeholder="Search by Menu Category"
          fullWidth
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
        <Card sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: 'auto', 
          boxShadow: 3,
          borderRadius: 2,
        }}>
          <CardMedia
            component="img"
            sx={{ height: 180, objectFit: 'cover' }}
            image={category.name === "Drinks" ? category.thumbnail : category.foods[0].photo}
            alt={category.name}
          />
          <CardContent sx={{
            paddingTop: '4px', 
            paddingBottom: '4px', 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center',
            alignItems: 'center', 
            padding: '8px', 
            '&:last-child': {
              paddingBottom: '4px',
            },
          }}>
            <Typography variant="subtitle1" component="div" sx={{
              fontWeight: 'bold',
              textAlign: 'center',
            }}>
              {category.name}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{
              fontWeight: 'bold',
            }}>
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
