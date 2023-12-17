import { createBrowserRouter } from "react-router-dom";
import AuthLayout from "../components/AuthLayout";
import TestHOC from "../pages/test/TestHOC";
import Dashboard from "../pages/Dasboard";
import Details from "../pages/test/Details";
import { TestBuid } from "../pages/test/TestBuild";
import Genre from "../pages/genre";
import MovieDetail from "../pages/test/GenreDetails";
export const mainRouter = createBrowserRouter([
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "/",
        element: <Dashboard icon={undefined} />,
      },
      {
        path: "/test",
        element: <TestHOC />,
      },
      {
        path: "/test/:id",
        element: <Details />,
      },
      {
        path: "/testing",
        element: <TestBuid />,
      },
      {
        path: "/genre",
        element: <Genre />,
      },
    ],
  },
  {
    path: "/genre/:id",
    element: <MovieDetail />,
  },
]);
