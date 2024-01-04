import styled from "@emotion/styled";
import { CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import { BG_IMAGE_URL } from "../../app/config";

export default function TVShowCard({ categoryItem }) {
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);

  // console.log(9, categoryItem);

  return (
    <CustomStyledTVShowCardActionArea
      bgImage={categoryItem.backdrop_path}
      randomColor={randomColor}
    >
      {categoryItem.hasOwnProperty("original_name") ? (
        <img
          src={`${BG_IMAGE_URL}${categoryItem.backdrop_path}`}
          alt={categoryItem.original_title}
        />
      ) : (
        ""
      )}
      <CardContent>
        <Typography>
          {categoryItem.hasOwnProperty("original_name")
            ? categoryItem.original_name
            : categoryItem.name}
        </Typography>
      </CardContent>
    </CustomStyledTVShowCardActionArea>
  );
}

const CustomStyledTVShowCardActionArea = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== "bgImage" && prop !== "randomColor",
})(({ bgImage, theme, randomColor }) => ({
  display: "inline-block",
  height: "114px",
  width: "200px",
  backgroundColor: !bgImage ? `#${randomColor}` : "",
  "& img": {
    height: "100%",
    width: "100%",
  },
  "& .MuiCardContent-root": {
    display: "flex",
    justifyContent: "center",
    alignItems: bgImage ? "flex-end" : "center",
    height: "100%",
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    background:
      "linear-gradient(rgba(42,159,255,.2) 0%, rgba(33,33,32,1) 95%, rgba(33,33,32,1) 95%)",
    padding: "8px",

    "& .MuiTypography-root": {
      color: theme.palette.secondary.main,
      textTransform: "capitalize",
      fontWeight: 600,
      fontSize: "14px",
      lineHeight: 1.2,
      textAlign: "center",
    },
  },
  [theme.breakpoints.up("sm")]: {
    width: "220px",
    height: "130px",
    "& .MuiCardContent-root": {
      "& .MuiTypography-root": {
        fontSize: "16px",
      },
    },
  },
  [theme.breakpoints.up("md")]: {
    width: "240px",
    height: "150px",
  },
  [theme.breakpoints.up("lg")]: {
    width: "267px",
    height: "160px",
    "& .MuiCardContent-root": {
      padding: "8px 16px",
      "& .MuiTypography-root": {
        fontSize: "18px",
      },
    },
  },
}));
