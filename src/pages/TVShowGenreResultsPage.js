import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import CustomPagination from "../components/SearchResultsPage/CustomPagination";
import { useCallback, useEffect, useState } from "react";
import SearchResultCard from "../components/SearchResultsPage/SearchResultCard";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";
import { useParams } from "react-router-dom";

export default function TVShowGenreResultsPage() {
  const [tVShowGenreResults, setTVShowGenreResults] = useState(
    JSON.parse(localStorage.getItem("genreTVShows"))
  );
  const [tVShowGenreTitle, setTVShowGenreTitle] = useState(
    localStorage.getItem("tVShowGenreTitle")
  );
  const [tVShowGenreId, setTVShowGenreId] = useState(
    localStorage.getItem("tVShowGenreId")
  );
  const [tVShowGenreResultsPages, setTVShowGenreResultsPages] = useState(
    Number(localStorage.getItem("totalPages"))
  );
  const [tVShowGenreResultsPageNumber, setTVShowGenreResultsPageNumber] =
    useState(1);
  const [tVGenreList, setTVGenreList] = useState([]);

  const { tVShowGenreIdParam } = useParams();

  const handleChangeTVShowGenreResultsPagination = (event, newValue) => {
    setTVShowGenreResultsPageNumber(newValue);
  };

  useEffect(() => {
    const fetchedGenreList = async () => {
      try {
        await apiService
          .get(`/3/genre/tv/list?api_key=${API_KEY}`)
          .then((response) => setTVGenreList([...response.data.genres]));
      } catch (error) {
        console.log(error);
      }
    };

    fetchedGenreList();
  }, []);

  useEffect(() => {
    const fetchedTVShowGenreResultsData = async () => {
      try {
        await apiService
          .get(
            `3/discover/tv?api_key=${API_KEY}&with_genres=${tVShowGenreIdParam}&page=${tVShowGenreResultsPageNumber}`
          )
          .then((response) => {
            localStorage.setItem("totalPages", response.data.total_pages);
            localStorage.setItem(
              "genreTVShows",
              JSON.stringify(response.data.results)
            );
            localStorage.setItem("tVShowGenreId", tVShowGenreIdParam);
            localStorage.setItem("tVShowGenreTitle", filteredTVGenre());
            setTVShowGenreResultsPages(Number(response.data.total_pages));
            setTVShowGenreResults([...response.data.results]);
            setTVShowGenreId(tVShowGenreIdParam);
            setTVShowGenreTitle(filteredTVGenre());
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchedTVShowGenreResultsData();

    const filteredTVGenre = () => {
      if (tVGenreList.length > 0) {
        console.log(38, "Yes");
        let filteredTVGenre = tVGenreList.find(
          (tVGenre) => tVGenre.id === Number(tVShowGenreIdParam)
        );
        return filteredTVGenre.name;
      }
    };
  }, [tVShowGenreIdParam, tVShowGenreResultsPageNumber, tVGenreList]);

  return (
    <Box>
      <CustomStyledTVShowGenreResultsMainContent>
        {tVShowGenreResults.length > 0 ? (
          <>
            <Typography className="search-results_heading">
              {tVShowGenreTitle} Shows
            </Typography>

            <CustomStyledTVShowGenreResultCards>
              {tVShowGenreResults.map((searchResult) => (
                <SearchResultCard
                  key={searchResult.id}
                  searchResult={searchResult}
                />
              ))}
            </CustomStyledTVShowGenreResultCards>
          </>
        ) : (
          ""
        )}

        {tVShowGenreResults.length > 0 ? (
          <CustomPagination
            resultPages={tVShowGenreResultsPages}
            resultPageNumber={tVShowGenreResultsPageNumber}
            setSearchBarResultsPages={handleChangeTVShowGenreResultsPagination}
          />
        ) : (
          ""
        )}
      </CustomStyledTVShowGenreResultsMainContent>
    </Box>
  );
}

const CustomStyledTVShowGenreResultsMainContent = styled(Box)(({ theme }) => ({
  padding: "0 27px",
  "& .search-results_heading": {
    marginTop: "32px",
  },
  [theme.breakpoints.up("md")]: {
    padding: "0 87px",
  },
}));

const CustomStyledTVShowGenreResultCards = styled(Box)(({ theme }) => ({
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
