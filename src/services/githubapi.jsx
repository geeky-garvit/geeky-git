const BASE_URL = "https://api.github.com/users";

export async function getUser(username) {

    const response = await fetch(`${BASE_URL}/${username}`);

    const data = await response.json();

    if (response.status === 403) {
        throw new Error("GitHub API rate limit exceeded.");
    }

    if (data.message === "Not Found") {
        throw new Error("User not found.");
    }

    return data;
}