import { useEffect, useState, useContext } from "react";
import "./detailfollow.css";
import githubcontext from "../../../../context/githubcontext";

function DetailFollow() {
  const { user, fetchProfile } = useContext(githubcontext);

  const [followers, setFollowers] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  async function loadFollowers(pageNumber) {
    try {
      setLoading(true);

      const res = await fetch(
        `${user.followers_url}?per_page=30&page=${pageNumber}`,
      );

      const data = await res.json();

      if (pageNumber === 1) {
        setFollowers(data);
      } else {
        setFollowers((prev) => [...prev, ...data]);
      }

      if (data.length < 30) {
        setHasMore(false);
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (!user) return;

    setFollowers([]);
    setPage(1);
    setHasMore(true);

    loadFollowers(1);
  }, [user]);

  function handleLoadMore() {
    const nextPage = page + 1;

    setPage(nextPage);

    loadFollowers(nextPage);
  }

  return (
    <div className="details">
      <div className="profile-panel">
        {followers.map((follower) => (
          <div
            key={follower.id}
            className="profile-panel-item"
            onClick={() => fetchProfile(follower.login)}
          >
            <img
              src={follower.avatar_url}
              alt={follower.login}
              width="60"
            />

            <h3>{follower.login}</h3>
          </div>
        ))}
      </div>

      {loading && <h2>Loading...</h2>}

      {!loading && hasMore && (
        <button
          className="load-more"
          onClick={handleLoadMore}
        >
          Load More
        </button>
      )}
    </div>
  );
}

export default DetailFollow;