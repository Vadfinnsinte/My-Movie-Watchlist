import { useState } from "react";
import "../style/homepage.css";
import { FiInfo } from "react-icons/fi";
import { IoIosSearch } from "react-icons/io";
import { searchMovies } from "../APIs/movieApi/data";
import RenderMovieCards from "./RenderMovieCards";
const HomePage = () => {
  const [showInfo, setShowInfo] = useState(false);
  const [searchResults, setSearchResults] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [renderResult, setRenderReslut] = useState(false);

  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 1) {
      searchMovies(query, setSearchResults);
      setRenderReslut(true);
      console.log(searchResults);
    } else {
      setSearchResults([]);
    }
  };
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
          {/* add consitional that renders creator choise, active search or recently searched movies(use local to save and fetch id or save full titles). */}
        </section>
      </section>
    </div>
  );
};

export default HomePage;
