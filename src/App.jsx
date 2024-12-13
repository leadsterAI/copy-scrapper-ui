// App.jsx
import React, { useState ,useEffect} from "react";
import Scraper from "./Scrapper";
import Login from "./Login";
import "./App.css";
import { auth } from "./Firebase";
import { signInWithGoogle } from "./Firebase";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogin = async () => {
    const success = await signInWithGoogle();
    const user = auth.currentUser;

    if (user) {
      // Save user in local storage and update login state
      localStorage.setItem("user", JSON.stringify(user));
      setIsLoggedIn(true);
    }
  };
  return (
    <div className="App">
      {isLoggedIn ? (
        <Scraper setIsLoggedIn={setIsLoggedIn} />
      ) : (
        <Login handleLogin={handleLogin} />
      )}
    </div>
  );
};

export default App;
