import GithubContext from "./githubcontext";
import useGithubUser from "../hooks/usegithubuser";

function gitprovider({ children }) {
  const github = useGithubUser();

  return (
    <GithubContext.Provider value={github}>
      {children}
    </GithubContext.Provider>
  );
}

export default gitprovider;