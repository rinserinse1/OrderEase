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

      <br/><br/>
      <Container maxWidth="md" sx={{ textAlign: 'center', marginTop: '50px' }}>
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
                  height: 320, 
                  boxShadow: 3,
                  borderRadius: 2,
                }}>
                  <CardMedia
                    component="img"
                    sx={{ height: 180, objectFit: 'cover' }}
                    image={category.name === "Drinks" ? category.thumbnail : category.foods[0].photo}
                    alt={category.name}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="div" sx={{
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}>
                      {category.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
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
