import { Typography } from "@mui/material";
import { useParams } from "react-router-dom";

export default function MovieDetailsPage() {
  let { movieId } = useParams();
  // let movieDetails = localStorage.getItem("movieDetails");

  return <Typography>Hello World with {movieId}</Typography>;
}
