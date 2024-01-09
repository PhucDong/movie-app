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
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import apiService from "../../app/apiService";
import { API_KEY, BG_IMAGE_URL } from "../../app/config";

export default function TVShowSeasonSection({
  tVShowSeasonsData,
  tVShowIdParam,
}) {
  const [dropdownSeasonMenu, setDropdownSeasonMenu] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const openSeasonMenu = Boolean(dropdownSeasonMenu);
  const [seasonNumber, setSeasonNumber] = useState(() => {
    if (tVShowSeasonsData.seasons.length > 0) {
      if (tVShowSeasonsData.seasons[0].name === "Specials") {
        return 0;
      } else {
        return 1;
      }
    } else {
      return;
    }
  });
  const [seasonEpisodes, setSeasonEpisodes] = useState([]);

  const handleOpenSeasonMenu = (e) => {
    setDropdownSeasonMenu(e.currentTarget);
  };

  const handleCloseSeasonMenu = (e, index) => {
    setDropdownSeasonMenu(null);
    if (isNaN(index)) {
      setSelectedIndex(selectedIndex);
      if (tVShowSeasonsData.seasons[0].name === "Specials") {
        setSeasonNumber(selectedIndex);
      } else {
        setSeasonNumber(selectedIndex + 1);
      }
    } else {
      setSelectedIndex(index);
      if (tVShowSeasonsData.seasons[0].name === "Specials") {
        setSeasonNumber(index);
      } else {
        setSeasonNumber(index + 1);
      }
    }
  };

  useEffect(() => {
    if (seasonNumber !== null) {
      const fetchedSeasonEpisodes = async () => {
        try {
          await apiService
            .get(
              `3/tv/${tVShowIdParam}/season/${seasonNumber}?api_key=${API_KEY}`
            )
            .then((response) => setSeasonEpisodes([...response.data.episodes]));
        } catch (error) {
          console.log(error);
        }
      };

      fetchedSeasonEpisodes();
    }
  }, [seasonNumber, tVShowIdParam]);

  return (
    <CustomStyledSeasonSection>
      <CustomStyledSeasonButton
        variant="contained"
        onClick={handleOpenSeasonMenu}
        endIcon={<KeyboardArrowDown />}
      >
        Season {seasonNumber}
      </CustomStyledSeasonButton>

      {seasonNumber === null ? (
        ""
      ) : (
        <Menu
          anchorEl={dropdownSeasonMenu}
          open={openSeasonMenu}
          onClose={handleCloseSeasonMenu}
        >
          {tVShowSeasonsData.seasons.map((season, index) => (
            <MenuItem
              key={season.season_number}
              selected={index === selectedIndex}
              onClick={(e) => handleCloseSeasonMenu(e, index)}
            >
              Season {season.season_number}
            </MenuItem>
          ))}
        </Menu>
      )}

      <CustomStyledEpisodeCards>
        {seasonEpisodes.map((episode, index) => (
          <CustomStyledEpisodeCard key={index}>
            <CardActionArea>
              <CardMedia
                component="img"
                image={`${BG_IMAGE_URL}${episode.still_path}`}
                alt={episode.name}
              />
              <CardContent>
                <Typography className="episode-title">
                  Episode {episode.episode_number}: {episode.name}
                </Typography>
                <Typography className="episode-duration">
                  {episode.runtime ? `${episode.runtime}m` : "Coming Soon"}
                </Typography>
                <Typography className="episode-description">
                  {`${episode.overview.slice(0, 86)}...`}
                </Typography>
              </CardContent>
            </CardActionArea>
          </CustomStyledEpisodeCard>
        ))}
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
  height: "156px",
  "& .MuiCardActionArea-root": {
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "stretch",
    "& img": {
      width: "40%",
      height: "156px",
    },
    "& .MuiCardContent-root": {
      width: "100%",
      height: "100%",
      padding: "8px",
      "& .MuiTypography-root": {
        fontSize: "13px",
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
    height: "164px",
    "& .MuiCardActionArea-root": {
      "& img": {
        width: "34%",
        height: "164px",
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
    height: "164px",
    "& .MuiCardActionArea-root": {
      "& img": {
        width: "32%",
        height: "164px",
      },
      "& .MuiCardContent-root": {
        padding: "16px",
        "& .MuiTypography-root": {
          fontSize: "16px",
        },
        "& .episode-title": {
          fontSize: "18px",
        },
      },
    },
  },
  [theme.breakpoints.up("lg")]: {
    height: "170px",
    "& .MuiCardActionArea-root": {
      "& img": {
        width: "26%",
        height: "170px",
      },
      "& .MuiCardContent-root": {
        padding: "18px",
        "& .MuiTypography-root": {
          fontSize: "18px",
        },
        "& .episode-title": {
          fontSize: "20px",
        },
      },
    },
  },
}));
