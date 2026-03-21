const MovieDetailCard = ({ movies }) => {
  return movies.map((movie) => (
    <div className="movie-details-layout">
      <div className="movie-details-card">
        <div>
          <h1>{movie.title}</h1>
        </div>
        <p>{movie.overview}</p>
        <div className="img-input">
          <img
            src={`https://image.tmdb.org/t/p/w300${movie.img}`}
            alt={movie.title}
          />

          <textarea
            placeholder="personal comments"
            className="big-input"
            value={movie.comments}
            // onChange={(e) => setComments(e.target.value)}
          />

          <div className="check-btn">
            <div className="check">
              <label htmlFor="watchedMovie">Watched</label>
              <input
                id="watchedMovie"
                type="checkbox"
                // value={watched}
                // onChange={() => setWatched(!watched)}
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
  ));
};
export default MovieDetailCard;
