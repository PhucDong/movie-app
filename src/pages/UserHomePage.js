import { Box } from "@mui/material";
import UserPageHomeSection from "../components/UserHomePage/UserPageHomeSection";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
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

  const [topMoviesData, setTopMoviesData] = useState([]);
  const [movieGenresData, setMovieGenresData] = useState([]);
  const [actionMoviesData, setActionMoviesData] = useState([]);
  const [adventureMoviesData, setAdventureMoviesData] = useState([]);
  const [animationMoviesData, setAnimationMoviesData] = useState([]);
  const [comedyMoviesData, setComedyMoviesData] = useState([]);

  const MovieCategoryData = [
    {
      heading: "Top Movies",
      headingTextColor: "secondary",
      bgColor: "primary",
      categoryItemsList: topMoviesData,
    },
    {
      heading: "Browse by Genre",
      headingTextColor: "info",
      bgColor: "secondary",
      categoryItemsList: movieGenresData,
    },
    {
      heading: "Action",
      headingTextColor: "secondary",
      bgColor: "primary",
      categoryItemsList: actionMoviesData,
    },
    {
      heading: "Adventure",
      headingTextColor: "info",
      bgColor: "secondary",
      categoryItemsList: adventureMoviesData,
    },
    {
      heading: "Animation",
      headingTextColor: "secondary",
      bgColor: "primary",
      categoryItemsList: animationMoviesData,
    },
    {
      heading: "Comedy",
      headingTextColor: "info",
      bgColor: "secondary",
      categoryItemsList: comedyMoviesData,
    },
  ];

  // Get hero section data
  useEffect(() => {
    const fetchedHeroSectionData = async () => {
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

    fetchedHeroSectionData();
  }, []);

  // Get top movies data
  useEffect(() => {
    const fetchedTopMoviesData = async () => {
      try {
        await apiService
          .get(`/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
          .then((response) => setTopMoviesData([...response.data.results]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedTopMoviesData();
  }, []);

  // Get movie genres data
  useEffect(() => {
    const fetchedMovieGenresData = async () => {
      try {
        await apiService
          .get(`/3/genre/movie/list?api_key=${API_KEY}`)
          .then((response) => setMovieGenresData([...response.data.genres]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedMovieGenresData();
  }, []);

  // Get action movies data
  useEffect(() => {
    const fetchedActionMoviesData = async () => {
      try {
        await apiService
          .get(`/3/discover/movie?api_key=${API_KEY}&with_genres=28&page=1`)
          .then((response) => setActionMoviesData([...response.data.results]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedActionMoviesData();
  }, []);

  // Get adventure movies data
  useEffect(() => {
    const fetchedAdventureMoviesData = async () => {
      try {
        await apiService
          .get(`/3/discover/movie?api_key=${API_KEY}&with_genres=12&page=1`)
          .then((response) =>
            setAdventureMoviesData([...response.data.results])
          );
      } catch (error) {
        console.log(error);
      }
    };

    fetchedAdventureMoviesData();
  }, []);

  // Get animation movies data
  useEffect(() => {
    const fetchedAnimationMoviesData = async () => {
      try {
        await apiService
          .get(`/3/discover/movie?api_key=${API_KEY}&with_genres=16&page=1`)
          .then((response) =>
            setAnimationMoviesData([...response.data.results])
          );
      } catch (error) {
        console.log(error);
      }
    };

    fetchedAnimationMoviesData();
  }, []);

  // Get comedy movies data
  useEffect(() => {
    const fetchedComedyMoviesData = async () => {
      try {
        await apiService
          .get(`/3/discover/movie?api_key=${API_KEY}&with_genres=35&page=1`)
          .then((response) => setComedyMoviesData([...response.data.results]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedComedyMoviesData();
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
