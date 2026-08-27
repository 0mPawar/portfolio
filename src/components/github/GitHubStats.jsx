import { useEffect, useState } from "react";
import { FolderGit2, Code2, GitBranch, Brain } from "lucide-react";

import projects from "../../data/projects.json";
import technologies from "../../data/technologies.json";
import skills from "../../data/skills.json";

import { getGitHubRepositories } from "../../constants/github";

function GitHubStats() {
  const [repositoryCount, setRepositoryCount] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchRepositories() {
      try {
        const repositories = await getGitHubRepositories();

        console.log("GitHub repositories:", repositories);

        setRepositoryCount(repositories.length);
      } catch (error) {
        console.error("Failed to fetch repositories:", error);
        setRepositoryCount(0);
      } finally {
        setLoading(false);
      }
    }

    fetchRepositories();
  }, []);

  const totalProjects = projects.length;
  const totalTechnologies = technologies.length;
  const totalSkills = skills.length;

  const stats = [
    {
      label: "Projects",
      value: totalProjects,
      icon: FolderGit2,
    },
    {
      label: "GitHub Repositories",
      value: loading ? "..." : repositoryCount,
      icon: GitBranch,
    },
    {
      label: "Technologies Explored",
      value: totalTechnologies,
      icon: Code2,
    },
    {
      label: "Skills Explored",
      value: totalSkills,
      icon: Brain,
    },
  ];

  return (
    <section>
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Overview
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          GitHub Statistics
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
          A quick overview of my projects, repositories, and technologies.
        </p>
      </div>

      <div className="mt-8 grid overflow-hidden rounded-2xl border border-gray-200 bg-white sm:grid-cols-2 lg:grid-cols-4 dark:border-white/10 dark:bg-white/[0.03]">
        {stats.map((stat, index) => {
          const Icon = stat.icon;

          return (
            <div
              key={stat.label}
              className={`p-6 sm:p-8 ${
                index !== stats.length - 1
                  ? "border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-white/10"
                  : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Icon size={21} />
              </div>

              <p className="mt-5 text-3xl font-bold text-gray-900 dark:text-white">
                {stat.value}
              </p>

              <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default GitHubStats;
