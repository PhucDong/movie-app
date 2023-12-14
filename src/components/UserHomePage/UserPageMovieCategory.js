import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import { useState } from "react";
import MovieCard from "./MovieCard";
import styled from "@emotion/styled";

export default function UserPageMovieCategory({ movieCategory }) {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <CustomStyledMovieCategorySection
      headingTextColor={movieCategory.headingTextColor}
      bgColor={movieCategory.bgColor}
    >
      <Typography variant="h4">{movieCategory.heading}</Typography>
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
            component={Card}
            label={<MovieCard categoryItem={categoryItem} />}
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
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& h4": {
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "10px",
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
