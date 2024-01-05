import { Box } from "@mui/material";
import UserPageHeroSection from "../components/UserHomePage/UserPageHeroSection";
import styled from "@emotion/styled";
import TVShowSeasonSection from "../components/DetailedTVShowInfoPage/TVShowSeasonSection";
import CastAndCrewSection from "../components/DetailedTVShowInfoPage/CastAndCrewSection";
import SimilarTVShowsSection from "../components/DetailedTVShowInfoPage/SimilarTVShowsSection";
import { useState } from "react";

export default function DetailedInfoPage() {
  const [tVShowDetailsLocalData, setTVShowDetailsLocalData] = useState(
    JSON.parse(localStorage.getItem("tVShowDetails"))
  );

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
