import { Box, Card, Tab, Tabs, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
// import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import { useNavigate } from "react-router-dom";
import TVShowCard from "./TVShowCard";
import apiService from "../../app/apiService";
import { API_KEY } from "../../app/config";
import CustomPagination from "../SearchResultsPage/CustomPagination";

export default function UserPageMovieCategory(props) {
  const { tVShowCategory, tVShowCategoryId } = props;
  const [value, setValue] = useState(0);
  const navigate = useNavigate();
  const [tVShowCategoryPageNumber, setTVShowCategoryPageNumber] = useState(1);
  const [tVShowCategoryPages, setTVShowCategoryPages] = useState(0);
  const [showsData, setShowsData] = useState([]);

  const handleChangeTab = (event, newValue) => {
    setValue(newValue);
  };

  const handleSaveTVShowDetails = async (
    categoryItemId,
    categoryHeading,
    tVShowGenreTitle
  ) => {
    try {
      await apiService
        .get(
          categoryHeading === "Browse by Genres"
            ? `3/discover/tv?api_key=${API_KEY}&with_genres=${categoryItemId}&page=1`
            : `/3/tv/${categoryItemId}?api_key=${API_KEY}&append_to_response=credits`
        )

        .then((response) =>
          categoryHeading === "Browse by Genres"
            ? (localStorage.setItem(
                "genreTVShows",
                JSON.stringify(response.data.results)
              ),
              localStorage.setItem("tVShowGenreTitle", tVShowGenreTitle),
              localStorage.setItem("tVShowGenreId", categoryItemId),
              localStorage.setItem("totalPages", response.data.total_pages))
            : localStorage.setItem(
                "tVShowDetails",
                JSON.stringify(response.data)
              )
        );
    } catch (error) {
      console.log(error);
    }
    navigate(
      categoryHeading === "Browse by Genres"
        ? `/search/tVShowGenres/${categoryItemId}`
        : `/browse/tVShows/${categoryItemId}`
    );
  };

  const handleChangeTVShowCategoryPagination = (event, newValue) => {
    setTVShowCategoryPageNumber(newValue);
  };

  useEffect(() => {
    const fetchedShowsData = async () => {
      try {
        await apiService
          .get(
            tVShowCategory.heading === "Browse by Genres"
              ? `/3/genre/tv/list?api_key=${API_KEY}`
              : tVShowCategory.heading === "Top TV Shows"
              ? `/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${tVShowCategoryPageNumber}`
              : `/3/discover/tv?api_key=${API_KEY}&with_genres=${tVShowCategoryId}&page=${tVShowCategoryPageNumber}`
          )
          .then((response) =>
            tVShowCategory.heading !== "Browse by Genres"
              ? (setTVShowCategoryPages(response.data.total_pages),
                setShowsData([...response.data.results]))
              : setShowsData([...response.data.genres])
          );
      } catch (error) {
        console.log(error);
      }
    };

    fetchedShowsData();
  }, [tVShowCategoryPageNumber, tVShowCategoryId, tVShowCategory.heading]);

  return (
    <CustomStyledMovieCategorySection
      headingTextColor={tVShowCategory.headingTextColor}
      bgColor={tVShowCategory.bgColor}
    >
      <Box className="movie-category_heading-section">
        <Typography variant="h4">{tVShowCategory.heading}</Typography>
        {/* <ArrowForwardIosRoundedIcon /> */}
      </Box>
      <Tabs
        value={value}
        onChange={handleChangeTab}
        variant="scrollable"
        scrollButtons={false}
        allowScrollButtonsMobile
      >
        {showsData.map((categoryItem, index) => (
          <Tab
            key={index}
            component={Card}
            onClick={() =>
              handleSaveTVShowDetails(
                categoryItem.id,
                tVShowCategory.heading,
                categoryItem.name
              )
            }
            label={<TVShowCard categoryItem={categoryItem} />}
          />
        ))}
      </Tabs>

      {tVShowCategory.heading !== "Browse by Genres" ? (
        <CustomPagination
          resultPages={tVShowCategoryPages}
          resultPageNumber={tVShowCategoryPageNumber}
          setSearchBarResultsPages={handleChangeTVShowCategoryPagination}
        />
      ) : (
        ""
      )}
    </CustomStyledMovieCategorySection>
  );
}

const CustomStyledMovieCategorySection = styled(Box, {
  shouldForwardProp: (prop) =>
    prop !== "headingTextColor" && prop !== "bgColor",
})(({ headingTextColor, bgColor, theme }) => ({
  padding: "22px 27px 14px 27px",
  backgroundColor:
    bgColor === "primary"
      ? theme.palette.primary.main
      : theme.palette.secondary.main,
  "& .movie-category_heading-section": {
    display: "flex",
    alignItems: "center",
    gap: "4px",
    marginBottom: "10px",
    "& svg": {
      color: theme.palette.secondary.main,
      width: "22px",
      height: "20px",
    },
  },
  "& .MuiTabs-indicator": {
    display: "none",
  },
  "& h4": {
    fontSize: "18px",
    fontWeight: 700,
    color:
      headingTextColor === "secondary"
        ? theme.palette.secondary.main
        : theme.palette.info.main,
  },
  "& .MuiTab-root": {
    padding: 0,
    height: "100%",
    borderRadius: "12px",
  },
  "& .MuiTabs-flexContainer": {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  [theme.breakpoints.up("sm")]: {
    padding: "34px 27px 20px 27px",
    "& h4": {
      fontSize: "20px",
    },
  },
  [theme.breakpoints.up("md")]: {
    padding: "44px 87px 28px 87px",
  },
  [theme.breakpoints.up("lg")]: {
    padding: "50px 87px 32px 87px",
  },
}));

// export const CustomStylePagination = styled(Pagination)(({ theme }) => ({
//   width: "100%",
//   marginTop: "14px",
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   "& .MuiButtonBase-root": {
//     padding: 0,
//     margin: 0,
//     "& svg": {
//       fontSize: "20px",
//     },
//   },
//   "& .MuiPaginationItem-ellipsis": {
//     padding: 0,
//     margin: 0,
//   },
//   "& .MuiPaginationItem-previousNext": {
//     display: "flex",
//     alignItems: "center",
//     width: "100%",
//     height: "100%",
//   },
//   "& .MuiPaginationItem-page": {
//     fontSize: "14px",
//     padding: "6px",
//     minWidth: "28px",
//     height: "28px",
//     borderRadius: "50%",
//   },
//   [theme.breakpoints.between("sm", "md")]: {
//     marginTop: "20px",
//     "& .MuiButtonBase-root": {
//       "& svg": {
//         fontSize: "30px",
//       },
//     },
//     "& li": {
//       margin: "0 4px",
//     },
//     "& li:first-of-type": {
//       marginRight: "8px",
//       marginLeft: 0,
//     },
//     "& li:last-of-type": {
//       marginLeft: "8px",
//       marginRight: 0,
//     },
//     "& .MuiPaginationItem-page": {
//       fontSize: "16px",
//       padding: "12px",
//       minWidth: "40px",
//       height: "40px",
//     },
//   },
//   [theme.breakpoints.up("md")]: {
//     marginTop: "26px",
//     "& .MuiButtonBase-root": {
//       "& svg": {
//         fontSize: "40px",
//       },
//     },
//     "& li": {
//       margin: "0 8px",
//     },
//     "& li:first-of-type": {
//       marginLeft: 0,
//     },
//     "& li:last-of-type": {
//       marginRight: 0,
//     },
//     "& .MuiPaginationItem-page": {
//       fontSize: "18px",
//       minWidth: "44px",
//       height: "44px",
//     },
//   },
// }));
