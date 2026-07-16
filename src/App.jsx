import { useContext } from "react";
import githubcontext from "./context/githubcontext";

import Navbar from "./components/navbar/navbar";
import Profile from "./components/profile/profile";
import CompareModal from "./components/compareform/CompareModal";
import "./App.css";

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
  } = useContext(githubcontext);

  return (
    <>
      <h1 className="h1">Geeky Git</h1>

      <Navbar
        onSearch={fetchProfile}
        onCompare={fetchCompareProfile}
      />

      {error && <p className="error">{error}</p>}

      {compareError && <p className="error">{compareError}</p>}

      <div className="profiles">
        <Profile />

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