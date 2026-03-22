import { useEffect, useState } from "react";

import { getUserWatchlist } from "../APIs/myMoviesAPI/watchlist";
import MovieDetailCard from "./MovieDetailCard";

const MyMovies = () => {
  const [activeTab, setActiveTab] = useState("watchlist");
  const [watchlistMovies, setWachtlistMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);

  const getData = async () => {
    try {
      let inWatchlist = await getUserWatchlist();

      setWatchedMovies(inWatchlist.filter((m) => m.watched));
      setWachtlistMovies(inWatchlist.filter((m) => !m.watched));
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };

    fetchData();
  }, []);

  const handleRemoveMovie = (id) => {
    setWachtlistMovies((prev) => prev.filter((m) => m.id !== id));
    setWatchedMovies((prev) => prev.filter((m) => m.id !== id));
  };
  const handleMoveMovie = async () => {
    await getData();
  };

  return (
    <>
      <div className="my-move-layout">
        <div>
          <h1>My movies</h1>

          <div className="tabs">
            <div
              className={`tab ${activeTab === "watchlist" ? "active" : ""}`}
              onClick={() => setActiveTab("watchlist")}
            >
              <p>Watchlist</p>
            </div>
            <div
              className={`tab ${activeTab === "watched" ? "active" : ""}`}
              onClick={() => setActiveTab("watched")}
            >
              <p>Watched</p>
            </div>
          </div>
          <div className="movies-layout-watchlist">
            {activeTab === "watchlist" ? (
              <MovieDetailCard
                movies={watchlistMovies}
                activeTab={activeTab}
                onDelete={handleRemoveMovie}
                onMove={handleMoveMovie}
              />
            ) : (
              <MovieDetailCard
                movies={watchedMovies}
                activeTab={activeTab}
                onDelete={handleRemoveMovie}
                onMove={handleMoveMovie}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default MyMovies;
