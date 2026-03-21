import { useState } from "react";
import { deleteMovie, updateMovie } from "../APIs/myMoviesAPI/watchlist";

const MovieDetailCard = ({ movies, activeTab, onDelete, onMove }) => {
  const [id, setId] = useState("");
  const [comment, setComment] = useState("");
  const [openEdit, setOpenEdit] = useState(false);
  const [title, setTitle] = useState("");
  const btnTxt = activeTab === "watchlist" ? "watched" : "watchlist";

  const handleDelete = async (id) => {
    try {
      await deleteMovie(id);
      onDelete(id);
    } catch (err) {
      console.log(err.message);
    }
  };
  const handleMove = async () => {
    const watched = activeTab === "watchlist" ? true : false;
    try {
      await updateMovie(id, comment, watched);

      await onMove();

      setOpenEdit(false);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <>
      {movies.map((movie) => (
        <div key={movie.id} className="my-movies-width">
          <div className="movie-card-watchlist">
            <img
              src={`https://image.tmdb.org/t/p/w200${movie.img}`}
              alt={movie.title}
            />
            <div className="start">
              <h1>{movie.title}</h1>
              <p>{movie.description}</p>
              <div className="no-margin">
                <p className="bold">Your Comment:</p>
                <p>{movie.comments}</p>
              </div>
              <div className="btn-container">
                <button
                  onClick={() => {
                    setId(movie.id);
                    setComment(movie.comments);
                    setTitle(movie.title);
                    setOpenEdit(true);
                  }}
                >
                  Move to {btnTxt}
                </button>
                <button className="red" onClick={() => handleDelete(movie.id)}>
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {openEdit && (
        <div className="info-box box-padding">
          <h1>{title}</h1>
          <label htmlFor="comment">Want to add/edit a comment?</label>
          <textarea
            id="comment"
            className="comment"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div className="btn-container">
            <button onClick={handleMove}>Move to {btnTxt}</button>
            <button className="red" onClick={() => setOpenEdit(false)}>
              Cancel
            </button>
          </div>
        </div>
      )}
    </>
  );
};
export default MovieDetailCard;
