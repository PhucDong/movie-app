import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Routes,
  useParams,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import GuestHomePage from "./pages/GuestHomePage";
import UserHomePage from "./pages/UserHomePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import DetailedTVShowInfoPage from "./pages/DetailedTVShowInfoPage";
import MovieDetailsPage from "./components/MovieDetailsPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<GuestHomePage />} />
      <Route path="user" element={<UserHomePage />}>
        <Route path=":movieId" element={<MovieDetailsPage />} />
      </Route>
      <Route path="search" element={<SearchResultsPage />} />
      <Route path="detailed" element={<DetailedTVShowInfoPage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
