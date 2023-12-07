import { Box, InputAdornment, TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";

export default function UserPageSearchBar() {
  return (
    <CustomStyledSearchBarOfUserPage>
      <TextField
        placeholder="Search for movies"
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

const CustomStyledSearchBarOfUserPage = styled(Box)(() => ({
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
}));
