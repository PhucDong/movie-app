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
import { useEffect, useState } from "react";
import apiService from "../../app/apiService";
import { API_KEY, BG_IMAGE_URL } from "../../app/config";
import { useNavigate } from "react-router-dom";

export default function SimilarTVShowsSection({ similarTVShowsData }) {
  const [similarTVShows, setSimilarTVShows] = useState([]);
  const navigate = useNavigate();

  function formattedDate(dateData) {
    let options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateData).toLocaleDateString([], options);
  }

  const handleSaveSimilarTVShowDetails = async (similarTVShowId) => {
    try {
      await apiService
        .get(
          `/3/tv/${similarTVShowId}?api_key=${API_KEY}&append_to_response=credits`
        )
        .then((response) =>
          localStorage.setItem("tVShowDetails", JSON.stringify(response.data))
        );
    } catch (error) {
      console.log(error);
    }

    window.location.reload(true);
    navigate(`/browse/tVShow/${similarTVShowId}`);
  };

  useEffect(() => {
    const fetchedSimilarTVShows = async () => {
      try {
        await apiService
          .get(
            `3/tv/${similarTVShowsData.id}/similar?api_key=${API_KEY}&page=1`
          )
          .then((response) => setSimilarTVShows([...response.data.results]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedSimilarTVShows();
  }, [similarTVShowsData.id]);

  return (
    <CustomStyledSimilarTVShowsSection>
      <CustomStyledSimilarTVShowsContent>
        <Typography variant="h4">More Like This</Typography>
        <CustomStyledSimilarTVShowCards>
          {similarTVShows.map((similarTVShow, index) => (
            <CustomStyledSimilarTVShowCard key={index}>
              <Box className="similar-show-image">
                <CardMedia
                  image={`${BG_IMAGE_URL}${similarTVShow.backdrop_path}`}
                  title={similarTVShow.original_name}
                />
                <Typography>
                  Rating: {similarTVShow.vote_average.toFixed(1)}
                </Typography>
                <Box className="dark-bg-cover"></Box>
              </Box>
              <CardContent>
                <Typography variant="h5">
                  {similarTVShow.original_name}
                </Typography>
                <Typography variant="h6">
                  {formattedDate(similarTVShow.first_air_date)}
                </Typography>
                <Typography>{`${similarTVShow.overview.slice(
                  0,
                  260
                )}...`}</Typography>
              </CardContent>
              <CardActions>
                <Button
                  onClick={() =>
                    handleSaveSimilarTVShowDetails(similarTVShow.id)
                  }
                >
                  Go to Show
                </Button>
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
  alignItems: "stretch",
  gap: "8px",
}));

const CustomStyledSimilarTVShowCard = styled(Card)(({ theme }) => ({
  boxShadow: "none",
  borderRadius: "12px",
  display: "flex",
  flexDirection: "column",
  width: "100%",
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
    flexGrow: 1,
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
    width: "100%",
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
      height: "170px",
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
