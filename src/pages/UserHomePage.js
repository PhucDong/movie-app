import { Box } from "@mui/material";
import UserPageHeroSection from "../components/UserHomePage/UserPageHeroSection";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
import UserPageMovieCategory from "../components/UserHomePage/UserPageMovieCategory";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import { useNavigate } from "react-router-dom";

export default function UserHomePage() {
  const [heroSectionData, setHeroSectionData] = useState({
    backdrop_path: "",
    original_name: "",
    first_air_date: "",
    genres: [],
    overview: "",
  });
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      localStorage.setItem("searchValue", e.target.value);
      localStorage.removeItem("genreTVShows");
      localStorage.removeItem("tVShowGenreTitle");
      navigate("/search");
    }
  };

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

  // Get hero section data
  useEffect(() => {
    const fetchedHeroSectionData = async () => {
      try {
        await apiService
          .get(`/3/tv/400?api_key=${API_KEY}`)
          .then((response) => setHeroSectionData({ ...response.data }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedHeroSectionData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <UserPageHeroSection heroSectionData={heroSectionData} />
      <UserPageSearchBar handleKeyDown={handleKeyDown} />
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
