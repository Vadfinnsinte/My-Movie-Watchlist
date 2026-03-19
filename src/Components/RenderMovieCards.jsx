const RenderMovieCards = ({ movies }) => {
  return movies.map((movie) => (
    <div className="movie-card" key={movie.id}>
      <p className="movie-card-title">{movie.title}</p>
      <img
        src={
          movie.poster_path
            ? `https://image.tmdb.org/t/p/w200${movie.poster_path}`
            : "/placeholder.png"
        }
        alt={movie.title}
      />
    </div>
  ));
};

export default RenderMovieCards;
