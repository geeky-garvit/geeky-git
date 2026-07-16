import { useEffect, useState } from "react";
import "./detailrepo.css";
import githubcontext from "../../../../context/githubcontext";

function DetailRepo({ user }) {

    const [repos, setRepos] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    async function loadRepos(pageNumber) {

        try {

            setLoading(true);

            const res = await fetch(
                `${user.repos_url}?page=${pageNumber}&per_page=20&sort=updated`
            );

            const data = await res.json();

            if (pageNumber === 1) {
                setRepos(data);
            } else {
                setRepos(prev => [...prev, ...data]);
            }

            if (data.length < 20) {
                setHasMore(false);
            }

        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {

        setRepos([]);
        setPage(1);
        setHasMore(true);

        loadRepos(1);

    }, [user]);

    function handleLoadMore() {

        const next = page + 1;

        setPage(next);

        loadRepos(next);

    }

    return (

        <div className="details">

            <div className="profile-panel">

                {repos.map(repo => (

                    <div
                        key={repo.id}
                        className="profile-panel-item"
                    >

                        <h3>{repo.name}</h3>

                        <p>{repo.description || "No description"}</p>

                        <p>⭐ {repo.stargazers_count}</p>

                        <p>🍴 {repo.forks_count}</p>

                        <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noreferrer"
                        >
                            Open Repository
                        </a>

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

export default DetailRepo;