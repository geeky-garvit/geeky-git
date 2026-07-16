import { useContext } from "react";
import githubcontext from "../../../context/githubcontext";
import "./detailprofile.css";

function DetailProfile() {
  const { user } = useContext(githubcontext);

  if (!user) return null;

  return (
    <div className="details">
      <div className="profile-panel">
        <div className="profile-panel-item">
          <strong>Name</strong>
          <span>{user.name}</span>
        </div>

        <div className="profile-panel-item">
          <strong>Username</strong>
          <span>{user.login}</span>
        </div>

        <div className="profile-panel-item">
          <strong>Company</strong>
          <span>{user.company || "N/A"}</span>
        </div>

        <div className="profile-panel-item">
          <strong>Location</strong>
          <span>{user.location || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default DetailProfile;