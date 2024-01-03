import styled from "@emotion/styled";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import fakeSimilarTVShowsData from "../fakeData/fakeSimilarTVShowsData";

export default function SimilarTVShowsSection() {
  return (
    <CustomStyledSimilarTVShowsSection>
      <CustomStyledSimilarTVShowsContent>
        <Typography variant="h4">More Like This</Typography>
        <CustomStyledSimilarTVShowCards>
          {fakeSimilarTVShowsData.map((similarShow, index) => (
            <CustomStyledSimilarTVShowCard key={index}>
              <Box className="similar-show-image">
                <CardMedia
                  image={similarShow.showBgImage}
                  title={similarShow.showName}
                />
                <Typography>{similarShow.numberOfEpisodes} episodes</Typography>
                <Box className="dark-bg-cover"></Box>
              </Box>
              <CardContent>
                <Typography variant="h5">{similarShow.showName}</Typography>
                <Typography variant="h6">{similarShow.releaseDate}</Typography>
                <Typography>{similarShow.showDescription}</Typography>
              </CardContent>
              <CardActions>
                <Button>Go to Show</Button>
              </CardActions>
            </CustomStyledSimilarTVShowCard>
          ))}
        </CustomStyledSimilarTVShowCards>
      </CustomStyledSimilarTVShowsContent>
    </CustomStyledSimilarTVShowsSection>
  );
}

const CustomStyledSimilarTVShowsSection = styled(Box)(({ theme }) => ({
  padding: "22px 27px 14px 27px",
  backgroundColor: theme.palette.primary.main,
  [theme.breakpoints.up("sm")]: {
    padding: "34px 27px 20px 27px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "44px 87px 28px 87px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "50px 87px 32px 87px",
  },
}));

const CustomStyledSimilarTVShowsContent = styled(Box)(({ theme }) => ({
  "& h4": {
    fontSize: "18px",
    fontWeight: 700,
    color: theme.palette.secondary.main,
    marginBottom: "10px",
  },
  [theme.breakpoints.up("sm")]: {
    "& h4": {
      fontSize: "20px",
    },
  },
}));

const CustomStyledSimilarTVShowCards = styled(Box)(() => ({
  display: "flex",
  flexWrap: "wrap",
  gap: "8px",
}));

const CustomStyledSimilarTVShowCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: "12px",
  "& .similar-show-image": {
    position: "relative",
    height: "130px",
    "& .MuiCardMedia-root": {
      width: "100%",
      height: "100%",
    },
    "& .MuiTypography-root": {
      position: "absolute",
      top: "14px",
      right: "14px",
      color: theme.palette.secondary.main,
      zIndex: 2,
      fontSize: "18px",
    },
    "& .dark-bg-cover": {
      position: "absolute",
      height: "100%",
      width: "100%",
      top: 0,
      left: 0,
      background:
        "linear-gradient(rgba(42,159,255,.2) 0%, rgba(33,33,32,1) 95%, rgba(33,33,32,1) 95%)",
      zIndex: 1,
    },
  },
  "& .MuiCardContent-root": {
    padding: "10px",
    "& .MuiTypography-root": {
      color: theme.palette.info.main,
      lineHeight: 1.2,
    },
    "& h5": {
      fontWeight: 600,
      fontSize: "18px",
      marginBottom: "4px",
    },
    "& h6": {
      fontSize: "16px",
      marginBottom: "10px",
    },
  },
  "& .MuiCardActions-root": {
    padding: "10px",
    "& .MuiButtonBase-root": {
      margin: "0 auto",
      borderRadius: "8px",
      width: "100%",
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.secondary.main,
      textTransform: "none",
      fontSize: "18px",
      lineHeight: "100%",
      padding: "12px",
    },
  },
  [theme.breakpoints.up("sm")]: {
    width: "49%",
    "& .similar-show-image": {
      height: "140px",
      "& .MuiTypography-root": {
        fontSize: "20px",
      },
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "32.6%",
    "& .MuiCardContent-root": {
      padding: "14px",
      "& h6": {
        fontSize: "17px",
      },
    },
    "& .MuiCardActions-root": {
      padding: "14px",
      "& .MuiButtonBase-root": {
        fontSize: "20px",
      },
    },
  },
  [theme.breakpoints.up("lg")]: {
    width: "24.4%",
    "& .similar-show-image": {
      height: "160px",
      "& .MuiTypography-root": {
        fontSize: "22px",
      },
    },
    "& .MuiCardContent-root": {
      padding: "18px",
      "& h5": {
        fontSize: "20px",
      },
      "& h6": {
        fontSize: "18px",
      },
    },
    "& .MuiCardActions-root": {
      padding: "18px",
    },
  },
}));
