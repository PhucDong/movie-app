import { Box } from "@mui/material";
import UserPageHeroSection from "../components/UserHomePage/UserPageHeroSection";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
import UserPageMovieCategory from "../components/UserHomePage/UserPageMovieCategory";
import { useState } from "react";

export default function UserHomePage() {
  const [heroSectionData, setHeroSectionData] = useState(
    JSON.parse(localStorage.getItem("heroSectionData"))
  );

  console.log(12, heroSectionData);

  const movieCategoryData = [
    {
      heading: "Top TV Shows",
      headingTextColor: "secondary",
      bgColor: "primary",
    },
    {
      heading: "Browse by Genres",
      headingTextColor: "info",
      bgColor: "secondary",
    },
    {
      categoryId: 10759,
      heading: "Action & Adventure",
      headingTextColor: "secondary",
      bgColor: "primary",
    },
    {
      categoryId: 80,
      heading: "Crime",
      headingTextColor: "info",
      bgColor: "secondary",
    },
    {
      categoryId: 16,
      heading: "Animation",
      headingTextColor: "secondary",
      bgColor: "primary",
    },
    {
      categoryId: 35,
      heading: "Comedy",
      headingTextColor: "info",
      bgColor: "secondary",
    },
    {
      categoryId: 99,
      heading: "Documentary",
      headingTextColor: "secondary",
      bgColor: "primary",
    },
    {
      categoryId: 10764,
      heading: "Reality",
      headingTextColor: "info",
      bgColor: "secondary",
    },
    {
      categoryId: 10765,
      heading: "Sci-Fi & Fantasy",
      headingTextColor: "secondary",
      bgColor: "primary",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <UserPageHeroSection heroSectionData={heroSectionData} />
      <UserPageSearchBar />
      {movieCategoryData.map((tVShowCategory, index) => (
        <UserPageMovieCategory
          key={index}
          tVShowCategory={tVShowCategory}
          tVShowCategoryId={tVShowCategory.categoryId}
        />
      ))}
    </Box>
  );
}
