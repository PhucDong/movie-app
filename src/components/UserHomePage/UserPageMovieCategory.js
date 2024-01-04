import { Box, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import styled from "@emotion/styled";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { Link } from "react-router-dom";
import TVShowCard from "./TVShowCard";
import apiService from "../../app/apiService";
import { API_KEY } from "../../app/config";

export default function UserPageMovieCategory({ movieCategory }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSaveTVShowDetails = async (tvShowId) => {
    try {
      await apiService
        .get(`/3/tv/${tvShowId}?api_key=${API_KEY}`)
        .then((response) =>
          localStorage.setItem("tvShowDetails", JSON.stringify(response.data))
        );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomStyledMovieCategorySection
      headingTextColor={movieCategory.headingTextColor}
      bgColor={movieCategory.bgColor}
    >
      <Box className="movie-category_heading-section">
        <Typography variant="h4">{movieCategory.heading}</Typography>
        <ArrowForwardIosRoundedIcon />
      </Box>
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons={false}
        allowScrollButtonsMobile
      >
        {movieCategory.categoryItemsList.map((categoryItem, index) => (
          <Tab
            key={index}
            component={Link}
            to={`${categoryItem.id}`}
            onClick={() => handleSaveTVShowDetails(categoryItem.id)}
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
