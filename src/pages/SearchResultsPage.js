import { Box, Typography } from "@mui/material";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
import SearchResultCard from "../components/SearchResultsPage/SearchResultCard";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import styled from "@emotion/styled";
import UnavailableSearchResult from "../components/SearchResultsPage/UnavailableSearchResult";
import { CustomStylePagination } from "../components/UserHomePage/UserPageMovieCategory";

export default function SearchResultsPage() {
  const [searchResults, setSearchResults] = useState([]);
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue").length > 0
      ? localStorage.getItem("searchValue")
      : ""
  );
  const [tVShowGenreTitle, setTVShowGenreTitle] = useState(
    localStorage.getItem("tVShowGenreTitle")
  );
  const [tVShowGenreId, setTVShowGenreId] = useState(
    localStorage.getItem("tVShowGenreId")
  );

  const [searchResultsPages, setSearchResultsPages] = useState(0);
  const [searchResultsPageNumber, setSearchResultsPageNumber] = useState(1);

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      setSearchValue(localStorage.getItem("searchValue"));
    }
  };

  const handleChangeSearchResultsPagination = (event, newValue) => {
    setSearchResultsPageNumber(newValue);
  };

  useEffect(() => {
    if (searchValue.length > 0) {
      const fetchedSearchBarResultsData = async () => {
        try {
          await apiService
            .get(
              `/3/search/tv?query=${encodeURIComponent(
                searchValue
              )}&page=${searchResultsPageNumber}&api_key=${API_KEY}`
            )
            .then((response) => {
              setSearchResultsPages(response.data.total_pages);
              setSearchResults([...response.data.results]);
            });
        } catch (error) {
          console.log(error);
        }
      };

      fetchedSearchBarResultsData();
    } else {
      setSearchResultsPages(0);
      setSearchResults([]);
    }
  }, [searchValue, searchResultsPageNumber]);

  useEffect(() => {
    if (tVShowGenreId) {
      const fetchedTVShowResultsData = async () => {
        try {
          await apiService
            .get(
              `3/discover/tv?api_key=${API_KEY}&with_genres=${tVShowGenreId}&page=${searchResultsPageNumber}`
            )
            .then((response) => {
              setSearchResultsPages(response.data.total_pages);
              setSearchResults([...response.data.results]);
            });
        } catch (error) {
          console.log(error);
        }
      };

      fetchedTVShowResultsData();
    }

    localStorage.removeItem("tVShowGenreId");
  }, [tVShowGenreId, searchResultsPageNumber]);

  console.log(85, searchResults);

  return (
    <>
      {JSON.parse(localStorage.getItem("genreTVShows")) ? (
        ""
      ) : (
        <UserPageSearchBar handleKeyDown={handleKeyDown} />
      )}
      <CustomStyledSearchResultsContainer tVShowGenreTitle={tVShowGenreTitle}>
        <Box>
          {searchResults.length > 0 ? (
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
                  />
                ))}
              </CustomStyledSearchResultCards>
            </>
          ) : (
            <UnavailableSearchResult searchValue={searchValue} />
          )}
        </Box>
        {searchResultsPages && searchResults.length > 0 ? (
          <CustomStylePagination
            count={searchResultsPages > 500 ? 500 : searchResultsPages}
            page={searchResultsPageNumber}
            onChange={handleChangeSearchResultsPagination}
          />
        ) : (
          ""
        )}
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
