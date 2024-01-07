import { Box } from "@mui/material";
import UserPageHeroSection from "../components/UserHomePage/UserPageHeroSection";
import styled from "@emotion/styled";
import TVShowSeasonSection from "../components/DetailedTVShowInfoPage/TVShowSeasonSection";
import CastAndCrewSection from "../components/DetailedTVShowInfoPage/CastAndCrewSection";
import SimilarTVShowsSection from "../components/DetailedTVShowInfoPage/SimilarTVShowsSection";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../app/apiService";
import { API_KEY } from "../app/config";

export default function DetailedInfoPage() {
  const [tVShowDetailsLocalData, setTVShowDetailsLocalData] = useState(
    JSON.parse(localStorage.getItem("tVShowDetails"))
  );

  const { tVShowId } = useParams();

  useEffect(() => {
    const fetchedTVShowDetailsWithParameter = async () => {
      try {
        await apiService
          .get(
            `/3/tv/${tVShowId}?api_key=${API_KEY}&append_to_response=credits`
          )
          .then((response) => {
            localStorage.setItem(
              "tVShowDetails",
              JSON.stringify(response.data)
            );
            setTVShowDetailsLocalData(
              JSON.parse(localStorage.getItem("tVShowDetails"))
            );
          });
      } catch (error) {
        console.log(error);
      }
    };

    fetchedTVShowDetailsWithParameter();
  }, [tVShowId]);

  return (
    <>
      <UserPageHeroSection heroSectionData={tVShowDetailsLocalData} />
      <CustomStyledDetailedTVShowOtherInfo>
        <TVShowSeasonSection tVShowSeasonsData={tVShowDetailsLocalData} />
        <CastAndCrewSection
          castAndCrewData={tVShowDetailsLocalData.credits.cast}
        />
        <SimilarTVShowsSection similarTVShowsData={tVShowDetailsLocalData} />
      </CustomStyledDetailedTVShowOtherInfo>
    </>
  );
}

const CustomStyledDetailedTVShowOtherInfo = styled(Box)(() => ({}));
