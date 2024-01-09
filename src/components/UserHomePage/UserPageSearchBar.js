import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import apiService from "../../app/apiService";
import { API_KEY } from "../../app/config";

export default function UserPageSearchBar(props) {
  const { setSearchValue, setSearchResults, setSearchBarResultsPages } = props;

  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    localStorage.setItem("searchValue", e.target.value);
    setInputValue(e.target.value);
  };

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      try {
        await apiService
          .get(
            `/3/search/tv?query=${encodeURIComponent(
              inputValue
            )}&page=1&api_key=${API_KEY}`
          )
          .then((response) => {
            localStorage.setItem("totalPages", response.data.total_pages);
            localStorage.setItem(
              "genreTVShows",
              JSON.stringify(response.data.results)
            );
            localStorage.setItem("searchValue", inputValue);
            setSearchResults(response.data.results);
            setSearchValue(inputValue);
            setSearchBarResultsPages(Number(response.data.total_pages));
          });
      } catch (error) {
        console.log(error);
      }

      navigate("/search/tVShows", { replace: true });
    }
  };

  return (
    <CustomStyledSearchBarOfUserPage>
      <TextField
        placeholder="Search for movies"
        value={inputValue}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </CustomStyledSearchBarOfUserPage>
  );
}

const CustomStyledSearchBarOfUserPage = styled(Box)(({ theme }) => ({
  padding: "32px 27px",
  "& .MuiTextField-root": {
    width: "100%",
  },
  "& .MuiInputBase-root": {
    borderRadius: "20px",
    height: "42px",
    padding: "10px 14px",
    fontSize: "20px",
    color: "#8D8D8D",
    "& svg": {
      color: "#8D8D8D",
      fontSize: "24px",
    },
  },
  [theme.breakpoints.up("sm")]: {
    padding: "40px 27px",
    "& .MuiInputBase-root": {
      height: "50px",
      padding: "16px 22px",
      fontSize: "24px",
      "& svg": {
        fontSize: "30px",
      },
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "60px 87px",
    "& .MuiInputBase-root": {
      height: "54px",
      padding: "16px 32px",
      "& svg": {
        fontSize: "34px",
      },
    },
  },
}));
