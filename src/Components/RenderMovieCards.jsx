import { useNavigate } from "react-router-dom";

const RenderMovieCards = ({ movies }) => {
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate("/movie-details", {
      state: { movie },
    });
  };
  return movies.map((movie) => (
    <div
      className="movie-card"
      key={movie.id}
      onClick={() => handleClick(movie)}
    >
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
