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
  const [topTVShowsData, setTopTVShowsData] = useState([]);
  const [tVShowGenresData, setTVShowGenresData] = useState([]);
  const [actionAdventureShowsData, setActionAdventureShowsData] = useState([]);
  const [crimeShowsData, setCrimeShowsData] = useState([]);
  const [animationShowsData, setAnimationShowsData] = useState([]);
  const [comedyShowsData, setComedyShowsData] = useState([]);

  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      localStorage.setItem("searchValue", e.target.value);
      navigate("/search");
    }
  };

  const movieCategoryData = [
    {
      heading: "Top TV Shows",
      headingTextColor: "secondary",
      bgColor: "primary",
      categoryItemsList: topTVShowsData,
    },
    {
      heading: "Browse by Genre",
      headingTextColor: "info",
      bgColor: "secondary",
      categoryItemsList: tVShowGenresData,
    },
    {
      heading: "Action & Adventure",
      headingTextColor: "secondary",
      bgColor: "primary",
      categoryItemsList: actionAdventureShowsData,
    },
    {
      heading: "Crime",
      headingTextColor: "info",
      bgColor: "secondary",
      categoryItemsList: crimeShowsData,
    },
    {
      heading: "Animation",
      headingTextColor: "secondary",
      bgColor: "primary",
      categoryItemsList: animationShowsData,
    },
    {
      heading: "Comedy",
      headingTextColor: "info",
      bgColor: "secondary",
      categoryItemsList: comedyShowsData,
    },
  ];

  // Get hero section data
  useEffect(() => {
    const fetchedHeroSectionData = async () => {
      try {
        await apiService
          .get(`/3/tv/40?api_key=${API_KEY}`)
          .then((response) => setHeroSectionData({ ...response.data }));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedHeroSectionData();
  }, []);

  // Get top TV Shows data
  useEffect(() => {
    const fetchedTopTVShowsData = async () => {
      try {
        await apiService
          .get(`/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`)
          .then((response) => setTopTVShowsData([...response.data.results]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedTopTVShowsData();
  }, []);

  // Get TV Show genres data
  useEffect(() => {
    const fetchedTVShowGenresData = async () => {
      try {
        await apiService
          .get(`/3/genre/tv/list?api_key=${API_KEY}`)
          .then((response) => setTVShowGenresData([...response.data.genres]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedTVShowGenresData();
  }, []);

  // Get action & adventure TV Shows data
  useEffect(() => {
    const fetchedActionAdventureShowsData = async () => {
      try {
        await apiService
          .get(`/3/discover/tv?api_key=${API_KEY}&with_genres=10759&page=1`)
          .then((response) =>
            setActionAdventureShowsData([...response.data.results])
          );
      } catch (error) {
        console.log(error);
      }
    };

    fetchedActionAdventureShowsData();
  }, []);

  // Get crime TV Shows data
  useEffect(() => {
    const fetchedCrimeShowsData = async () => {
      try {
        await apiService
          .get(`/3/discover/tv?api_key=${API_KEY}&with_genres=80&page=1`)
          .then((response) => setCrimeShowsData([...response.data.results]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedCrimeShowsData();
  }, []);

  // Get animation TV Shows data
  useEffect(() => {
    const fetchedAnimationShowsData = async () => {
      try {
        await apiService
          .get(`/3/discover/tv?api_key=${API_KEY}&with_genres=16&page=1`)
          .then((response) =>
            setAnimationShowsData([...response.data.results])
          );
      } catch (error) {
        console.log(error);
      }
    };

    fetchedAnimationShowsData();
  }, []);

  // Get comedy TV Shows data
  useEffect(() => {
    const fetchedComedyShowsData = async () => {
      try {
        await apiService
          .get(`/3/discover/tv?api_key=${API_KEY}&with_genres=35&page=1`)
          .then((response) => setComedyShowsData([...response.data.results]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedComedyShowsData();
  }, []);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <UserPageHeroSection heroSectionData={heroSectionData} />
      <UserPageSearchBar handleKeyDown={handleKeyDown} />
      {movieCategoryData.map((movieCategory, index) => (
        <UserPageMovieCategory key={index} movieCategory={movieCategory} />
      ))}
    </Box>
  );
}
