import { Link } from "react-router-dom";

const SingleMovie = (props) => {
    const movies = props.movies;
    const opening_crawl = props.opening_crawl;
    return ( 
        <div className="movie-list">
          {movies.map((movie, index) => {
            const movieBg = [
              "url(/imgs/hope.jpeg)",
              "url(/imgs/strikes.jpeg)",
              "url(/imgs/jedire.jpeg)",
              "url(/imgs/menace.jpeg)",
              "url(/imgs/clones.jpeg)",
              "url(/imgs/sith.jpeg)",
            ];
            return (
              <div
                style={{ backgroundImage: movieBg[index] }}
                className="movie"
                key={index}
              >
                <div className="movie-details">
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                </div>
                <p>{opening_crawl[index]}</p>
                <hr size="3" color="gold" />
                <button>
                  <Link to={`movieDetails/${movie.episode_id}`}>More info</Link>
                </button>
              </div>
            );
          })}
        </div>
     );
}
 
export default SingleMovie;