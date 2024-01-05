import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import GuestHomePage from "./pages/GuestHomePage";
import UserHomePage from "./pages/UserHomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import DetailedTVShowInfoPage from "./pages/DetailedTVShowInfoPage";
import ScrollToTopLayout from "./layouts/ScrollToTopLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<ScrollToTopLayout />}>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<GuestHomePage />} />
        <Route path="user" element={<UserHomePage />} />
        <Route path="user/:tVShowId" element={<DetailedTVShowInfoPage />} />
        <Route path="search" element={<SearchResultsPage />} />
        <Route path="search/:resultId" element={<SearchResultsPage />} />
        <Route path="detailed" element={<DetailedTVShowInfoPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
