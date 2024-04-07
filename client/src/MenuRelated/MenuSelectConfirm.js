import React, { useState } from "react";
import { Button, Typography, Container, Box } from "@mui/material";
import { Link, useParams } from "react-router-dom";
import Deluxe_Menu from "../images/Deluxe_Menu_Final.PNG";
import Regular_Menu from "../images/Regular_Menu_Final.png";

const MenuSelectConfirm = () => {
  const { id } = useParams();
  const [error, setError] = useState("");

  const menuPrices = {
    deluxe: "$39.99",
    regular: "$29.99",
  };

  return (
    <>
      <br />
      <br />
      <br />
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
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{  fontWeight: "bold" }}
          >
            You have selected the {id} menu!
          </Typography>
        </Box>
      </Container>

      <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
        <img
          src={id === "deluxe" ? Deluxe_Menu : Regular_Menu}
          alt={`${id} Menu`}
          style={{
            maxHeight: "100%",
            maxWidth: "100%",
            width: "92vw",
            height: "auto",
            borderRadius: "10px",
          }}
        />
      </Box>
      <br />
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
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h6"
            align="center"
            gutterBottom
          >
            {id === "deluxe" ? (
              <>
                Upgrade to the Deluxe Menu for an all-inclusive Korean BBQ
                adventure. Beyond the Regular Menu's favorites, you'll get
                exclusive access to 'Deluxe Delights', including:
                <Box
                  component="ul"
                  sx={{
                    m: 0,
                    p: 0,
                    listStyleType: "none",
                  }}
                >
                  {[
                    {
                      title: "1. Marinated Beef Short Ribs:",
                      description: "Grilled to perfection.",
                    },
                    {
                      title: "2. Savory Pork Dumplings:",
                      description: "Crispy and flavorful.",
                    },
                    {
                      title: "3. Creamy Corn Cheese:",
                      description: "A cheesy delight.",
                    },
                    {
                      title: "4. Cold Buckwheat Noodles:",
                      description: "Refreshing and light.",
                    },
                    {
                      title: "5. Pork Backbone Stew:",
                      description: "Rich and hearty.",
                    },
                    {
                      title: "6. Sizzling Dolsot Bibimbap:",
                      description:
                        "A hot stone pot of mixed rice and vegetables.",
                    },
                  ].map((item, index) => (
                    <li key={index}>
                      <Typography
                        variant="body1"
                        component="div"
                        sx={{ fontWeight: "bold", }}
                      >
                        {item.title}
                      </Typography>
                      <Typography
                        variant="body1"
                        sx={{
                          ml: 2,

                          fontStyle: "italic",
                        }}
                      >
                        {item.description}
                      </Typography>
                    </li>
                  ))}
                </Box>
                It's the ultimate choice for those eager to explore the full
                spectrum of Korean culinary wonders.
              </>
            ) : (
              "Discover the core of Korean BBQ with our Regular Menu, featuring classic favorites like Bulgogi, Spicy Rice Cakes, and a selection of traditional sides and desserts. It's the perfect choice for those looking to enjoy timeless Korean dishes in a comfortable and familiar setting."
            )}
          </Typography>
        </Box>
      </Container>
      <br />
      <br />
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
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            style={{  fontWeight: "bold" }}
          >
            Confirm menu selection
          </Typography>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            style={{ fontWeight: "bold" }}
          >
            Price: {menuPrices[id]}
          </Typography>

          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={2}
            sx={{ width: "100%" }}
          >
            <Button
              variant="contained"
              color="error"
              component={Link}
              to="/menuselect"
              sx={{ marginLeft: 2, marginRight: 2, width: "100%" }}
            >
              Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              component={Link}
              to={`/menucategories/${id}`}
              sx={{ marginRight: 2, width: "100%" }}
            >
              Confirm
            </Button>
          </Box>
        </Box>
      </Container>
      <br />
      <br />
    </>
  );
};

export default MenuSelectConfirm;
