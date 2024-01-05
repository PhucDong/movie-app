import { Box, Typography } from "@mui/material";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
import SearchResultCard from "../components/SearchResultsPage/SearchResultCard";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import styled from "@emotion/styled";
import UnavailableSearchResult from "../components/SearchResultsPage/UnavailableSearchResult";

export default function SearchResultsPage() {
  const [genreTVShowsLocalData, setGenreTVShowsLocalData] = useState(
    JSON.parse(localStorage.getItem("genreTVShows"))
  );
  const [searchResults, setSearchResults] = useState(() =>
    genreTVShowsLocalData ? genreTVShowsLocalData : []
  );
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue")
  );
  const [tVShowGenreTitle, setTVShowGenreTitle] = useState(
    localStorage.getItem("tVShowGenreTitle")
  );

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchValue(localStorage.getItem("searchValue"));
    }
  };

  useEffect(() => {
    const fetchedSearchResultsData = async () => {
      try {
        await apiService
          .get(
            `/3/search/tv?query=${encodeURIComponent(
              searchValue
            )}&page=1&api_key=${API_KEY}`
          )
          .then((response) => setSearchResults([...response.data.results]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedSearchResultsData();
  }, [searchValue]);

  return (
    <>
      {genreTVShowsLocalData ? (
        ""
      ) : (
        <UserPageSearchBar handleKeyDown={handleKeyDown} />
      )}
      <CustomStyledSearchResultsContainer tVShowGenreTitle={tVShowGenreTitle}>
        <Box>
          {Array.isArray(searchResults) && searchResults.length > 0 ? (
            <>
              <Typography className="search-results_heading">
                {tVShowGenreTitle
                  ? `${tVShowGenreTitle} Shows`
                  : "Search Results"}
              </Typography>
              <CustomStyledSearchResultCards>
                {searchResults.map((searchResult, index) => (
                  <SearchResultCard
                    key={searchResult.id}
                    searchResult={searchResult}
                    // onClick={() => console.log("Hello!")}
                  />
                ))}
              </CustomStyledSearchResultCards>
            </>
          ) : (
            <UnavailableSearchResult searchValue={searchValue} />
          )}
        </Box>
      </CustomStyledSearchResultsContainer>
    </>
  );
}

const CustomStyledSearchResultsContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "tVShowGenreTitle",
})(({ theme, tVShowGenreTitle }) => ({
  padding: "0 27px",
  marginBottom: "32px",
  "& .search-results_heading": {
    fontSize: "18px",
    color: theme.palette.info.main,
    fontWeight: 600,
    marginTop: tVShowGenreTitle ? "32px" : 0,
    marginBottom: "10px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 87px",
    "& .search-results_heading": {
      fontSize: "24px",
    },
  },
}));

const CustomStyledSearchResultCards = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "8px",
  [theme.breakpoints.between("sm", "md")]: {
    gap: "10px",
  },
}));
