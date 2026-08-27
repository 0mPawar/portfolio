import { Link } from "react-router-dom";
import {
  ArrowUpRight,
  Calendar,
  MapPin,
  GraduationCap,
} from "lucide-react";

import { getEducationRoute } from "../../constants/routes";
import { getAssetUrl } from "../../utils/getAssetUrl";

function EducationCard({ education }) {
  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const duration = education.startDate
    ? `${formatDate(education.startDate)} — ${
        education.current
          ? "Present"
          : formatDate(education.endDate)
      }`
    : null;

  return (
    <Link
      to={getEducationRoute(education.id)}
      className="group block"
    >
      <article className="relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30">
        {/* Top Accent */}
        <div className="absolute inset-x-0 top-0 h-1 bg-blue-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Header */}
        <div className="flex gap-4">
          {/* Institute Logo */}
          <div className="flex h-14 w-14 shrink-0 items-center justify-center overflow-hidden rounded-xl border border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/5">
            {education.logo ? (
              <img
                src={getAssetUrl(education.logo)}
                alt={`${education.institute} logo`}
                className="h-full w-full object-contain p-2"
              />
            ) : (
              <GraduationCap
                size={24}
                className="text-gray-400"
              />
            )}
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex items-start justify-between gap-3">
              <div className="min-w-0">
                <h3 className="truncate text-lg font-bold text-gray-900 transition-colors group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {education.institute}
                </h3>

                <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-400">
                  {education.degree}
                </p>

                {education.field && (
                  <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                    {education.field}
                  </p>
                )}
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
          {education.type && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-500/10 px-3 py-1.5 text-xs font-semibold text-blue-700 dark:text-blue-300">
              <GraduationCap size={14} />
              {education.type}
            </span>
          )}

          {education.location && (
            <span className="inline-flex items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600 dark:bg-white/5 dark:text-gray-300">
              <MapPin size={14} />
              {education.location}
            </span>
          )}
        </div>

        {/* Duration */}
        {duration && (
          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <Calendar size={16} />
            <span>{duration}</span>
          </div>
        )}

        {/* Description */}
        {education.shortDescription && (
          <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {education.shortDescription}
          </p>
        )}

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-white/10">
          <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
            View Education
          </span>

          <span className="text-sm text-gray-400 transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </div>
      </article>
    </Link>
  );
}

export default EducationCard;