import styled from "@emotion/styled";
import { Box} from "@mui/material";
import { Outlet } from "react-router-dom";

export default function SearchResultsPageLayout() {
  return (
    <CustomStyledResultsContainer>
      <Outlet />
    </CustomStyledResultsContainer>
  );
}

const CustomStyledResultsContainer = styled(Box)(({ theme }) => ({
  marginBottom: "32px",
  "& .search-results_heading": {
    fontSize: "18px",
    color: theme.palette.info.main,
    fontWeight: 600,
    marginBottom: "10px",
  },
  [theme.breakpoints.up("md")]: {
    "& .search-results_heading": {
      fontSize: "24px",
    },
  },
}));
