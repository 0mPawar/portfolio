import PageHeader from "../../components/common/PageHeader";

import GitHubProfile from "../../components/github/GitHubProfile";
import GitHubStats from "../../components/github/GitHubStats";
import ContributionChart from "../../components/github/ContributionChart";
import RepositoryCard from "../../components/github/RepositoryCard";

import projects from "../../data/projects.json";

function GitHub() {
  const githubProjects = projects.filter((project) => project.github);

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <PageHeader
          eyebrow="Open Source & Code"
          title="GitHub"
          description="Explore my GitHub profile, repositories, projects, and the code behind the things I build."
        />

        <div className="space-y-12">
          {/* GitHub Profile */}
          <GitHubProfile />

          {/* Overview / Statistics */}
          <GitHubStats />

          {/* Activity / Contributions */}
          <ContributionChart />

          {/* Repositories */}
          {githubProjects.length > 0 && (
            <section>
              <div className="max-w-2xl">
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  Repositories
                </p>

                <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Project Repositories
                </h2>

                <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
                  A collection of projects available on GitHub.
                </p>
              </div>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {githubProjects.map((project) => (
                  <RepositoryCard
                    key={project.id}
                    project={project}
                  />
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </section>
  );
}

export default GitHub;