import { useLocation } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();
  const movie = location.state?.movie;
  console.log(movie);

  if (!movie) return <p>No movie data</p>;

  return (
    <div className="movie-details-layout">
      <div className="movie-details-card">
        <div>
          <h1>{movie.title}</h1>
          <p>{movie.release_date}</p>
        </div>
        <p>{movie.overview}</p>
        <div className="img-input">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
            alt={movie.title}
          />

          <textarea placeholder="personal comments" className="big-input" />

          <div className="check-btn">
            <div className="check">
              <label>Watched</label>
              <input type="checkbox" />
            </div>
            <button>Add to watchlist</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
