import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Profile from "./components/profile";
import "./App.css";

function App() {
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  async function fetchProfile(username) {
    try {
      setError("");

      const response = await fetch(
        `https://api.github.com/users/${username}`
      );

      const data = await response.json();

      if (response.status === 403) {
        setError(
          "GitHub API rate limit exceeded. Please try again later."
        );
        setUser(null);
        return;
      }

      if (data.message === "Not Found") {
        setError("User not found");
        setUser(null);
        return;
      }

      setUser(data);
    } catch (error) {
      setError(
        "Something went wrong. Please check your internet connection."
      );
      setUser(null);
      console.log(error);
    }
  }

  return (
    <>
      <h1 className="h1">Geeky Git</h1>

      <Navbar onSearch={fetchProfile} />

      {error && <p className="error">{error}</p>}

     <Profile
    user={user}
    fetchProfile={fetchProfile}
/>
    </>
  );
}

export default App;