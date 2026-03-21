import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  addToWatchlist,
  getUserWatchlist,
} from "../APIs/myMoviesAPI/watchlist";

const MovieDetails = () => {
  const [comments, setComments] = useState("");
  const [watched, setWatched] = useState(false);
  const [buttonTxt, setButtonTxt] = useState("Add to watchlist");
  const [adding, setAdding] = useState(false);
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) return <p>No movie data</p>;

  // add box that something went WrongLocation, add delay and go back to movies
  useEffect(() => {
    const fetchData = async () => {
      try {
        let inWatchlist = await getUserWatchlist();
        let exist = inWatchlist.some((m) => m.tmdbMovieID === movie.id);
        setAdding(exist);
        if (exist) {
          setButtonTxt("in watchlist");
        } else {
          setButtonTxt("Add to watchlist");
        }
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);
  const handleAddMovie = async () => {
    setAdding(true);
    setButtonTxt("Adding...");
    try {
      await addToWatchlist(
        movie.title,
        movie.poster_path,
        movie.overview,
        movie.id,
        comments,
        watched,
      );

      setButtonTxt("in watchlist");
    } catch (err) {
      console.log(err.message);
    }
  };

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

          <textarea
            placeholder="personal comments"
            className="big-input"
            value={comments}
            onChange={(e) => setComments(e.target.value)}
          />

          <div className="check-btn">
            <div className="check">
              <label htmlFor="watchedMovie">Watched</label>
              <input
                id="watchedMovie"
                type="checkbox"
                value={watched}
                onChange={() => setWatched(!watched)}
              />
            </div>
            <button
              className={`btn ${adding ? "btn-disabled" : ""}`}
              disabled={adding}
              onClick={handleAddMovie}
            >
              {buttonTxt}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
