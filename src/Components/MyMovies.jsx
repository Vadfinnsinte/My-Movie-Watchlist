import { useState } from "react";

const MyMovies = () => {
  const [activeTab, setActiveTab] = useState("watchlist");
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
        </div>
      </div>
    </>
  );
};

export default MyMovies;
