import React from 'react';
import { Box, ButtonBase, Card, CardMedia, Container, Grid, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

import DeluxeMenuImage from "../images/Deluxe_Menu_Final.PNG";
import RegularMenuImage from "../images/Regular_Menu_Final.png";

const menus = [
  { name: 'Deluxe Menu', image: DeluxeMenuImage, link: '/menuselectconfirm/deluxe' },
  { name: 'Regular Menu', image: RegularMenuImage, link: '/menuselectconfirm/regular' }
];

const MenuOption = ({ name, image, link }) => (
  <Grid item xs={12} sm={6}>
    <Box display="flex" justifyContent="center">
      <Card sx={{ maxWidth: '100%', boxShadow: 3, border: 1 }}> 
        <ButtonBase component={Link} to={link} sx={{ width: '100%' }}>
          <Stack direction="column">
            <CardMedia
              component="img"
              sx={{ height: { xs: 200, sm: 250, md: 300 } }} 
              image={image}
              alt={name}
            />
            <Box sx={{ backgroundColor: 'white', textAlign: 'center', p: '10px' }}>
              <Typography variant="h6" fontWeight='bold'>
                {name}
              </Typography>
            </Box>
          </Stack>
        </ButtonBase>
      </Card>
    </Box>
  </Grid>
);

const MenuSelectConfirm = () => {
  return (
    <>
      <Box sx={{ my: 8 }}>
        <Container maxWidth="sm">
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p={2}
            sx={{ border: '2px solid grey', bgcolor: "white", boxShadow: 2 }}
          >
            <Typography variant="h4" align="center" gutterBottom fontWeight='medium'>
              Welcome to <br/> OrderEase! <br/> Pick your menu:
            </Typography>
          </Box>
        </Container>
      </Box>

      <Grid container justifyContent="center" spacing={2}>
        {menus.map(menu => (
          <MenuOption key={menu.name} {...menu} />
        ))}
      </Grid>
    </>
  );
};

export default MenuSelectConfirm;