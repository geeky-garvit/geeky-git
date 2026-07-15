import { useState } from "react";
import { getUser } from "../services/githubapi";

export default function useGithubUser() {

    const [user, setUser] = useState(null);

    const [compareUser, setCompareUser] = useState(null);

    const [showCompare, setShowCompare] = useState(false);

    const [error, setError] = useState("");

    const [compareError, setCompareError] = useState("");

}
async function fetchProfile(username) {

    try {

        setError("");
        setCompareError("");

        const data = await getUser(username);

        setUser(data);

        setCompareUser(null);

        setShowCompare(false);

    }
    catch(err){

        setError(err.message);

        setUser(null);

    }

}

  async function fetchCompareProfile(username) {
    if (!user) {
    

    try {
      setCompareError("");

      const data = await getUser(username);
      

      setCompareUser(data);
      setShowCompare(true);
    } catch (err) {
      setCompareError("Unable to fetch comparison profile.");

      console.log(err);
    }
  }
}