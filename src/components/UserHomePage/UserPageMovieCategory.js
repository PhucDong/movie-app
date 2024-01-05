import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";
import TVShowCard from "./TVShowCard";
import apiService from "../../app/apiService";
import { API_KEY } from "../../app/config";

export default function UserPageMovieCategory({ tVShowCategory }) {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSaveTVShowDetails = async (
    categoryItemId,
    categoryHeading,
    tVShowGenreTitle
  ) => {
    try {
      await apiService
        .get(
          categoryHeading === "Browse by Genre"
            ? `3/discover/tv?api_key=${API_KEY}&with_genres=${categoryItemId}&page=1`
            : `/3/tv/${categoryItemId}?api_key=${API_KEY}&append_to_response=credits`
        )

        .then((response) =>
          categoryHeading === "Browse by Genre"
            ? (localStorage.setItem(
                "genreTVShows",
                JSON.stringify(response.data.results)
              ),
              localStorage.setItem("tVShowGenreTitle", tVShowGenreTitle))
            : localStorage.setItem(
                "tVShowDetails",
                JSON.stringify(response.data)
              )
        );
    } catch (error) {
      console.log(error);
    }

    navigate(
      categoryHeading === "Browse by Genre"
        ? `/search/${categoryItemId}`
        : `${categoryItemId}`
    );
  };

  return (
    <CustomStyledMovieCategorySection
      headingTextColor={tVShowCategory.headingTextColor}
      bgColor={tVShowCategory.bgColor}
    >
      <Box className="movie-category_heading-section">
        <Typography variant="h4">{tVShowCategory.heading}</Typography>
        <ArrowForwardIosRoundedIcon />
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        allowScrollButtonsMobile
      >
        {tVShowCategory.categoryItemsList.map((categoryItem, index) => (
          <Tab
            key={index}
            component={Card}
            onClick={() =>
              handleSaveTVShowDetails(
                categoryItem.id,
                tVShowCategory.heading,
                categoryItem.name
              )
            }
            label={<TVShowCard categoryItem={categoryItem} />}
          />
        ))}
      </Tabs>
    </CustomStyledMovieCategorySection>
  );
}

const CustomStyledMovieCategorySection = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "headingTextColor" && prop !== "bgColor",
})(({ headingTextColor, bgColor, theme }) => ({
  padding: "22px 27px 14px 27px",
  backgroundColor:
    bgColor === "primary"
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  "& .movie-category_heading-section": {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginBottom: "10px",
    "& svg": {
      color: theme.palette.secondary.main,
      width: "22px",
      height: "20px",
    },
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& h4": {
    fontSize: "18px",
    fontWeight: 700,
    color:
      headingTextColor === "secondary"
        ? theme.palette.secondary.main
        : theme.palette.info.main,
  },
  "& .MuiTab-root": {
    padding: 0,
    height: "100%",
    borderRadius: "12px",
  },
  "& .MuiTabs-flexContainer": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "34px 27px 20px 27px",
    "& h4": {
      fontSize: "20px",
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "44px 87px 28px 87px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "50px 87px 32px 87px",
  },
}));
