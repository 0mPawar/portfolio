import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Calendar,
  MapPin,
  BriefcaseBusiness,
} from "lucide-react";

import { getExperienceRoute } from "../../constants/routes";
import { getAssetUrl } from "../../utils/getAssetUrl";

function ExperienceCard({ experience }) {
  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const getDuration = () => {
    if (!experience.startDate) return null;

    const start = formatDate(experience.startDate);
    const end = experience.current
      ? "Present"
      : formatDate(experience.endDate);

    return `${start} — ${end}`;
  };

  return (
    <Link
      to={getExperienceRoute(experience.id)}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30">
        {/* Top subtle accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Header */}
        <div className="flex gap-4">
          {/* Company Logo */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5">
            {experience.logo ? (
              <img
                src={getAssetUrl(experience.logo)}
                alt={`${experience.company} logo`}
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <BriefcaseBusiness
                size={24}
                className="text-gray-400"
              />
            )}
          </div>

          {/* Company + Role */}
          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {experience.company}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {experience.role}
                </p>
              </div>

              <ArrowUpRight
                size={20}
                className="shrink-0 text-gray-400 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-600 dark:group-hover:text-blue-400"
              />
            </div>
          </div>
        </div>

        {/* Type + Location */}
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.type && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <BriefcaseBusiness size={14} />
              {experience.type}
            </span>
          )}

          {experience.location && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300">
              <MapPin size={14} />
              {experience.location}
            </span>
          )}
        </div>

        {/* Duration */}
        {getDuration() && (
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={16} />
            <span>{getDuration()}</span>
          </div>
        )}

        {/* Description */}
        {experience.shortDescription && (
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {experience.shortDescription}
          </p>
        )}

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/10">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            View Experience
          </span>

          <span className="text-sm text-gray-400 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </article>
    </Link>
  );
}

export default ExperienceCard;