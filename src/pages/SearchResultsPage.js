import { Box, Typography } from "@mui/material";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
import SearchResultCard from "../components/SearchResultsPage/SearchResultCard";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import styled from "@emotion/styled";
import UnavailableSearchResult from "../components/SearchResultsPage/UnavailableSearchResult";

export default function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue")
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
            `/3/search/movie?query=${encodeURIComponent(
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
      <UserPageSearchBar handleKeyDown={handleKeyDown} />
      <CustomStyledSearchResultsContainer>
        <Box>
          {Array.isArray(searchResults) && searchResults.length > 0 ? (
            <>
              <Typography className="search-results_heading">
                Search Results
              </Typography>
              <CustomStyledSearchResultCards>
                {searchResults.map((searchResult, index) => (
                  <SearchResultCard key={index} searchResult={searchResult} />
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

const CustomStyledSearchResultsContainer = styled(Box)(({ theme }) => ({
  padding: "0 27px",
  marginBottom: "68px",
  "& .search-results_heading": {
    fontSize: "18px",
    color: theme.palette.info.main,
    fontWeight: 600,
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
