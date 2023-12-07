import UserPageAdventureAnimeData from "./UserPageAdventureAnimeData";
import UserPageBrowseByGenreData from "./UserPageBrowseByGenreData";
import UserPageKDramasData from "./UserPageKDramasData";
import UserPageTopMoviesData from "./UserPageTopMoviesData";

const MovieCategoryData = [
  {
    heading: "Top Movies",
    headingTextColor: "secondary",
    bgColor: "primary",
    categoryItemsList: UserPageTopMoviesData,
  },
  {
    heading: "Browse by Genre",
    headingTextColor: "info",
    bgColor: "secondary",
    categoryItemsList: UserPageBrowseByGenreData,
  },
  {
    heading: "Adventure Anime",
    headingTextColor: "secondary",
    bgColor: "primary",
    categoryItemsList: UserPageAdventureAnimeData,
  },
  {
    heading: "K-Dramas",
    headingTextColor: "info",
    bgColor: "secondary",
    categoryItemsList: UserPageKDramasData,
  },
];

export default MovieCategoryData;
