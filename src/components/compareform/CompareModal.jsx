import "./CompareModal.css";

function CompareModal({ user1, user2, onClose }) {
  return (
    <div className="overlay">
      <div className="compare-modal">
        <button className="close-btn" onClick={onClose}>
          *
        </button>

        <h2>GitHub User Comparison</h2>

        <div className="compare-grid">
          <div className="user-box">
            <img src={user1.avatar_url} alt={user1.login} />

            <h3>{user1.name}</h3>

            <p>@{user1.login}</p>

            <p>Followers : {user1.followers}</p>

            <p>Following : {user1.following}</p>

            <p>Repositories : {user1.public_repos}</p>

            <p>Company : {user1.company || "N/A"}</p>

            <p>Location : {user1.location || "N/A"}</p>

            <p>Blog : {user1.blog || "N/A"}</p>
          </div>

          <div className="vs">VS</div>

          <div className="user-box">
            <img src={user2.avatar_url} alt={user2.login} />

            <h3>{user2.name}</h3>

            <p>@{user2.login}</p>

            <p>Followers : {user2.followers}</p>

            <p>Following : {user2.following}</p>

            <p>Repositories : {user2.public_repos}</p>

            <p>Company : {user2.company || "N/A"}</p>

            <p>Location : {user2.location || "N/A"}</p>

            <p>Blog : {user2.blog || "N/A"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompareModal;
