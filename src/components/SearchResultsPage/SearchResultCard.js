import styled from "@emotion/styled";
import { Box, CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import { BG_IMAGE_URL } from "../../app/config";

export default function SearchResultCard({ searchResult }) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  return (
    <CustomStyledSearchResultCardActionArea
      component={Box}
      bgImage={searchResult.backdrop_path}
      randomColor={randomColor}
    >
      {searchResult.backdrop_path ? (
        <img
          src={`${BG_IMAGE_URL}${searchResult.backdrop_path}`}
          alt={searchResult.original_title}
        />
      ) : (
        ""
      )}
      <CardContent>
        <Typography>{searchResult.original_title}</Typography>
      </CardContent>
    </CustomStyledSearchResultCardActionArea>
  );
}

const CustomStyledSearchResultCardActionArea = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== "bgImage" && prop !== "randomColor",
})(({ bgImage, theme, randomColor }) => ({
  height: "120px",
  width: "48.8%",
  backgroundColor: !bgImage ? `#${randomColor}` : "",
  borderRadius: "12px",
  "& img": {
    height: "100%",
    width: "100%",
    borderRadius: "12px",
  },
  "& .MuiCardContent-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    background:
      "linear-gradient(rgba(42,159,255,.2) 0%, rgba(33,33,32,1) 95%, rgba(33,33,32,1) 95%)",
    padding: "8px",
    borderRadius: "12px",
    "& .MuiTypography-root": {
      color: theme.palette.secondary.main,
      textTransform: "capitalize",
      fontWeight: 600,
      fontSize: "12px",
      lineHeight: 1.2,
      textAlign: "center",
    },
  },
  [theme.breakpoints.between("sm", "md")]: {
    height: "190px",
    "& .MuiCardContent-root": {
      "& .MuiTypography-root": {
        fontSize: "16px",
      },
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "32.5%",
    height: "160px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "24.3%",
    height: "170px",
    "& .MuiCardContent-root": {
      padding: "8px 16px",
      "& .MuiTypography-root": {
        fontSize: "14px",
      },
    },
  },
  [theme.breakpoints.up("xl")]: {
    height: "190px",
  },
}));
