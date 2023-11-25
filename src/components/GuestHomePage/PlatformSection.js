import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import React from "react";
import GuestHomePageImages from "./GuestHomePageImages";

export default function PlatformSection() {
  return (
    <CustomStyledPlatformSection>
      <Box className="platform-section-content">
        <Box>
          <Typography variant="h4">Enjoy on your TV</Typography>
          <Typography>
            Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray
            players, and more.
          </Typography>
        </Box>

        <img
          src={`${GuestHomePageImages.platformSection.pathImage}`}
          alt="platform backgroud"
        />
      </Box>
    </CustomStyledPlatformSection>
  );
}

const CustomStyledPlatformSection = styled(Box)(({ theme }) => ({
  width: "100%",
  backgroundColor: theme.palette.primary.main,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "62px 48px",
  "& .MuiTypography-root": {
    textAlign: "center",
    color: theme.palette.secondary.main,
  },
  "& h4": {
    fontSize: "30px",
    fontWeight: 700,
    marginBottom: "10px",
  },
  "& p": {
    fontSize: "18px",
    lineHeight: 1.25,
  },
  "& img": {
    display: "block",
    margin: "0 auto",
    marginTop: "48px",
    width: "100%",
    height: "auto",
  },
  [theme.breakpoints.up("sm")]: {
    "& h4": {
      fontSize: "46px",
      marginBottom: "16px",
    },
    "& p": {
      fontSize: "26px",
    },
    "& img": {
      width: "80%",
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "110px 87px",
    "& .platform-section-content": {
      display: "flex",
      alignItems: "center",
      gap: "70px",
    },
    "& .MuiTypography-root": {
      textAlign: "left",
    },
    "& img": {
      width: "55%",
      margin: 0,
    },
  },
  [theme.breakpoints.up("lg")]: {
    padding: "140px 87px",
    "& h4": {
      fontSize: "56px",
    },
    "& p": {
      fontSize: "36px",
    },
    "& img": {
      width: "45%",
    },
  },
}));
