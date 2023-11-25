import { Box, Typography } from "@mui/material";
import GuestHomePageImages from "./GuestHomePageImages";
import styled from "@emotion/styled";

export default function WatchEverywhereSection() {
  return (
    <CustomStyledWatchEverywhereSection>
      <Box className="watchEverywhere-section-content">
        <Box>
          <Typography variant="h4">Watch everywhere</Typography>
          <Typography>
            Stream unlimited movies and TV shows on your phone, tablet, laptop,
            and TV.
          </Typography>
        </Box>

        <img
          src={`${GuestHomePageImages.watchEverywhereSection.pathImage}`}
          alt="watch everywhere background"
        />
      </Box>
    </CustomStyledWatchEverywhereSection>
  );
}

const CustomStyledWatchEverywhereSection = styled(Box)(({ theme }) => ({
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
    "& .watchEverywhere-section-content": {
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
