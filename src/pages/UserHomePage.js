import { Box } from "@mui/material";
import UserPageHomeSection from "../components/UserHomePage/UserPageHomeSection";
import UserPageSearchBar from "../components/UserHomePage/UserPageSearchBar";
import MovieCategoryData from "../components/UserHomePage/FakeData/MovieCategoryData";
import UserPageMovieCategory from "../components/UserHomePage/UserPageMovieCategory";

export default function UserHomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <UserPageHomeSection />
      <UserPageSearchBar />
      {MovieCategoryData.map((movieCategory, index) => (
        <UserPageMovieCategory key={index} movieCategory={movieCategory} />
      ))}
    </Box>
  );
}
