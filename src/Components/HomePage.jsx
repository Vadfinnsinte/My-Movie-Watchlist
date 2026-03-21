import { useEffect, useState } from "react";

import { FiInfo } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { getData, searchMovies } from "../APIs/movieApi/data";
import RenderMovieCards from "./RenderMovieCards";

const HomePage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchResults, setSearchResults] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [renderResult, setRenderReslut] = useState(false);
  const [popularMovies, setpopularMovies] = useState([]);
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query === "") {
      setSearchResults(popularMovies);
      return;
    }
    if (query.length > 1) {
      searchMovies(query, setSearchResults);
      setRenderReslut(true);
    } else {
      setSearchResults([]);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      let popularMoviesData = await getData();
      setpopularMovies(popularMoviesData.results);
      setSearchResults(popularMoviesData.results);
      setRenderReslut(true);
    };

    fetchData();
  }, []);

  return (
    <div className="homepage-layout">
      <section className="welcome-section">
        <div className="info">
          <h1>My Movie Watchlist</h1>
          <div onClick={() => setShowInfo(!showInfo)}>
            <FiInfo />
          </div>
        </div>
        {showInfo && (
          <p className="info-box">
            Here you can save the movies you want to watch, write comments on
            what made you want to watch them in the first place. If you have
            watched a movie you can leave a comment on what you thougth.
          </p>
        )}
      </section>
      <section className="search-section">
        <h2>Search for movies</h2>
        <div className="search-container">
          <IoIosSearch className="search-icon" />
          <input
            type="text"
            placeholder="search"
            onChange={handleSearch}
            value={searchQuery}
          />
        </div>
        <section className="movies-layout">
          {renderResult && <RenderMovieCards movies={searchResults} />}
        </section>
      </section>
    </div>
  );
};

export default HomePage;
