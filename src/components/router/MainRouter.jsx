import { useSelector } from "react-redux";
import MovieList from "../../pages/movies/MovieList";
import MovieDetails from "../../pages/movies/MovieDetails";
import Homepage from "../../pages/landing-page";
import AccessibleRoute from "./AccessibleRoute";
import { Routes, Route } from "react-router-dom";
import SignUp from "../../auth/components/SignUp";
const AppRouter = () => {
  const { isLoggedIn } = useSelector((store) => store.auth);
  return (
    <Routes>
      <Route
        path="/"
        element={
          <AccessibleRoute redirect="/" allow={true}>
            <Homepage />
          </AccessibleRoute>
        }
      />
      <Route
        path="/signup"
        element={
          <AccessibleRoute redirect="/" allow={true}>
            <SignUp />
          </AccessibleRoute>
        }
      />
      <Route
        path="/movies"
        element={
          <AccessibleRoute redirect="/" allow={isLoggedIn}>
            <MovieList />
          </AccessibleRoute>
        }
      />
      <Route
        path="/movies/movieDetails/:id"
        element={
          <AccessibleRoute redirect="/" allow={isLoggedIn}>
            <MovieDetails />
          </AccessibleRoute>
        }
      />
    </Routes>
  );
};

export default AppRouter;
