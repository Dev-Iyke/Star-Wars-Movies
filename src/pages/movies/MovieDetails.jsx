import { useParams } from "react-router-dom";
import SingleMovie from "../../components/utils/SingleMovie";
import { useSelector } from "react-redux";

const MovieDetails = () => {
  const { id } = useParams();

  const movies = useSelector((state) => state.movies.movies)
  //eslint-disable-next-line
  const selectedMovie = movies.filter((movie) => movie.episode_id == id);

  const moviesOpeningCrawl = []
  movies.forEach(movie => moviesOpeningCrawl.push(movie.opening_crawl));

  return (
    <div className="more">
      <h2>See more details about the movie</h2>
      <div>
        <SingleMovie movies={selectedMovie} opening_crawl={moviesOpeningCrawl}/>
      </div>
    </div>
  );
};

export default MovieDetails;
