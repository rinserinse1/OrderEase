import React, { useState } from 'react';
import {Button, Typography, Container, Box} from '@mui/material'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import Deluxe_Menu from "../images/Deluxe_Menu_Final.PNG";
import Regular_Menu from "../images/Regular_Menu_Final.png"

const MenuSelectConfirm = () => {

  const {id} = useParams();  //this is either deluxe or regular
  const [error, setError] = useState("");


    return (
      <>
    <br></br><br></br><br></br>

      <Container maxWidth="sm">
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={2}
          sx={{ border: '2px solid grey', bgcolor: "white" }}
        >
          <Typography variant="h4" align="center" gutterBottom>
            You have Selected the {id} Menu
          </Typography>
        </Box>
      </Container>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        mt={2} // Adjust margin top as needed
      >
        <img
          src={id === "deluxe" ? Deluxe_Menu : Regular_Menu}
          alt="Deluxe Menu"
          style={{
            maxHeight: '100%',
            maxWidth: '100%',
            width: '92vw',
            height: 'auto',
          }}
        />
      </Box>
      <br></br>
      <Container maxWidth="sm">
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={2}
          sx={{ border: '2px solid grey', bgcolor: "white" }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            {id === 'deluxe' ? (
              <>
                Upgrade to the Deluxe Menu for an all-inclusive Korean BBQ adventure. Beyond the Regular Menu's favorites, you'll get exclusive access to 'Deluxe Delights', including:
                <Box component="ul" sx={{ m: 0, p: 0, listStyleType: 'none' }}>
                  <li><b>Marinated Beef Short Ribs:</b><br />Grilled to perfection.</li>
                  <li><b>Savory Pork Dumplings:</b><br />Crispy and flavorful.</li>
                  <li><b>Creamy Corn Cheese:</b><br />A cheesy delight.</li>
                  <li><b>Cold Buckwheat Noodles:</b><br />Refreshing and light.</li>
                  <li><b>Pork Backbone Stew:</b><br />Rich and hearty.</li>
                  <li><b>Sizzling Dolsot Bibimbap:</b><br />A hot stone pot of mixed rice and vegetables.</li>
                </Box>
                It's the ultimate choice for those eager to explore the full spectrum of Korean culinary wonders.
              </>
            ) : (
              "Discover the core of Korean BBQ with our Regular Menu, featuring classic favorites like Bulgogi, Spicy Rice Cakes, and a selection of traditional sides and desserts. It's the perfect choice for those looking to enjoy timeless Korean dishes in a comfortable and familiar setting."
            )}
          </Typography>
        </Box>
      </Container>
      <br/><br/>
      <Container maxWidth="sm">
        <Box
          height="100%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          p={2}
          sx={{ border: '2px solid grey', bgcolor: "white" }}
        >
        
          <Typography variant="h4" align="center" gutterBottom>
           Confirm menu Selection
          </Typography>

          <Box display="flex" justifyContent="space-between" mt={2}>

          <Button variant="contained" color="error" component={Link}  to="/menuselect" sx={{ marginRight: 2 }}>
              Cancel
            </Button>

            <Button variant="contained"  color="success" component={Link} to={`/menucategories/${id}`} sx={{ marginRight: 2 }}>
              Confirm
            </Button>

           
          </Box>
        </Box>
      </Container>

      <br/><br/>

     

      <br/><br/>

      
    </>
  );
};

export default MenuSelectConfirm;
