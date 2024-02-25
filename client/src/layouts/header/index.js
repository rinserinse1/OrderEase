import { styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar } from '@mui/material';

import useMediaQuery from '@mui/material/useMediaQuery';
import React, {  useContext }  from 'react';
import Divider from "@mui/material/Divider";
import { alpha } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import { Typography } from '@mui/material/';




export function bgBlur(props) {
  const color =  '#F79300';
  const blur =  6;
  const opacity = 0.8;
  const imgUrl = imgUrl;

  if (imgUrl) {
    return {
      position: 'relative',
      backgroundImage: `url(${imgUrl})`,
      '&:before': {
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 9,
        content: '""',
        width: '100%',
        height: '100%',
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
        backgroundColor: alpha(color, opacity),
      },
    };
  }

  return {
    backdropFilter: `blur(${blur}px)`,
    WebkitBackdropFilter: `blur(${blur}px)`,
    backgroundColor: alpha(color, opacity),
  };
}




const NAV_WIDTH = 280;

const HEADER_MOBILE = 64;

const HEADER_DESKTOP = 92;

const StyledRoot = styled(AppBar)(({ theme }) => ({
  ...bgBlur({ color: theme.palette.background.default }),
  boxShadow: 'none',
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${NAV_WIDTH + 1}px)`,
  },
}));

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  minHeight: HEADER_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: HEADER_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------



export default function Header() {




  const isMiniScreen = useMediaQuery('(max-width:700px)');




  return (
    <StyledRoot>
      <StyledToolbar>
        <Box sx={{ flexGrow: 0.5 }} />



    <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1 }}>

    {/* Centered Text */}
    <div style={{ flexGrow: 1, textAlign: "center" }}>
    <Typography
      style={{
        color: '#FFFFFF',
        fontFamily: 'Roboto Mono',
        marginLeft: "70px",
        textTransform: 'none',
        fontSize: isMiniScreen ? '13px' : '20px', // Conditionally set the fontSize property
      }}
    >
       <strong>OrderEase</strong>
    </Typography>

    </div>
    <Divider />
    <Divider />
    <Divider />

   
    <Box sx={{ flexGrow: 1 }} />
  </Stack>




<Box sx={{ flexGrow: 0.5 }} />
<div>
  
      <Typography
        component={Link}
        to="/yourorder"
        style={{
          color: "#FFFFFF",
          fontFamily: "Roboto Mono",
          textTransform: "none",

          fontSize: isMiniScreen ? '10px' : '15px', // Conditionally set the fontSize property
          textDecoration: "none", // To remove underlining
          fontWeight: "bold",
        }}
      >
        Order (4)
      </Typography>
  </div>
      </StyledToolbar>
      <Divider/>
    </StyledRoot>
  );
}
