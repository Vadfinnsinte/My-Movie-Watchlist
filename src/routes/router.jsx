import { createHashRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../Components/HomePage";
import MyMovies from "../Components/MyMovies";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ProtectedRoute from "../Components/ProtectedRoute";
import MovieDetails from "../Components/MovieDetails";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/home",
        element: (
          <ProtectedRoute>
            <HomePage />
          </ProtectedRoute>
        ),
      },
      {
        path: "/my-movies",
        element: (
          <ProtectedRoute>
            <MyMovies />{" "}
          </ProtectedRoute>
        ),
      },
      {
        path: "/movie-details",
        element: (
          <ProtectedRoute>
            <MovieDetails />{" "}
          </ProtectedRoute>
        ),
      },
    ],
  },
]);

export { router };
