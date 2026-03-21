import { Outlet, useNavigate } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header";
import { useEffect, useState } from "react";
import { getToken } from "./functions/helpers/tokens";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();
  const handleRedirection = () => {
    navigate("/");
    setShowPopup(false);
  };
  useEffect(() => {
    const token = getToken();
    if (!token) {
      setIsAuthenticated(false);

      return;
    }

    const payload = JSON.parse(atob(token.split(".")[1]));
    const exp = payload.exp * 1000;
    if (Date.now() >= exp) {
      localStorage.removeItem("token");
      setIsAuthenticated(false);
      setShowPopup(true);
    } else {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <>
      <Header />
      {showPopup && (
        <div className="info-box">
          <p>Session expired, please sign in</p>
          <button onClick={handleRedirection}>Go to sign in</button>
        </div>
      )}
      <div className={showPopup ? "blurred" : ""}>
        <Outlet />
      </div>
    </>
  );
}

export default App;
