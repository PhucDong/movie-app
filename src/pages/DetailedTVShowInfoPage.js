import { Box } from "@mui/material";
import UserPageHomeSection from "../components/UserHomePage/UserPageHeroSection";
import styled from "@emotion/styled";
import TVShowSeasonSection from "../components/DetailedTVShowInfoPage/TVShowSeasonSection";
import CastAndCrewSection from "../components/DetailedTVShowInfoPage/CastAndCrewSection";
import SimilarTVShowsSection from "../components/DetailedTVShowInfoPage/SimilarTVShowsSection";

export default function DetailedInfoPage() {
  return (
    <>
      <UserPageHomeSection />
      <CustomStyledDetailedTVShowOtherInfo>
        <TVShowSeasonSection />
        <CastAndCrewSection />
        <SimilarTVShowsSection />
      </CustomStyledDetailedTVShowOtherInfo>
    </>
  );
}

const CustomStyledDetailedTVShowOtherInfo = styled(Box)(() => ({}));
