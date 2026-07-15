import { useState } from "react";
import Navbar from "./components/navbar/Navbar.jsx";
import Profile from "./components/profile";
import "./App.css";
import CompareModal from "./components/CompareModal";
import usegithubUser from "./hooks/useGithubUser";

function App() {
  const {

    user,

    compareUser,

    showCompare,

    error,

    compareError,

    fetchProfile,

    fetchCompareProfile,

    setShowCompare,

} = useGithubUser();
  return (
    <>
      <h1 className="h1">Geeky Git</h1>

      <Navbar onSearch={fetchProfile} onCompare={fetchCompareProfile} />

      {error && <p className="error">{error}</p>}

      {compareError && <p className="error">{compareError}</p>}

      <div className="profiles">
        <Profile user={user} fetchProfile={fetchProfile} />

        {showCompare && compareUser && (
          <CompareModal
            user1={user}
            user2={compareUser}
            onClose={() => setShowCompare(false)}
          />
        )}
      </div>
    </>
  );
}

export default App;
