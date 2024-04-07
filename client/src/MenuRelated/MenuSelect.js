import React from "react";
import {Box, ButtonBase, Card, CardMedia, Container, Grid, Typography,Stack,} from "@mui/material";
import { Link } from "react-router-dom";

import DeluxeMenuImage from "../images/Deluxe_Menu_Final.PNG";
import RegularMenuImage from "../images/Regular_Menu_Final.png";

const menus = [
  {
    name: "Deluxe Menu",
    image: DeluxeMenuImage,
    link: "/menuselectconfirm/deluxe",
    price: "$39.99",
  },
  {
    name: "Regular Menu",
    image: RegularMenuImage,
    link: "/menuselectconfirm/regular",
    price: "$29.99",
  },
];

const MenuOption = ({ name, image, link, price }) => (
  <Grid item xs={12} sm={6}>
    <Box display="flex" justifyContent="center">
      <Card
        sx={{
          maxWidth: "100%",
          boxShadow: 3,
          border: 1,
        }}
      >
        <ButtonBase component={Link} to={link} sx={{ width: "100%" }}>
          <Stack direction="column">
            <CardMedia
              component="img"
              sx={{
                height: { xs: 200, sm: 250, md: 300 },
                objectFit: "cover",
                width: "60vw",
              }}
              image={image}
              alt={name}
            />
            <Box
              sx={{ backgroundColor: "white", textAlign: "center", p: "10px" }}
            >
              <Typography
                variant="h6"
                fontWeight="bold"
              >
                {name}
              </Typography>
              <Typography
                variant="subtitle1"
                fontWeight="bold"
              >
                {price}
              </Typography>
            </Box>
          </Stack>
        </ButtonBase>
      </Card>
    </Box>
  </Grid>
);

const MenuSelectConfirm = () => {
  localStorage.clear();
  return (
    <>
      <Box sx={{ my: 4, }}>
        <Container maxWidth="sm">
          <Box
            height="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            flexDirection="column"
            p={2}
            sx={{
              border: "2px solid grey",
              bgcolor: "white",
              boxShadow: 2,
              mb: -2,
              borderRadius: "10px",
            }}
          >
            <Typography
              variant="h5"
              align="center"
              gutterBottom
              fontWeight="Bold"
            >
              Thank you for choosing OrderEase to enhance your dining
              experience!
            </Typography>
            <Typography
              variant="h6"
              align="center"
              mt={1}
              gutterBottom
              fontWeight="Light"
            >
              Welcome to All You Can Eat KBBQ, please pick one of our two all
              you can eat menus below.
            </Typography>
          </Box>
        </Container>
      </Box>

      <Grid container justifyContent="center" spacing={3}>
        {menus.map((menu) => (
          <MenuOption key={menu.name} {...menu} />
        ))}
      </Grid>
      <br />
      <br />
    </>
  );
};

export default MenuSelectConfirm;
