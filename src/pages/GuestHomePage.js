import { Box } from "@mui/material";
import DownloadSection from "../components/GuestHomePage/DownloadSection";
import FAQsSection from "../components/GuestHomePage/FAQsSection";
import HeroSection from "../components/GuestHomePage/HeroSection";
import PlatformSection from "../components/GuestHomePage/PlatformSection";
import WatchEverywhereSection from "../components/GuestHomePage/WatchEverywhereSection";

export default function GuestHomePage() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <HeroSection />
      <PlatformSection />
      <DownloadSection />
      <WatchEverywhereSection />
      <FAQsSection />
    </Box>
  );
}
