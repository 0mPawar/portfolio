import { ExternalLink, Globe } from "lucide-react";
import { FaGithub } from "react-icons/fa";

function RepositoryCard({ project }) {
  return (
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30">
      {/* Project Info */}
      <div>
        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
          {project.name}
        </h3>

        {project.shortDescription && (
          <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {project.shortDescription}
          </p>
        )}
      </div>

      {/* Links */}
      <div className="mt-auto flex flex-wrap gap-3 border-t border-gray-100 pt-5 dark:border-white/10">
        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
          >
            <FaGithub size={17} />
            Repository
            <ExternalLink size={14} />
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <Globe size={17} />
            Live Project
            <ExternalLink size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

export default RepositoryCard;