import styled from "@emotion/styled";
import { CardActionArea, CardContent, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

export default function MovieCard({ categoryItem }) {
  return (
    <CustomStyledMovieCardActionArea component={Link} bgImage={categoryItem.pathImage}>
      <CardContent>
        <Typography>
          {categoryItem.hasOwnProperty("movieName")
            ? categoryItem.movieName
            : categoryItem.genreName}
        </Typography>
      </CardContent>
    </CustomStyledMovieCardActionArea>
  );
}

const CustomStyledMovieCardActionArea = styled(CardActionArea, {
  shouldForwardProp: (prop) => prop !== "bgImage",
})(({ bgImage, theme }) => ({
  display: "inline-block",
  height: "114px",
  backgroundImage: bgImage ? `url(${bgImage})` : "",
  filter: "brightness(88%)",
  backgroundPosition: "center",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  "& .MuiCardContent-root": {
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    padding: "10px",
  },
  "& .MuiTypography-root": {
    color: theme.palette.secondary.main,
    textTransform: "capitalize",
    fontWeight: 600,
  },
}));
