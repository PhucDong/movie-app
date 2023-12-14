import { Box, Button, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import styled from "@emotion/styled";
import { BG_IMAGE_URL } from "../../app/config";

export default function UserPageHomeSection({ heroSectionData }) {
  function formattedDate() {
    let options = { year: "numeric", month: "long", day: "numeric" };
    return new Date(heroSectionData.releaseDate).toLocaleDateString(
      [],
      options
    );
  }

  function formattedGenres() {
    let newGenres = [];
    heroSectionData.genres.forEach((genre) => {
      newGenres.push(genre.name);
    });
    return newGenres.slice(0).join(", ");
  }

  return (
    <CustomStyledHeroSectionOfUserPage bgImage={heroSectionData.bgImage}>
      <img
        src={`${BG_IMAGE_URL}${heroSectionData.bgImage}`}
        alt={heroSectionData.title}
      />
      <Box className="hero-section_container">
        <Box className="hero-section_content">
          <Box className="hero-section_main-text">
            <Typography variant="h4">{heroSectionData.title}</Typography>
            <Typography className="movie-release-date">
              {formattedDate()}
            </Typography>
            <Typography className="movie-genres">
              Genres: {formattedGenres()}
            </Typography>
          </Box>

          <Box className="hero-section_buttons-description">
            <Box className="play-add-buttons">
              <Button className="play-btn">
                <PlayArrowRoundedIcon />
                <Typography>Play</Typography>
              </Button>

              <Button>
                <Typography>Add to My List</Typography>
              </Button>
            </Box>

            <Typography className="movie-description">
              {heroSectionData.description}
            </Typography>
          </Box>
        </Box>
      </Box>
    </CustomStyledHeroSectionOfUserPage>
  );
}

const CustomStyledHeroSectionOfUserPage = styled(Box, {
  shouldForwardProp: (prop) => prop !== "bgImage",
})(({ theme }) => ({
  position: "relative",
  height: "90vh",
  width: "100%",
  "& img": {
    height: "100%",
    width: "100%",
  },
  "& .hero-section_container": {
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "0 33px 20px 33px",
    textAlign: "center",
    background:
      "linear-gradient(rgba(42,159,255,.2) 0%, rgba(33,33,32,1) 95%, rgba(33,33,32,1) 95%)",
    color: theme.palette.secondary.main,
  },
  "& h4": {
    fontSize: "30px",
    fontWeight: 600,
  },
  "& .movie-release-date": {
    margin: "4px 0",
    fontSize: "20px",
  },
  "& .movie-genres": {
    fontSize: "20px",
  },
  "& .play-add-buttons": {
    margin: "10px 0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "4px",
    "& .MuiButton-root": {
      border: "none",
      backgroundColor: theme.palette.secondary.main,
      borderRadius: 0,
      padding: "14px 18px",
      color: theme.palette.info.main,
      textTransform: "capitalize",
      width: "55%",
      "& .MuiTypography-root": {
        fontWeight: 600,
      },
    },
    "& .play-btn": {
      display: "flex",
      alignItems: "center",
      gap: "3px",
      lineHeight: "100%",
      padding: 0,
      "& svg": {
        fontSize: "2rem",
      },
    },
  },
  "& .movie-description": {
    lineHeight: 1.2,
  },
  [theme.breakpoints.up("sm")]: {
    "& h4": {
      fontSize: "40px",
    },
    "& .movie-release-date": {
      margin: "8px 0",
      fontSize: "22px",
    },
    "& .movie-genres": {
      fontSize: "22px",
    },
    "& .play-add-buttons": {
      "& .MuiButton-root": {
        width: "36%",
      },
      "& .play-btn": {
        "& svg": {
          fontSize: "2.4rem",
        },
      },
    },
  },
  [theme.breakpoints.up("md")]: {
    "& .hero-section_container": {
      padding: "0 87px 30px 87px",
    },
    "& .hero-section_main-text": {
      textAlign: "left",
    },
    "& .hero-section_buttons-description": {
      marginTop: "26px",
      display: "flex",
      alignItems: "flex-start",
      gap: "32px",
      "& .play-add-buttons": {
        margin: 0,
        width: "74%",
        "& .MuiButton-root": {
          width: "100%",
          "& .MuiTypography-root": {
            fontSize: "1.2rem",
          },
        },
      },
      "& .movie-description": {
        textAlign: "left",
        fontSize: "1.1rem",
      },
    },
  },
  [theme.breakpoints.up("lg")]: {
    "& .hero-section_container": {
      padding: "0 87px 40px 87px",
    },
    "& .hero-section_buttons-description": {
      "& .play-add-buttons": {
        width: "40%",
      },
    },
  },
}));
