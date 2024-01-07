import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  const handleClickLogoFooter = () => {
    if (localStorage.getItem("isValidUser")) {
      navigate("/browse");
    } else {
      navigate("/");
    }
  };

  return (
    <CustomStyledFooter>
      <Box>
        <Box className="footer-main-content">
          <Box>
            <Typography variant="h4" onClick={handleClickLogoFooter}>
              MovieDB
            </Typography>
          </Box>
          <Box>
            <Typography variant="h5">Contacts</Typography>
            <Typography>business@moviedb.com</Typography>
            <Typography>(+84) 8235789675</Typography>
            <Typography>92 Highway Road, LA</Typography>
          </Box>
        </Box>

        <Typography className="footer-copyright">
          &copy; Copyright 2023 MovieDB Inc. All rights reserved.
        </Typography>
      </Box>
    </CustomStyledFooter>
  );
}

const CustomStyledFooter = styled(Box)(({ theme }) => ({
  flexGrow: 1,
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  padding: "62px 48px 14px 48px",
  "& .MuiTypography-root": {
    textAlign: "center",
    color: theme.palette.secondary.main,
  },
  "& h4": {
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "26px",
    cursor: "pointer",
  },
  "& h5": {
    fontSize: "24px",
    fontWeight: 700,
    marginBottom: "6px",
  },
  "& p": {
    fontSize: "20px",
    marginTop: "6px",
  },
  "& .footer-copyright": {
    fontSize: "16px",
    marginTop: "50px",
    lineHeight: 1.25,
  },
  [theme.breakpoints.up("sm")]: {
    "& h4": {
      fontSize: "46px",
      marginBottom: "22px",
    },
    "& h5": {
      fontSize: "30px",
      marginBottom: "10px",
    },
    "& p": {
      fontSize: "26px",
      marginTop: "8px",
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "110px 87px 20px 87px",
    "& .footer-main-content": {
      display: "flex",
      gap: "120px",
      alignItems: "flex-start",
      "& .MuiTypography-root": {
        textAlign: "left",
      },
    },
    "& h4": {
      fontSize: "46px",
    },
    "& h5": {
      fontSize: "30px",
      marginBottom: "10px",
    },
    "& p": {
      fontSize: "26px",
      marginTop: "8px",
    },
  },
  [theme.breakpoints.up("lg")]: {
    padding: "140px 87px 20px 87px",
    "& .footer-main-content": {
      gap: "140px",
    },
    "& h4": {
      fontSize: "56px",
    },
    "& h5": {
      fontSize: "40px",
    },
    "& p": {
      fontSize: "36px",
    },
    "& img": {
      width: "45%",
    },
  },
}));
