import { Box } from "@mui/material";
import UserPageHeroSection from "../components/UserHomePage/UserPageHeroSection";
import styled from "@emotion/styled";
import TVShowSeasonSection from "../components/DetailedTVShowInfoPage/TVShowSeasonSection";
import CastAndCrewSection from "../components/DetailedTVShowInfoPage/CastAndCrewSection";
import SimilarTVShowsSection from "../components/DetailedTVShowInfoPage/SimilarTVShowsSection";
import { useEffect, useState } from "react";

export default function DetailedInfoPage() {
  let tVShowDetailsLocalData = JSON.parse(
    localStorage.getItem("tvShowDetails")
  );
  console.log(13, tVShowDetailsLocalData);

  return (
    <>
      <UserPageHeroSection heroSectionData={tVShowDetailsLocalData} />
      <CustomStyledDetailedTVShowOtherInfo>
        <TVShowSeasonSection />
        <CastAndCrewSection />
        <SimilarTVShowsSection />
      </CustomStyledDetailedTVShowOtherInfo>
    </>
  );
}

const CustomStyledDetailedTVShowOtherInfo = styled(Box)(() => ({}));
