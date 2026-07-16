import { useEffect, useState } from "react";
import "./detailfollowing.css";
import { useContext } from "react";
import githubcontext from "../../../../context/githubcontext";

function DetailFollowing({ user, fetchProfile }) {

    const [following, setFollowing] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    

    async function loadFollowing(pageNumber) {

        try {

            setLoading(true);

            const url = user.following_url.replace("{/other_user}", "");

            const {

        res,

        fetchProfile,

    } = useContext(GithubContext);

            const data = await res.json();

            if (pageNumber === 1) {
                setFollowing(data);
            } else {
                setFollowing(prev => [...prev, ...data]);
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

        setFollowing([]);
        setPage(1);
        setHasMore(true);

        loadFollowing(1);

    }, [user]);

    function handleLoadMore() {

        const next = page + 1;

        setPage(next);

        loadFollowing(next);

    }

    return (

        <div className="details">

            <div className="profile-panel">

                {following.map(person => (

                    <div
                        key={person.id}
                        className="profile-panel-item"
                        onClick={() => fetchProfile(person.login)}
                    >

                        <img
                            src={person.avatar_url}
                            alt={person.login}
                            width="60"
                        />

                        <h3>{person.login}</h3>

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

export default DetailFollowing;