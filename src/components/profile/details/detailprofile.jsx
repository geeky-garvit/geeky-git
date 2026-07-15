import "./detailprofile.css";

function DetailProfile({ user }) {
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
          <strong>Location</strong>
          <span>{user.location || "Not Available"}</span>
        </div>

        <div className="profile-panel-item">
          <strong>Company</strong>
          <span>{user.company || "Not Available"}</span>
        </div>

        <div className="profile-panel-item">
          <strong>Public Repos</strong>
          <span>{user.public_repos}</span>
        </div>

      </div>
    </div>
  );
}

export default DetailProfile;