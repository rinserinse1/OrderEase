import React, { useEffect, useState } from 'react';
import { Typography, Container, Box, CircularProgress, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { useParams, Link } from 'react-router-dom';

const Paying = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [showCheckMark, setShowCheckMark] = useState(false);
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  useEffect(() => {
    const paymentTimeout = setTimeout(() => {
      setLoading(false);
      setShowCheckMark(true);

      const thankYouTimeout = setTimeout(() => {
        setShowCheckMark(false);
        setShowThankYouMessage(true);

        const redirectTimeout = setTimeout(() => {
          window.location.href = "/menuselect";
        }, 10000);

        return () => clearTimeout(redirectTimeout);
      }, 3000);

      return () => clearTimeout(thankYouTimeout);
    }, 10000);

    return () => clearTimeout(paymentTimeout);
  }, [id]);

  return (
    <>
      <br />
      <br />
      <Container
        maxWidth="sm"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {loading && (
          <>
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
                Server is on the way.
                <br />
                Please wait...
              </Typography>
            </Box>
            <CircularProgress
              sx={{ alignSelf: "center", marginTop: "190px" }}
            />
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: "190px" }}
              component={Link}
              to={`/yourorder/${id}`}
            >
              Cancel
            </Button>
          </>
        )}
        {!loading && showCheckMark && (
          <CheckCircleIcon
            sx={{
              fontSize: 100,
              color: "green",
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}
        {!loading && !showCheckMark && showThankYouMessage && (
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: "100%",
              textAlign: "center",
              p: 2,
              bgcolor: "transparent",
            }}
          >
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "black",
                fontFamily: "Roboto Mono",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
              }}
            >
              Hope you enjoyed your meal!
            </Typography>
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: "bold",
                color: "black",
                fontFamily: "Roboto Mono",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" },
                mt: 2,
              }}
            >
              Thank you for using OrderEase!
            </Typography>
          </Box>
        )}
      </Container>
    </>
  );
};

export default Paying;

