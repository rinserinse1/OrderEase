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

const AssistanceModal = ({ open, onClose }) => {
  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#FDDFB3' }
        }}
      />
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="assistance-modal-title"
        aria-describedby="assistance-modal-description"
      >
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
            width: 'calc(100% - 40px)',
            maxWidth: 300,
          }}
        >
          <IconButton
            sx={{
              position: 'absolute',
              top: 8,
              right: 8,
            }}
            onClick={onClose}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="assistance-modal-title" variant="h6" component="h2">
            Do you want to call a server for assistance?
          </Typography>
          <Typography id="assistance-modal-description" sx={{ mt: 2 }}>
            Describe your issue or ask for help here.
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="error" onClick={onClose}>No, Cancel</Button>
            <Button variant="contained" color="success" onClick={onClose}>Yes, Confirm</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const MenuCategories = () => {
  const { id } = useParams();
  const [error, setError] = useState("");
  const [categories, setCategories] = useState([]);
  const [value, setValue] = useState(0);
  const [assistanceModalOpen, setAssistanceModalOpen] = useState(false);

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
  const handleAssistanceIconClick = () => {
    setAssistanceModalOpen(true);
  };

  const closeAssistanceModal = () => {
    setAssistanceModalOpen(false);
  };

  return (
    <>
      <GlobalStyles
        styles={{
          body: { backgroundColor: '#FDDFB3' }
        }}
      />
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
          InputProps={{
            startAdornment: (
              <SearchOutlinedIcon />
            ),
            sx: { backgroundColor: 'white' }
          }}
        />
        <br/><br/>
        <br/><br/>

        <Grid container spacing={3}>
          {categories.map((category, index) => (
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
                    </Typography>
                  </CardContent>
                </Card>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Container>

      <Box sx={{ width: '100%', position: 'fixed', bottom: 0 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction label="Categories" icon={<GridViewOutlinedIcon />} />
          <BottomNavigationAction label="View Order" icon={<ShoppingCartOutlinedIcon />} />
          <BottomNavigationAction label="Assistance"  icon={<HelpOutlineOutlinedIcon />} onClick={handleAssistanceIconClick} />
        </BottomNavigation>
      </Box>

      <AssistanceModal open={assistanceModalOpen} onClose={closeAssistanceModal} />
    </>
  );
};

export default MenuCategories;
