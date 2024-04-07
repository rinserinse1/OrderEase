import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Grid, Paper, Table, TableContainer, TableCell, TableRow, TableBody, TableHead, Stack, Modal, Box, IconButton,} from "@mui/material";
import { Link, useParams } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { styled } from "@mui/system";
import DeleteIcon from "@mui/icons-material/Delete";
import CloseIcon from "@mui/icons-material/Close";

const blue = {
  100: "#daecff",
  200: "#b6daff",
  300: "#66b2ff",
  400: "#3399ff",
  500: "#007fff",
  600: "#0072e5",
  700: "#0059B2",
  800: "#004c99",
};

const grey = {
  50: "#F3F6F9",
  100: "#E5EAF2",
  200: "#DAE2ED",
  300: "#C7D0DD",
  400: "#B0B8C4",
  500: "#9DA8B7",
  600: "#6B7A90",
  700: "#434D5B",
  800: "#303740",
  900: "#1C2025",
};

const StyledButton = styled("button")(
  ({ theme }) => `
  font-family: 'IBM Plex Sans', sans-serif;
  font-size: 0.875rem;
  box-sizing: border-box;
  line-height: 1.5;
  border: 1px solid;
  border-radius: 999px;
  border-color: ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
  background: ${theme.palette.mode === "dark" ? grey[900] : grey[50]};
  color: ${theme.palette.mode === "dark" ? grey[200] : grey[900]};
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
    background: ${theme.palette.mode === "dark" ? blue[700] : blue[500]};
    border-color: ${theme.palette.mode === "dark" ? blue[500] : blue[400]};
    color: ${grey[50]};
  }

  &:focus-visible {
    outline: 0;
  }

  &.increment {
    order: 1;
  }
`
);

const YourOrder = () => {
  const { id } = useParams();
  const isSmallScreen = useMediaQuery("(max-width:400px)");
  const [foodList, setFoodList] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  useEffect(() => {
    const getDataFromLocalStorage = () => {
      const storedFoodList = localStorage.getItem("foodList");
      if (storedFoodList) {
        setFoodList(JSON.parse(storedFoodList));
      }

      const storedOrderHistory = localStorage.getItem("orderHistory");
      if (storedOrderHistory) {
        setOrderHistory(JSON.parse(storedOrderHistory));
      }
    };

    getDataFromLocalStorage();
  }, []);

  console.log(foodList);

  const handleModalOpen = (index) => {
    setSelectedItemIndex(index);
    setIsModalOpen(true);
  };

  const handleModalClose = (confirm) => {
    if (confirm && selectedItemIndex !== null) {
      handleRemoveItem(selectedItemIndex);
    }
    setIsModalOpen(false);
    setSelectedItemIndex(null);
  };

  const handleRemoveItem = (indexToRemove) => {
    const updatedFoodList = foodList.filter(
      (item, index) => index !== indexToRemove
    );
    setFoodList(updatedFoodList);
    localStorage.setItem("foodList", JSON.stringify(updatedFoodList));
  };

  const handlePlaceOrder = () => {
    localStorage.removeItem("foodList");
    let orderHistory = [];
    const storedOrderHistory = localStorage.getItem("orderHistory");
    if (storedOrderHistory) {
      orderHistory = JSON.parse(storedOrderHistory);
    }

    orderHistory.push(foodList);
    orderHistory = orderHistory.flat();
    localStorage.setItem("orderHistory", JSON.stringify(orderHistory));
    alert("Placed Order");
    window.location.href = `/placedorder/${id}`;
  };

  const reduceQuantity = (index) => {
    const temp = localStorage.getItem("foodList");
    const parsedTemp = JSON.parse(temp);

    if (parsedTemp[index].quantity <= 1) {
      return;
    }

    parsedTemp[index].quantity -= 1;
    localStorage.setItem("foodList", JSON.stringify(parsedTemp));

    const storedFoodList = localStorage.getItem("foodList");
    if (storedFoodList) {
      setFoodList(JSON.parse(storedFoodList));
    }
  };

  const increaseQuantity = (index) => {
    const temp = localStorage.getItem("foodList");
    const parsedTemp = JSON.parse(temp);

    parsedTemp[index].quantity += 1;
    localStorage.setItem("foodList", JSON.stringify(parsedTemp));

    const storedFoodList = localStorage.getItem("foodList");
    if (storedFoodList) {
      setFoodList(JSON.parse(storedFoodList));
    }
  };

  return (
    <Container maxWidth="md">
      <Typography
        variant="h4"
        component="div"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "bold",
          mt: 2,
          mb: 2
        }}
      >
        Your Order
      </Typography>
  
      <TableContainer component={Paper} sx={{ border: 1, mb: 2}}>
  <Table aria-label="food items table">
    <TableHead>
      <TableRow>
        <TableCell></TableCell> 
        <TableCell sx={{  fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
          Food Item
        </TableCell>
        <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
          Quantity
        </TableCell>
        <TableCell sx={{  fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
          Size (per portion)
        </TableCell>
      </TableRow>
    </TableHead>
          <TableBody>
            {foodList.map((item, index) => (
              <TableRow key={index}>
                <TableCell sx={{ textAlign: "center", p: 1 }}>
                  <IconButton onClick={() => handleModalOpen(index)} sx={{ color: "black" }}>
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
                <TableCell sx={{ 
                textAlign: 'center', 
                fontSize: "0.9rem", 
                padding: '6px 10px',
                maxWidth: '200px',
                whiteSpace: 'normal',
                wordBreak: 'normal', 
              }}>
                  {item.food}
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      fontStyle: "italic",
                      wordBreak: 'normal', 
                      fontSize: "0.8rem", 
                    }}
                  >
                    {item.note}
                  </Typography>
                </TableCell>
                <TableCell sx={{  textAlign: "center", fontSize: "0.9rem" }}>
            <Stack
              spacing={1}
              direction="row"
              justifyContent="center"
              alignItems="center"
            >
              <StyledButton onClick={() => reduceQuantity(index)}>-</StyledButton>
              <Typography variant="body1" sx={{ minWidth: '20px', textAlign: 'center',  }}>
                {item.quantity}
              </Typography>
              <StyledButton onClick={() => increaseQuantity(index)}>+</StyledButton>
            </Stack>
                </TableCell>
                <TableCell sx={{  textAlign: "center", p: 1 }}>
                  {item.portion}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {foodList.length === 0 ? (
        <Button
          variant="contained"
          color="primary"
          style={{
            display: "block",
            backgroundColor: "grey",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            width: "100%",
          }}
        >
          No items Added For Order To Be Placed
        </Button>
) : (
  <Button
    component={Link}
    to={`/placedorder/${id}`}
    variant="contained"
    sx={{
      display: "block",
      backgroundColor: "green",
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    }}
    onClick={handlePlaceOrder}
  >
    Place Order
  </Button>
)}
<br />
{orderHistory.length === 0 ? null : (
  <Button
    component={Link}
    to={`/paying/${id}`}
    variant="contained"
    sx={{
      display: "block",
      backgroundColor: "green",
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
    }}
  >
    Pay for Items
  </Button>
      )}

<br />
<br />
<Typography
      variant="h4"
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold",
        mt: 2,
        mb: 2
      }}
    >
      Order History
    </Typography>
    
    <TableContainer component={Paper} sx={{ border: 1, mb: 2 }}>
  <Table aria-label="order history table">
    <TableHead>
      <TableRow>
        <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
          Food Item
        </TableCell>
        <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
          Quantity
        </TableCell>
        <TableCell sx={{ fontWeight: 'bold', fontSize: '1.1rem', textAlign: 'center' }}>
          Size (per portion)
        </TableCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {orderHistory.map((item, index) => (
        <TableRow key={index}>
        <TableCell sx={{
          textAlign: 'center',
          fontSize: "0.9rem",
          whiteSpace: 'normal',
          wordBreak: 'break-word',
          maxWidth: '200px',  
          overflow: 'hidden',
          textOverflow: 'ellipsis'
        }}>
          {item.food}
          <Typography sx={{
            fontStyle: "italic",
            fontSize: "0.8rem",
            display: 'block', 
            wordBreak: 'break-word'
          }}>
            {item.note}
          </Typography>
        </TableCell>
        <TableCell sx={{
          textAlign: "center",
          fontSize: "0.9rem"
        }}>
          {item.quantity}
        </TableCell>
        <TableCell sx={{
          textAlign: "center",
          fontSize: "0.9rem"
        }}>
          {item.portion}
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
<Modal
  open={isModalOpen}
  onClose={() => handleModalClose(false)}
  aria-labelledby="delete-confirmation-title"
  aria-describedby="delete-confirmation-description"
>
  <Box
    sx={{
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      bgcolor: "white",
      boxShadow: 24,
      p: 4,
      width: isSmallScreen ? "auto" : "calc(100% - 40px)",
      maxWidth: 300,
    }}
  >
    <IconButton
      sx={{ position: "absolute", top: 8, right: 8 }}
      onClick={() => handleModalClose(false)}
    >
      <CloseIcon />
    </IconButton>
    <Typography
      id="delete-confirmation-title"
      variant="h6"
      component="h2"
      sx={{ fontWeight: 'bold',  }} 
    >
      {`Do you want to remove the item "${
        selectedItemIndex !== null && foodList[selectedItemIndex]
          ? foodList[selectedItemIndex].food
          : ""
      }"?`}
    </Typography>
    <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
      <Button
        variant="contained"
        color="error"
        onClick={() => handleModalClose(false)}
        sx={{ mr: 1, fontWeight: 'bold', }} 
      >
        No, Cancel
      </Button>
      <Button
        variant="contained"
        color="success"
        onClick={() => handleModalClose(true)}
        sx={{ mr: 1, fontWeight: 'bold',  }}
      >
        Yes, Confirm
      </Button>
    </Box>
  </Box>
</Modal>
    </Container>
  );
};

export default YourOrder;
