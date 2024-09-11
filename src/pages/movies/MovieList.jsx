import { signOut } from "firebase/auth";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../../auth/config";
import { logout } from "../../redux-toolkit/slices/AuthenticationSlice";
import SingleMovie from "../../components/utils/SingleMovie";
import { getMovies } from "../../redux-toolkit/slices/MoviesSlice";

// const statusTag = document.getElementById("curStatus");
const MovieList = () => {
  const movies = useSelector((state) => state.movies.movies)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const moviesOpeningCrawl = movies.map(movie => {
    return movie.opening_crawl.substring(0, 200) + "..."
  });
  useEffect(() =>{
    dispatch(getMovies())
  }, [dispatch])
  const { userEmail } = useSelector((store) => store.auth);




  const handleLogout = () => {
    signOut(auth).then(() => {
      dispatch(logout());
      navigate("/");
    });
  };

  return (
    <div className="movies-container">
      <div className="container">
        <div className="profile">
          <h2>Movies List</h2>
          <div className="user">
            <p>{userEmail}</p>
            <button onClick={handleLogout}>Log out</button>
          </div>
        </div>
        <p id="curStatus"></p>
        <div>
          {movies.length > 0 ? <SingleMovie movies={movies} opening_crawl={moviesOpeningCrawl}/> : <p>Loading your favorite movies...</p>}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
