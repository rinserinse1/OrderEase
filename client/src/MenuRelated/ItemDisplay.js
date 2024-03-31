import React, { useState, useEffect } from 'react';
import { Button, Typography, Box, Grid, Modal, IconButton, TextField } from '@mui/material'
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom'
import RegularFoods from "../FoodInfo/RegularFoods.json"
import DeluxeFoods from "../FoodInfo/DeluxeFoods.json"
import { Unstable_NumberInput as BaseNumberInput } from '@mui/base/Unstable_NumberInput';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/system';
import GlobalStyles from '@mui/material/GlobalStyles';
import CloseIcon from '@mui/icons-material/Close';


const CustomizeModal = ({ open, onClose }) => {
  const {id} = useParams();  
  return (
    <>
    
      <Modal
        open={open}
        onClose={onClose}
        aria-labelledby="customize-modal-title"
        aria-describedby="customize-modal-description"
        
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
            borderRadius: '10px'
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
          <Typography id="customize-modal-title" variant="h6" component="h2" fontWeight={'bold'}>
            Enter in additional specifications
          </Typography>

          <br/>
          <TextField variant="outlined" label="Enter comments here..." multiline={true} onChange={(event) => {}} sx={{width: '100%'}}/>
          <br/><br/>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="error" onClick={onClose} sx={{width: '30vw', border: 1, boxShadow: 3}}>Cancel</Button>
            <Button       
            component={Link} 
            variant="contained" color="success" onClick={onClose} sx={{width: '30vw', border: 1, boxShadow: 3}}>Save</Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

const NumberInput = React.forwardRef(function CustomNumberInput(props, ref) {
  return (
    <BaseNumberInput
      slots={{
        root: StyledInputRoot,
        input: StyledInput,
        incrementButton: StyledButton,
        decrementButton: StyledButton,
      }}
      slotProps={{
        incrementButton: {
          children: <AddIcon fontSize="small" />,
          className: 'increment',
        },
        decrementButton: {
          children: <RemoveIcon fontSize="small" />,
        },
      }}
      {...props}
      ref={ref}
    />
  );
});

const blue = {
  100: '#daecff',
  200: '#b6daff',
  300: '#66b2ff',
  400: '#3399ff',
  500: '#007fff',
  600: '#0072e5',
  700: '#0059B2',
  800: '#004c99',
};

const grey = {
  50: '#F3F6F9',
  100: '#E5EAF2',
  200: '#DAE2ED',
  300: '#C7D0DD',
  400: '#B0B8C4',
  500: '#9DA8B7',
  600: '#6B7A90',
  700: '#434D5B',
  800: '#303740',
  900: '#1C2025',
};

const StyledInputRoot = styled('div')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-weight: 400;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[500]};
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
`,
);

const StyledInput = styled('input')(
  ({ theme }) => `
  font-size: 0.875rem;
  font-family: inherit;
  font-weight: 400;
  line-height: 1.375;
  color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
  border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
  box-shadow: 0px 2px 4px ${
    theme.palette.mode === 'dark' ? 'rgba(0,0,0, 0.5)' : 'rgba(0,0,0, 0.05)'
  };
  border-radius: 8px;
  margin: 0 8px;
  padding: 10px 12px;
  outline: 0;
  min-width: 0;
  width: 4rem;
  text-align: center;

  &:hover {
    border-color: ${blue[400]};
  }

  &:focus {
    border-color: ${blue[400]};
    box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? blue[700] : blue[200]};
  }

  &:focus-visible {
    outline: 0;
  }
`,
);

const StyledButton = styled('button')(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === 'dark' ? grey[800] : grey[200]};
  background: ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
  color: ${theme.palette.mode === 'dark' ? grey[200] : grey[900]};
  width: 32px;
  height: 32px;
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 120ms;

  &:hover {
    cursor: pointer;
    background: ${theme.palette.mode === 'dark' ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === 'dark' ? blue[500] : blue[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`,
);

const ItemDisplay = () => {

  const { id, category, food } = useParams();


  const [error, setError] = useState("");
  const [itemInfo, setItemInfo] = useState([]);

  const [quantity, setQuantity] = useState();

  const [customizeModalOpen, setCustomizeModalOpen] = useState(false);

  const handleCustomizeIconClick = () => {
    setCustomizeModalOpen(true);
  };

  const closeCustomizeModal = () => {
    setCustomizeModalOpen(false);
  };

    useEffect(() => {
        if (id === "regular") {
          setItemInfo(RegularFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food));
        } else if (id === "deluxe") {
            setItemInfo(DeluxeFoods.categories.find(cat => cat.name === category).foods.find(cat => cat.name === food));
        } else {
          setError("Invalid id parameter.");
        }
      }, []);


      console.log(itemInfo)   //THIS IS UR DATA ****






      const addToOrder = () => {

        let foodList = [];

        const storedFood = localStorage.getItem('foodList');

        if (storedFood) {
          foodList = JSON.parse(storedFood);
        }

        const newFood = food;
        foodList.push(newFood);

        localStorage.setItem('foodList', JSON.stringify(foodList));

      alert('Added to Order');
      };






  return (
    <>
      <img src={itemInfo.photo} alt={itemInfo.name} style={{ objectFit: 'cover', width: '100vw', height: '30vh' }} />
      <Box paddingTop={'8vh'} paddingLeft={'5vw'} paddingRight={'5vw'} paddingBottom={'10vh'} marginTop={'-4vh'} marginBottom={'-10vh'} sx={{backgroundColor: "#F9F9F9", borderTopLeftRadius: '25px', borderTopRightRadius: '25px', display: 'relative', zIndex: 10}}>
        <Typography variant="h6" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"30px" }}>
          Item: {itemInfo.name}
        </Typography>
        <br/>
        <Typography variant="h7" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"18px" }}>
          Portion Size per Order: {itemInfo['Portion Size, Per Order']}
          <br></br><br></br>
        </Typography>
        <Typography variant="h8" style={{ color: 'black', fontFamily: 'Roboto Mono', fontSize:"15px" }}>
          <b>Description:</b> <br></br>{itemInfo.description}
          <br></br><br></br><br></br>
        </Typography>



        <Button 
        component={Link} 
        to={`/NutritionDisplay/${id}/${category}/${food}`}
        variant="contained" 
        color="primary"
        style={{
          display: 'block',
          backgroundColor: 'primary',
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Roboto Mono',
          fontWeight: 'bold'
        }}
        >
          Nutritional Information
        </Button>
        <br></br>

        <Button 
        component={Link} 
        variant="contained" 
        color="primary"
        onClick={handleCustomizeIconClick}
        style={{
          display: 'block',
          backgroundColor: 'primary',
          color: 'white',
          textAlign: 'center',
          fontFamily: 'Roboto Mono',
          fontWeight: 'bold'
        }}
        >
          Customize your order
        </Button>
        <br></br>

        <Button 
          component={Link} 
          to={`/menuitems/${id}/${category}`}
          variant="contained" 
          color="primary"
          style={{
            display: 'block',
            backgroundColor: 'primary',
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Roboto Mono',
            fontWeight: 'bold'
          }}
        >
          Go Back
        </Button>
        
        <br></br><br></br>

        <Grid container spacing={2}>
          <Grid item xs={6} md={8}>
            {<NumberInput min={1} max={99} defaultValue={1} onChange={(event, val) => {setQuantity(val)}} />}
          </Grid>
          <Grid item xs={6} md={8}>
            <Button 
            component={Link} 
            variant="contained" 
            color="primary"
            style={{
              display: 'block',
              backgroundColor: 'green',
              color: 'white',
              textAlign: 'center',
              fontFamily: 'Roboto Mono',
              fontWeight: 'bold'
            }}
            onClick={addToOrder}
            >
              
              Add to Order
            </Button>
          </Grid>

        </Grid>
      </Box>

      <CustomizeModal open={customizeModalOpen} onClose={closeCustomizeModal} />
    </>
    );
  };
    
export default ItemDisplay;
    