import styled from "@emotion/styled";
import { Box, List, ListItem, Typography } from "@mui/material";

export default function UnavailableSearchResult({ searchValue }) {
  return (
    <CustomStyledNoSearchResultContainer>
      <Typography className="no-search-result_heading">
        We are sorry. We could not find a match for "{searchValue}"
      </Typography>

      <Typography className="no-search-result_sub-heading">
        Suggestions:
      </Typography>
      <List>
        <ListItem>Check for typos and spelling errors</ListItem>
        <ListItem>Try another search in the search bar above</ListItem>
        <ListItem>Try more general keywords</ListItem>
        <ListItem>Try different keywords</ListItem>
      </List>
    </CustomStyledNoSearchResultContainer>
  );
}

const CustomStyledNoSearchResultContainer = styled(Box)(({theme}) => ({
  color: theme.palette.info.main,
  "& .no-search-result_heading": {
    fontWeight: 600,
    fontSize: 20,
    lineHeight: "normal",
    marginBottom: "23px",
  },
  "& .no-search-result_sub-heading": {
    fontSize: 18,
    marginBottom: "6px",
  },
  "& .MuiList-root": {
    listStyleType: "disc",
    padding: "0 0 0 20px",
    "& .MuiListItem-root": {
      display: "list-item",
      padding: "2px 0",
    },
  },
  [theme.breakpoints.up("sm")]: {
    "& .no-search-result_heading": {
      fontSize: "26px",
    },
    "& .no-search-result_sub-heading": {
      fontSize: "20px",
    },
    "& .MuiList-root": {
      "& .MuiListItem-root": {
        fontSize: "18px"
      },
    },
  }
}));
