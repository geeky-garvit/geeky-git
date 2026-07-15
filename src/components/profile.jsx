import { useState } from "react";
import "./profile.css";
import DetailProfile from "./detailprofile";
import Detailfollow from "./detailfollow";
import Detailfollowing from "./detailfollowing";
import Detailrepo from "./detailrepo";

function Profile({ user, fetchProfile }){
  const [activeTab, setActiveTab] = useState("");

  if (!user) return null;

  return (
    <div className="content">
      <div className="user">
        <div className="user-card">
          <div className="user-card-landscape">
            <img src={user.avatar_url} alt={user.login} />

            <h2>{user.name}</h2>

            <p>{user.bio ?? "No Bio"}</p>
          </div>

          <div className="user-card-main">
            <div className="user-card-header">
              <div>
                <h2>{user.name}</h2>

                <p>
                  {user.bio ? user.bio : "No Bio"}
                </p>
              </div>

              <span className="user-badge">
                {user.blog}
              </span>
            </div>

            <div className="user-stats">
              <button onClick={() => setActiveTab("profile")}>
    Profile
</button>

              <button onClick={() => setActiveTab("followers")}>
    Followers
</button>

              <button onClick={() => setActiveTab("following")}>
    Following
</button>

              <button onClick={() => setActiveTab("repos")}>
    Repositories
</button>
            </div>
            </div>
            </div>
            </div>



          <div className="info">

    {activeTab === "profile" && (
        <DetailProfile user={user} />
    )}

    {activeTab === "followers" && (
       <Detailfollow
    user={user}
    fetchProfile={fetchProfile}
/>
    )}

    {activeTab === "following" && (
        <Detailfollowing user={user} />
    )}

    {activeTab === "repos" && (
        <Detailrepo user={user} />
    )}

</div>
          </div>
        

        
      
     
   
  );
}

export default Profile;