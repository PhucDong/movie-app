import { Box, Typography } from "@mui/material";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
import SearchResultCard from "../components/SearchResultsPage/SearchResultCard";
import { useEffect, useState } from "react";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import styled from "@emotion/styled";
import UnavailableSearchResults from "../components/SearchResultsPage/UnavailableSearchResults";
import CustomPagination from "../components/SearchResultsPage/CustomPagination";

export default function SearchBarResultsPage() {
  const [searchBarResults, setSearchBarResults] = useState(
    JSON.parse(localStorage.getItem("genreTVShows"))
  );
  const [searchValue, setSearchValue] = useState(
    localStorage.getItem("searchValue")
  );

  const [searchBarResultsPages, setSearchBarResultsPages] = useState(
    Number(localStorage.getItem("totalPages"))
  );
  const [searchBarResultsPageNumber, setSearchBarResultsPageNumber] =
    useState(1);

  const handleChangeSearchBarResultsPagination = (event, newValue) => {
    setSearchBarResultsPageNumber(newValue);
  };

  useEffect(() => {
    const fetchedSearchBarResultsData = async () => {
      try {
        await apiService
          .get(
            `/3/search/tv?query=${encodeURIComponent(
              searchValue
            )}&page=${searchBarResultsPageNumber}&api_key=${API_KEY}`
          )
          .then((response) => {
            setSearchBarResults([...response.data.results]);
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchedSearchBarResultsData();
  }, [searchValue, searchBarResultsPageNumber]);

  return (
    <Box>
      <UserPageSearchBar
        setSearchValue={setSearchValue}
        setSearchResults={setSearchBarResults}
        setSearchBarResultsPages={setSearchBarResultsPages}
      />
      <CustomStyledSearchBarResultsMainContent>
        {searchBarResults.length > 0 ? (
          <>
            <Typography className="search-results_heading">
              Search Results
            </Typography>

            <CustomStyledSearchBarResultCards>
              {searchBarResults.map((searchResult) => (
                <SearchResultCard
                  key={searchResult.id}
                  searchResult={searchResult}
                />
              ))}
            </CustomStyledSearchBarResultCards>
          </>
        ) : (
          <UnavailableSearchResults searchValue={searchValue} />
        )}

        {searchBarResults.length > 0 ? (
          <CustomPagination
            resultPages={searchBarResultsPages}
            resultPageNumber={searchBarResultsPageNumber}
            setSearchBarResultsPages={handleChangeSearchBarResultsPagination}
          />
        ) : (
          ""
        )}
      </CustomStyledSearchBarResultsMainContent>
    </Box>
  );
}

const CustomStyledSearchBarResultsMainContent = styled(Box)(({ theme }) => ({
  padding: "0 27px",
  [theme.breakpoints.up("md")]: {
    padding: "0 87px",
  },
}));

const CustomStyledSearchBarResultCards = styled(Box)(({ theme }) => ({
  display: "flex",
  flexWrap: "wrap",
  alignItems: "center",
  gap: "4px",
  [theme.breakpoints.between("sm", "md")]: {
    gap: "8px",
  },
  [theme.breakpoints.up("md")]: {
    gap: "6px",
  },
}));
