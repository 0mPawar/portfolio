import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Calendar,
  ExternalLink,
  Star,
} from "lucide-react";

import Icon from "../common/Icon";

import technologies from "../../data/technologies.json";
import { getByIds } from "../../utils/relations/getByIds";
import { getProjectRoute } from "../../constants/routes";
import { getAssetUrl } from "../../utils/getAssetUrl";

function ProjectCard({ project }) {
  const projectTechnologies = getByIds(
    technologies,
    project.technologies
  ).slice(0, 4);

  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl dark:border-white/10 dark:bg-white/[0.03]">
      {/* Project Image */}
      <Link
        to={getProjectRoute(project.slug)}
        className="relative block aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-white/5"
      >
        {project.banner ? (
          <img
            src={getAssetUrl(project.banner)}
            alt={project.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-gray-400">
            No project image
          </div>
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Featured */}
        {project.featured && (
          <div className="absolute left-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-black">
            <Star size={14} fill="currentColor" />
            Featured
          </div>
        )}

        {/* Open Indicator */}
        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight size={18} />
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-1 flex-col p-5">
        {/* Category + Status */}
        <div className="flex items-center justify-between gap-3">
          <span className="text-xs font-medium text-blue-600 dark:text-blue-400">
            {project.category}
          </span>

          {project.status && (
            <span className="rounded-full border border-gray-200 px-2.5 py-1 text-xs text-gray-500 dark:border-white/10 dark:text-gray-400">
              {project.status}
            </span>
          )}
        </div>

        {/* Title */}
        <Link to={getProjectRoute(project.slug)}>
          <h2 className="mt-4 text-xl font-semibold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            {project.name}
          </h2>
        </Link>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
          {project.shortDescription}
        </p>

        {/* Technologies - Text Only */}
        {projectTechnologies.length > 0 && (
          <div className="mt-5 flex flex-wrap gap-2">
            {projectTechnologies.map((technology) => (
              <span
                key={technology.id}
                className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600 dark:bg-white/10 dark:text-gray-300"
              >
                {technology.name}
              </span>
            ))}

            {project.technologies?.length > 4 && (
              <span className="rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-500 dark:bg-white/10 dark:text-gray-400">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>
        )}

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between border-t border-gray-100 pt-5 dark:border-white/10">
          {/* Date */}
          <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400">
            <Calendar size={14} />

            <span>
              {formatDate(project.startDate)} —{" "}
              {formatDate(project.endDate)}
            </span>
          </div>

          {/* External Links */}
          <div className="flex items-center gap-2">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`${project.name} GitHub repository`}
                className="rounded-md p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                onClick={(event) => event.stopPropagation()}
              >
                <Icon
                  name={project.icon || "FaGithub"}
                  type={project.iconLibrary || "fa6"}
                  size={17}
                />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${project.name}`}
                className="rounded-md p-1.5 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
                onClick={(event) => event.stopPropagation()}
              >
                <ExternalLink size={17} />
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard;