import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import profile from "../../data/profile.json";

function GitHubProfile() {
  const githubUrl = profile.github;

  if (!githubUrl) {
    return null;
  }

  return (
    <section className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-5">
          {/* GitHub Icon */}
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gray-900 text-white dark:bg-white dark:text-gray-950">
            <FaGithub size={32} />
          </div>

          {/* Profile Info */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              GitHub Profile
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {profile.githubUsername || profile.name}
            </h2>

            <p className="mt-2 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
              Explore my repositories, projects, experiments, and source
              code.
            </p>
          </div>
        </div>

        {/* GitHub Link */}
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-gray-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-gray-700 dark:bg-white dark:text-gray-950 dark:hover:bg-gray-200"
        >
          <FaGithub size={18} />
          Visit GitHub
          <ExternalLink size={16} />
        </a>
      </div>
    </section>
  );
}

export default GitHubProfile;