import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";

function App() {
  return (
    <>
      <Header />
      <div>
        <img
          src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg"
          alt="TMDB Logo"
          height="10"
        />
        <span className="small">
          Data & images provided by The Movie Database (TMDB)
        </span>
      </div>
      <Outlet />
    </>
  );
}

export default App;
