const GITHUB_USERNAME = "0mPawar";

export async function getGitHubRepositories() {
  const response = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub repositories.");
  }

  return response.json();
}