import { Link } from "react-router-dom";
import { FolderKanban, ArrowRight } from "lucide-react";

import projects from "../../data/projects.json";
import { getProjectRoute } from "../../constants/routes";

function SkillProjects({ skill }) {
  const relatedProjects = projects.filter((project) =>
    project.skills?.includes(skill.id)
  );

  if (!relatedProjects.length) {
    return (
      <p className="text-sm text-gray-500 dark:text-gray-400">
        No projects are currently linked to this skill.
      </p>
    );
  }

  return (
    <div>
      <div className="flex items-center gap-2">
        <FolderKanban
          size={16}
          className="text-blue-600 dark:text-blue-400"
        />

        <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
          Used in Projects
        </h3>
      </div>

      <div className="mt-4 space-y-2">
        {relatedProjects.map((project) => (
          <Link
            key={project.id}
            to={getProjectRoute(project.slug)}
            className="group flex items-center justify-between rounded-xl border border-gray-200 p-3 transition hover:border-blue-300 hover:bg-blue-50/50 dark:border-white/10 dark:hover:border-blue-500/30 dark:hover:bg-blue-500/5"
          >
            <div className="min-w-0">
              <p className="truncate text-sm font-medium text-gray-800 dark:text-gray-200">
                {project.name}
              </p>

              {project.shortDescription && (
                <p className="mt-1 line-clamp-1 text-xs text-gray-500 dark:text-gray-400">
                  {project.shortDescription}
                </p>
              )}
            </div>

            <ArrowRight
              size={16}
              className="ml-3 shrink-0 text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-600"
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default SkillProjects;