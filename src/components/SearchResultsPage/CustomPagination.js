import styled from "@emotion/styled";
import { Pagination } from "@mui/material";

export default function CustomPagination(props) {
  const { resultPages, resultPageNumber, setSearchBarResultsPages } = props;

  return (
    <CustomStyledPagination
      count={resultPages > 500 ? 500 : resultPages}
      page={resultPageNumber}
      onChange={setSearchBarResultsPages}
    />
  );
}

export const CustomStyledPagination = styled(Pagination)(({ theme }) => ({
  width: "100%",
  marginTop: "14px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .MuiButtonBase-root": {
    padding: 0,
    margin: 0,
    "& svg": {
      fontSize: "20px",
    },
  },
  "& .MuiPaginationItem-ellipsis": {
    padding: 0,
    margin: 0,
  },
  "& .MuiPaginationItem-previousNext": {
    display: "flex",
    alignItems: "center",
    width: "100%",
    height: "100%",
  },
  "& .MuiPaginationItem-page": {
    fontSize: "14px",
    padding: "6px",
    minWidth: "28px",
    height: "28px",
    borderRadius: "50%",
  },
  [theme.breakpoints.between("sm", "md")]: {
    marginTop: "20px",
    "& .MuiButtonBase-root": {
      "& svg": {
        fontSize: "30px",
      },
    },
    "& li": {
      margin: "0 4px",
    },
    "& li:first-of-type": {
      marginRight: "8px",
      marginLeft: 0,
    },
    "& li:last-of-type": {
      marginLeft: "8px",
      marginRight: 0,
    },
    "& .MuiPaginationItem-page": {
      fontSize: "16px",
      padding: "12px",
      minWidth: "40px",
      height: "40px",
    },
  },
  [theme.breakpoints.up("md")]: {
    marginTop: "26px",
    "& .MuiButtonBase-root": {
      "& svg": {
        fontSize: "40px",
      },
    },
    "& li": {
      margin: "0 8px",
    },
    "& li:first-of-type": {
      marginLeft: 0,
    },
    "& li:last-of-type": {
      marginRight: 0,
    },
    "& .MuiPaginationItem-page": {
      fontSize: "18px",
      minWidth: "44px",
      height: "44px",
    },
  },
}));
