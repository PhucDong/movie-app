import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import GuestHomePageImages from "./GuestHomePageImages";

export default function HeroSection() {
  return (
    <CustomStyledHeroSectionOfGuestPage>
      <Box>
        <Typography variant="h4">
          Laughter. Tears. Thrills. Find it all on MovieDB.
        </Typography>
        <Typography>
          Endless entertainment starts at just 80,000 VND. Cancel anytime.
        </Typography>
      </Box>
    </CustomStyledHeroSectionOfGuestPage>
  );
}

const CustomStyledHeroSectionOfGuestPage = styled(Box)(({ theme }) => ({
  height: "80vh",
  width: "100%",
  backgroundImage: `url(${GuestHomePageImages.heroSection.pathImage})`,
  filter: "brightness(94%)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
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
    lineHeight: 1.2,
  },
  "& p": {
    fontSize: "18px",
    lineHeight: 1.2,
  },
  [theme.breakpoints.up("sm")]: {
    "& h4": {
      fontSize: "46px",
      marginBottom: "16px",
    },
    "& p": {
      fontSize: "26px",
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& h4": {
      fontSize: "56px",
    },
    "& p": {
      fontSize: "36px",
    },
  },
}));
