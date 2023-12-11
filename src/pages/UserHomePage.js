import { Box } from "@mui/material";
import UserPageHomeSection from "../components/UserHomePage/UserPageHomeSection";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
import MovieCategoryData from "../components/UserHomePage/FakeData/MovieCategoryData";
import UserPageMovieCategory from "../components/UserHomePage/UserPageMovieCategory";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";

export default function UserHomePage() {
  const [heroSectionData, setHeroSectionData] = useState({
    bgImage: "",
    title: "",
    releaseDate: "",
    genres: [],
    description: "",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        await apiService
          .get(`/3/movie/157336?api_key=${API_KEY}`)
          .then((response) =>
            setHeroSectionData({
              ...heroSectionData,
              bgImage: response.data.backdrop_path,
              title: response.data.original_title,
              releaseDate: response.data.release_date,
              genres: [...response.data.genres],
              description: response.data.overview,
            })
          );
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <UserPageHomeSection heroSectionData={heroSectionData} />
      <UserPageSearchBar />
      {MovieCategoryData.map((movieCategory, index) => (
        <UserPageMovieCategory key={index} movieCategory={movieCategory} />
      ))}
    </Box>
  );
}

// Fetch images
// https://developer.themoviedb.org/docs
