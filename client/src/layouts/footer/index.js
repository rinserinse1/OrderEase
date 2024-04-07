import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation, useNavigate } from 'react-router-dom';
import { Box, BottomNavigation, BottomNavigationAction, Modal, Button, IconButton, Typography, GlobalStyles } from '@mui/material';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import CloseIcon from '@mui/icons-material/Close';
import PendingIcon from '@mui/icons-material/Pending';

const AssistanceModal = ({ open, onClose }) => {
  return (
    <>
      <GlobalStyles styles={{ body: { backgroundColor: "#FDDFB3" } }} />
      <Modal
        open={open}
        onClose={() => onClose(false)}
        aria-labelledby="assistance-modal-title"
        aria-describedby="assistance-modal-description"
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
            width: "calc(100% - 40px)",
            maxWidth: 300,
          }}
        >
          <IconButton
            sx={{ position: "absolute", top: 8, right: 8 }}
            onClick={() => onClose(false)}
          >
            <CloseIcon />
          </IconButton>
          <Typography id="assistance-modal-title" variant="h6" component="h2" fontWeight={'bold'} >
            Do you want to call a server for assistance?
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
            <Button
              variant="contained"
              color="error"
              onClick={() => onClose(false)}
              sx={{ fontWeight: 'Bold'}}
            >
              No, Cancel
            </Button>
            <Button
              variant="contained"
              color="success"
              onClick={() => onClose(true)}
              sx={{ fontWeight: 'Bold'}}
            >
              Yes, Confirm
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default function Footer() {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const [assistanceModalOpen, setAssistanceModalOpen] = useState(false);

  const isAssistanceActive = () => {
    const assistanceTimestamp = parseInt(
      localStorage.getItem("assistanceTimestamp") || "0",
      10
    );
    return Date.now() - assistanceTimestamp < 10000;
  };
  const [assistFlag, setAssistFlag] = useState(isAssistanceActive());

  const [value, setValue] = useState(null);
  useEffect(() => {
    const basePath = location.pathname.split("/")[1];

    if (basePath === "menucategories") {
      setValue(0);
    } else if (basePath === "yourorder") {
      setValue(1);
    } else {
      setValue(null);
    }
  }, [location.pathname, assistFlag]);

  useEffect(() => {
    const interval = setInterval(() => {
      setAssistFlag(isAssistanceActive());
    }, 200);

    return () => clearInterval(interval);
  }, []);

  const handleAssistanceIconClick = () => {
    if (isAssistanceActive()) {
      navigate(`/assistance/${id}`);
    } else {
      setAssistanceModalOpen(true);
    }
  };

  const handleModalClose = (confirmed) => {
    setAssistanceModalOpen(false);
    if (confirmed) {
      localStorage.setItem("assistanceTimestamp", Date.now().toString());
      setAssistFlag(true);
      navigate(`/assistance/${id}`);
    }
  };

  const getNumberOfItems = () => {
    const items = JSON.parse(localStorage.getItem("foodList") || "[]");
    return items.length ? `View Order (${items.length})` : "View Order";
  };

  return (
    <>
      <Box sx={{ width: "100%", position: "fixed", bottom: 0, zIndex: 9999 }}>
        <BottomNavigation value={value} showLabels>
          <BottomNavigationAction
            label="Categories"
            component={Link}
            to={`/menucategories/${id}`}
            icon={<GridViewOutlinedIcon />}
          />
          <BottomNavigationAction
            label={getNumberOfItems()}
            component={Link}
            to={`/yourorder/${id}`}
            icon={<ShoppingCartOutlinedIcon />}
          />
          <BottomNavigationAction
            label="Assistance"
            icon={
              assistFlag ? (
                <PendingIcon color="error" />
              ) : (
                <HelpOutlineOutlinedIcon />
              )
            }
            onClick={handleAssistanceIconClick}
          />
        </BottomNavigation>
      </Box>
      <AssistanceModal open={assistanceModalOpen} onClose={handleModalClose} />
    </>
  );
}
