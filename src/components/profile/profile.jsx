import { useContext, useState } from "react";
import GithubContext from "../../context/githubcontext.jsx";
import DetailProfile from "./details/detailprofile";
import Detailfollow from "./details/follow/detailfollow";
import Detailfollowing from "./details/following/detailfollowing";
import Detailrepo from "./details/repo/detailrepo";
import "./profile.css";

function profile() {

    const { user, fetchProfile } = useContext(GithubContext);

    const [activeTab, setActiveTab] = useState("profile");

    if (!user) return null;

  const tabs = [
    {
      key: "profile",
      label: "Profile",
    },
    {
      key: "followers",
      label: `Followers (${user.followers})`,
    },
    {
      key: "following",
      label: `Following (${user.following})`,
    },
    {
      key: "repos",
      label: `Repositories (${user.public_repos})`,
    },
  ];

  return (
    <div className="content">
      <div className="user">
        <div className="user-card">
          <div className="user-card-landscape">
            <img src={user.avatar_url} alt={user.login} />

            <h2>{user.name || user.login}</h2>

            <p>{user.bio || "No Bio Available"}</p>
          </div>

          <div className="user-card-main">
            <div className="user-card-header">
              <div>
                <h2>{user.name || user.login}</h2>

                <p>{user.bio || "No Bio Available"}</p>
              </div>

              {user.blog && (
                <a
                  href={user.blog}
                  target="_blank"
                  rel="noreferrer"
                  className="user-badge"
                >
                  Website
                </a>
              )}
              
            </div>

            

            <div className="user-stats">
              {tabs.map((tab) => (
                <button
                  key={tab.key}
                  className={
                    activeTab === tab.key
                      ? "tab-btn active"
                      : "tab-btn"
                  }
                  onClick={() => setActiveTab(tab.key)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>


      <div className="info">
        {activeTab === "profile" && (
          <DetailProfile  />
        )}

        {activeTab === "followers" && (
          <Detailfollow
            
          />
        )}

        {activeTab === "following" && (
          <Detailfollowing
            
          />
        )}

        {activeTab === "repos" && (
          <Detailrepo user={user} />
        )}
      </div>
    </div>
  );
}

export default profile;