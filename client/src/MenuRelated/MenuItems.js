import React, { useState, useEffect } from 'react';
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Typography, Container, TextField, Grid, Chip } from '@mui/material'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import RegularFoods from "../FoodInfo/RegularFoods.json"
import DeluxeFoods from "../FoodInfo/DeluxeFoods.json"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import DoneIcon from '@mui/icons-material/Done';


//import mozarellasticks from "../images/mozarellasticks.jpg"

const MenuItems = () => {

  const { id, category } = useParams();
  const [error, setError] = useState("");

    const [foods, setFoods] = useState([]);
    const [categoryInfo, setCategoryInfo] = useState([]);
    useEffect(() => {
      if (id === "regular") {
        setFoods(RegularFoods.categories.find(cat => cat.name === category).foods);
        setCategoryInfo(RegularFoods.categories.find(cat => cat.name === category).filters);
      } else if (id === "deluxe") {
        setFoods(DeluxeFoods.categories.find(cat => cat.name === category).foods);
        setCategoryInfo(DeluxeFoods.categories.find(cat => cat.name === category).filters);
      } else {
        setError("Invalid id parameter.");
      }
    }, []);
    console.log(foods)  //THIS IS UR DATA ****

    const [selectedChips, setSelectedChips] = useState([]);

    const handleChipToggle = (chipValue) => {
      if (selectedChips.includes(chipValue)) {
        setSelectedChips(selectedChips.filter((chip) => chip !== chipValue));
      } else {
        setSelectedChips([...selectedChips, chipValue]);
      }
    };

    const [searchQuery, setSearchQuery] = useState('');

    const handleSearchInputChange = (event) => {
      setSearchQuery(event.target.value.toLowerCase());
    };
  
    // Filter menu items based on search query and filters
    const filteredFoods = foods.filter(food =>
      food.name.toLowerCase().includes(searchQuery) && 
      selectedChips.every(filter => food.tags.includes(filter))
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
      <br/><br/><br/>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {categoryInfo.map((filter, index) => (
          <Grid key={index} xs={2} sm={4} md={4}>
            <Chip label={filter} onClick={() => {handleChipToggle(filter)}} 
                  onDelete={() => {handleChipToggle(filter)}} deleteIcon={selectedChips.includes(filter) ? <DoneIcon style={{color: "black"}}/> : <></>}
                  sx={selectedChips.includes(filter) ? { backgroundColor: 'orange', color: 'black', fontWeight: 'bold', fontFamily: "Roboto Mono", marginTop: 2 } 
                  : { backgroundColor: 'white', fontFamily: "Roboto Mono", marginTop: 2 }}>
            </Chip>
          </Grid>
        ))}
      </Grid>
      <br/><br/>
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
                <TableCell component="th" scope="row" style={{ paddingRight: '-10px', width: '50%', borderBottom: 1 }} >
                  <img src={item.photo} alt={item.name} style={{ objectFit: 'cover', width: '100%', height: '30vw', borderRadius: '25px' }} />
                </TableCell>
                <TableCell sx={{fontWeight: '550', borderBottom: 1}}>
                {item.name}
                <br></br><br></br>
                  {'(' + item['Portion Size, Per Order'] + ')'}
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
                      fontWeight: 'bold',
                      position: 'relative',
                      boxShadow: 3 
                    }}
                  >
                         <Typography style = {{fontSize:"15px", textAlign:"center"}} >VIEW ITEM</Typography>
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
    