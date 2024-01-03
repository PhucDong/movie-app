import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";
import { useState } from "react";
import topMovieBgImage from "../../assets/images/UserHomePage/top-movie_bgImage.jpg";
import styled from "@emotion/styled";
import fakeSeasonEpisodeData from "../fakeData/fakeSeasonEpisodeData";

export default function TVShowSeasonSection() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const openSeasonMenu = Boolean(anchorEl);

  const handleOpenSeasonMenu = (e) => {
    setAnchorEl(e.currentTarget);
  };

  const handleCloseSeasonMenu = (e, index) => {
    setAnchorEl(null);
    if (isNaN(index)) {
      setSelectedIndex(selectedIndex);
    } else {
      setSelectedIndex(index);
    }
  };

  return (
    <CustomStyledSeasonSection>
      <CustomStyledSeasonButton
        variant="contained"
        onClick={handleOpenSeasonMenu}
        endIcon={<KeyboardArrowDown />}
      >
        Season {selectedIndex + 1}
      </CustomStyledSeasonButton>

      <Menu
        anchorEl={anchorEl}
        open={openSeasonMenu}
        onClose={handleCloseSeasonMenu}
      >
        {fakeSeasonEpisodeData.map((season, index) => (
          <MenuItem
            key={season.seasonNumber}
            selected={index === selectedIndex}
            onClick={(e) => handleCloseSeasonMenu(e, index)}
          >
            Season {season.seasonNumber}
          </MenuItem>
        ))}
      </Menu>

      <CustomStyledEpisodeCards>
        {selectedIndex + 1 === fakeSeasonEpisodeData[selectedIndex].seasonNumber
          ? fakeSeasonEpisodeData[selectedIndex].episodes.map(
              (episode, index) => (
                <CustomStyledEpisodeCard key={index}>
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      image={topMovieBgImage}
                      alt="Bla bla ble"
                    />
                    <CardContent>
                      <Typography className="episode-title">
                        Episode {episode.episodeNumber}: {episode.episodeTitle}
                      </Typography>
                      <Typography className="episode-duration">
                        {episode.episodeDuration}
                      </Typography>
                      <Typography className="episode-description">
                        {episode.episodeDescription}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                </CustomStyledEpisodeCard>
              )
            )
          : ""}
      </CustomStyledEpisodeCards>
    </CustomStyledSeasonSection>
  );
}

const CustomStyledSeasonSection = styled(Box)(({ theme }) => ({
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

const CustomStyledSeasonButton = styled(Button)(({ theme }) => ({
  boxShadow: "none",
  marginBottom: "10px",
  "&:hover": {
    boxShadow: "none",
    backgroundColor: "transparent",
  },
  padding: 0,
  textTransform: "none",
  fontSize: "18px",
  fontWeight: 700,
  backgroundColor: theme.palette.primary.main,
  "& .MuiButton-endIcon": {
    marginLeft: "4px",
    "& svg": {
      fontSize: "34px",
    },
  },
  [theme.breakpoints.up("sm")]: {
    fontSize: "20px",
  },
  [theme.breakpoints.up("md")]: {
    "& .MuiButton-endIcon": {
      "& svg": {
        fontSize: "40px",
      },
    },
  },
}));

const CustomStyledEpisodeCards = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "8px",
}));

const CustomStyledEpisodeCard = styled(Card)(({ theme }) => ({
  borderRadius: "12px",
  boxShadow: "none",
  "& .MuiCardActionArea-root": {
    display: "flex",
    alignItems: "stretch",
    "& img": {
      width: "40%",
      height: "auto",
    },
    "& .MuiCardContent-root": {
      padding: "10px",
      "& .MuiTypography-root": {
        fontSize: "14px",
      },
      "& .episode-title": {
        fontWeight: "bold",
        marginBottom: "6px",
        lineHeight: 1.2,
      },
      "& .episode-duration": {
        marginBottom: "12px",
      },
      "& .episode-description": {
        lineHeight: 1.2,
      },
    },
  },
  [theme.breakpoints.between("sm", "md")]: {
    "& .MuiCardActionArea-root": {
      "& img": {
        width: "35%",
      },
      "& .MuiCardContent-root": {
        padding: "14px",
        "& .MuiTypography-root": {
          fontSize: "16px",
        },
        "& .episode-title": {
          fontSize: "18px",
        },
      },
    },
  },
  [theme.breakpoints.between("md", "lg")]: {
    "& .MuiCardActionArea-root": {
      "& img": {
        width: "30%",
      },
      "& .MuiCardContent-root": {
        padding: "16px",
        "& .MuiTypography-root": {
          fontSize: "18px",
        },
        "& .episode-title": {
          fontSize: "20px",
        },
      },
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& .MuiCardActionArea-root": {
      "& img": {
        width: "25%",
      },
      "& .MuiCardContent-root": {
        padding: "18px",
        "& .MuiTypography-root": {
          fontSize: "20px",
        },
        "& .episode-title": {
          fontSize: "22px",
        },
      },
    },
  },
}));
