import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Calendar,
  Star,
  ExternalLink,
} from "lucide-react";

import Button from "../common/BackButton";
import { ROUTES } from "../../constants/routes";
import { getAssetUrl } from "../../utils/getAssetUrl";

function ProjectHero({ project }) {
  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  return (
    <section className="relative overflow-hidden border-b border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.02]">
      {/* Background Banner */}
      {project.banner && (
        <>
          <div className="absolute inset-0">
            <img
              src={getAssetUrl(project.banner)}
              alt=""
              className="h-full w-full scale-105 object-cover opacity-20 blur-sm"
            />
          </div>

          <div className="absolute inset-0 bg-white/85 dark:bg-black/80" />
        </>
      )}

      <div className="relative mx-auto max-w-7xl px-4 py-8 sm:py-12">
        {/* Back Button */}
        <Button
          to={ROUTES.PROJECTS}
          variant="ghost"
          icon={<ArrowLeft size={17} />}
        >
          Back to Projects
        </Button>

        {/* Project Information */}
        <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-center">
          {/* Project Logo */}
          <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5 sm:h-28 sm:w-28">
            {project.logo ? (
              <img
                src={getAssetUrl(project.logo)}
                alt={`${project.name} logo`}
                className="h-full w-full object-contain p-3"
              />
            ) : (
              <span className="text-2xl font-bold text-gray-400">
                {project.name?.charAt(0)}
              </span>
            )}
          </div>

          {/* Project Text */}
          <div className="min-w-0">
            {/* Category and Featured */}
            <div className="flex flex-wrap items-center gap-3">
              {project.category && (
                <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {project.category}
                </span>
              )}

              {project.featured && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-yellow-400/15 px-3 py-1 text-xs font-semibold text-yellow-700 dark:text-yellow-400">
                  <Star size={13} fill="currentColor" />
                  Featured Project
                </span>
              )}
            </div>

            {/* Name */}
            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {project.name}
            </h1>

            {/* Short Description */}
            {project.shortDescription && (
              <p className="mt-4 max-w-3xl text-base leading-7 text-gray-600 dark:text-gray-400 sm:text-lg">
                {project.shortDescription}
              </p>
            )}

            {/* Meta Information */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm">
              {/* Status */}
              {project.status && (
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  <span className="h-2 w-2 rounded-full bg-green-500" />
                  {project.status}
                </span>
              )}

              {/* Date */}
              {project.startDate && (
                <span className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <Calendar size={16} />
                  {formatDate(project.startDate)} —{" "}
                  {formatDate(project.endDate)}
                </span>
              )}

              {/* Live Link */}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-medium text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
                >
                  View Live Project
                  <ExternalLink size={15} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectHero;