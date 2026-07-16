import { useState } from "react";
import { getUser } from "../services/githubApi";

export default function useGithubUser() {
  const [user, setUser] = useState(null);
  const [compareUser, setCompareUser] = useState(null);
  const [showCompare, setShowCompare] = useState(false);

  const [error, setError] = useState("");
  const [compareError, setCompareError] = useState("");

  async function fetchProfile(username) {
    try {
      setError("");
      setCompareError("");

      const data = await getUser(username);
      console.log(data);
      setUser(data);
      setCompareUser(null);
      setShowCompare(false);
    } catch (err) {
      setError(err.message);
      setUser(null);
    }
  }

  async function fetchCompareProfile(username) {
    if (!user) {
      setCompareError("Search a profile first.");
      return;
    }

    if (username.trim().toLowerCase() === user.login.toLowerCase()) {
      setCompareError("You cannot compare the same profile.");
      return;
    }

    try {
      setCompareError("");

      const data = await getUser(username);

      setCompareUser(data);
      setShowCompare(true);
    } catch (err) {
      setCompareError(err.message);
    }
  }

  return {
    user,
    compareUser,
    showCompare,
    error,
    compareError,
    fetchProfile,
    fetchCompareProfile,
    setShowCompare,
  };
}