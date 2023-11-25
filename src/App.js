import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import GuestHomePage from "./pages/GuestHomePage";
import UserHomePage from "./pages/UserHomePage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<GuestHomePage />} />
      <Route path="user" element={<UserHomePage />} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
