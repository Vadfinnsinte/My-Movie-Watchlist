import { useEffect, useState } from "react";
import Watchlist from "./Watchlist";
import Watched from "./Watched";
import { getUserWatchlist } from "../APIs/myMoviesAPI/watchlist";
import MovieDetailCard from "./MovieDetailCard";

const MyMovies = () => {
  const [activeTab, setActiveTab] = useState("watchlist");
  const [watchlistMovies, setWachtlistMovies] = useState([]);
  const [watchedMovies, setWatchedMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let inWatchlist = await getUserWatchlist();
        console.log(typeof inWatchlist[0].watched);

        setWatchedMovies(inWatchlist.filter((m) => m.watched));
        setWachtlistMovies(inWatchlist.filter((m) => !m.watched));
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, []);
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
          {activeTab === "watchlist" ? (
            <MovieDetailCard movies={watchlistMovies} />
          ) : (
            <MovieDetailCard movies={watchedMovies} />
          )}
        </div>
      </div>
    </>
  );
};

export default MyMovies;
