import React, { useEffect } from 'react';
import { Button, Typography, Container, Box, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom'; 

const Assistance = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("assistanceTimestamp", Date.now().toString());

    const expiryCheck = setInterval(() => {
      const assistanceTimestamp = parseInt(
        localStorage.getItem("assistanceTimestamp") || "0",
        10
      );
      if (Date.now() - assistanceTimestamp >= 10000) {
        localStorage.setItem("assistance", JSON.stringify(false));
        clearInterval(expiryCheck);
        navigate(-1);
      }
    }, 200);

    return () => clearInterval(expiryCheck);
  }, [navigate, id]);

  const handleCancel = () => {
    localStorage.setItem("assistance", JSON.stringify(false));
    localStorage.removeItem("assistanceTimestamp");

    navigate(-1);
  };

  const handleContinueBrowsing = () => {
    navigate(-1);
  };

  return (
    <>
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          p={2}
          sx={{
            border: "2px solid grey",
            bgcolor: "white",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          <Typography variant="h4" gutterBottom>
            Assistance on the way.
            <br />
            Please wait...
          </Typography>
        </Box>

        <Box
          sx={{
            position: "relative",
            marginTop: "190px",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "flex-start",
          }}
        >
          <CircularProgress
            sx={{ alignSelf: "center", marginBottom: "20px" }}
          />
          <Button
            variant="contained"
            color="primary"
            sx={{ marginBottom: "20px", marginTop: "15vh" }}
            onClick={handleContinueBrowsing}
          >
            Continue Browsing
          </Button>
          <Button
            variant="contained"
            color="error"
            sx={{ marginTop: "20px" }}
            onClick={handleCancel}
          >
            Cancel
          </Button>
        </Box>
      </Container>
    </>
  );
};

export default Assistance;
