import { Box, Button, Typography } from "@mui/material";
import PlayArrowRoundedIcon from "@mui/icons-material/PlayArrowRounded";
import styled from "@emotion/styled";
import UserHomePageImages from "./UserHomePageImages";

export default function UserPageHomeSection() {
  return (
    <CustomStyledHeroSectionOfUserPage>
      <Box>
        <Typography variant="h4">Movie Name</Typography>
        <Typography className="movie-release-date">22 Oct 2021</Typography>
        <Typography className="movie-genres">Genres: Sci-Fi, Action</Typography>

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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, sunt
          quisquam, dolores hic quasi ex debitis animi sequi neque accusamus
          laboriosam, voluptas eligendi vitae officiis nemo eum qui dignissimos
          mollitia?
        </Typography>
      </Box>
    </CustomStyledHeroSectionOfUserPage>
  );
}

const CustomStyledHeroSectionOfUserPage = styled(Box)(({ theme }) => ({
  height: "90vh",
  width: "100%",
  backgroundImage: `url(${UserHomePageImages.heroSection.pathImage})`,
  filter: "brightness(94%)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  justifyContent: "center",
  alignItems: "flex-end",
  padding: "0 33px 20px 33px",
  "& .MuiBox-root": {
    textAlign: "center",
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
}));
