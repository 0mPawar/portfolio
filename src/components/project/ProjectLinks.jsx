import {
  Calendar,
  CircleDot,
  ExternalLink,
  Code2 ,
  GraduationCap,
  BriefcaseBusiness,
  FolderGit2,
  Globe,
} from "lucide-react";

import { getExperienceRoute, getEducationRoute } from "../../constants/routes";

import experiences from "../../data/experience.json";
import education from "../../data/education.json";
import { getAssetUrl } from "../../utils/getAssetUrl";

function ProjectLinks({ project }) {
  const relatedExperience = experiences.filter((item) =>
    item.projects?.includes(project.id)
  );

  const relatedEducation = education.filter((item) =>
    item.projects?.includes(project.id)
  );

  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const infoItems = [
    {
      label: "Status",
      value: project.status,
      icon: CircleDot,
    },
    {
      label: "Category",
      value: project.category,
      icon: FolderGit2,
    },
    {
      label: "Started",
      value: project.startDate
        ? formatDate(project.startDate)
        : null,
      icon: Calendar,
    },
  ].filter((item) => item.value);

  const hasLinks =
    project.githubUrl ||
    project.liveUrl ||
    project.demoUrl ||
    project.documentationUrl;

  return (
    <div className="space-y-6">
      {/* Project Links */}
      {hasLinks && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Project Links
          </h3>

          <div className="mt-4 space-y-2">
            {/* GitHub */}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <Code2  size={18} />
                  View Source Code
                </span>

                <ExternalLink size={16} />
              </a>
            )}

            {/* Live Project */}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-blue-200 bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700 transition hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500/20"
              >
                <span className="flex items-center gap-3">
                  <Globe size={18} />
                  View Live Project
                </span>

                <ExternalLink size={16} />
              </a>
            )}

            {/* Demo */}
            {project.demoUrl && (
              <a
                href={getAssetUrl(project.demoUrl)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <ExternalLink size={18} />
                  View Demo
                </span>

                <ExternalLink size={16} />
              </a>
            )}

            {/* Documentation */}
            {project.documentationUrl && (
              <a
                href={getAssetUrl(project.documentationUrl)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between rounded-xl border border-gray-200 px-4 py-3 text-sm font-medium text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
              >
                <span className="flex items-center gap-3">
                  <FolderGit2 size={18} />
                  Documentation
                </span>

                <ExternalLink size={16} />
              </a>
            )}
          </div>
        </div>
      )}

      {/* Project Information */}
      {infoItems.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Project Information
          </h3>

          <div className="mt-4 space-y-4">
            {infoItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-start gap-3"
                >
                  <div className="mt-0.5 text-gray-400 dark:text-gray-500">
                    <Icon size={18} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>

                    <p className="mt-0.5 text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Related Experience */}
      {relatedExperience.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <BriefcaseBusiness
              size={18}
              className="text-blue-600 dark:text-blue-400"
            />

            <h3 className="font-semibold text-gray-900 dark:text-white">
              Related Experience
            </h3>
          </div>

          <div className="mt-4 space-y-2">
            {relatedExperience.map((item) => (
              <a
                key={item.id}
                href={getExperienceRoute(item.id)}
                className="block rounded-xl p-3 transition hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {item.company}
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {item.role}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Related Education */}
      {relatedEducation.length > 0 && (
        <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <div className="flex items-center gap-2">
            <GraduationCap
              size={18}
              className="text-purple-600 dark:text-purple-400"
            />

            <h3 className="font-semibold text-gray-900 dark:text-white">
              Related Education
            </h3>
          </div>

          <div className="mt-4 space-y-2">
            {relatedEducation.map((item) => (
              <a
                key={item.id}
                href={getEducationRoute(item.id)}
                className="block rounded-xl p-3 transition hover:bg-gray-50 dark:hover:bg-white/5"
              >
                <p className="text-sm font-medium text-gray-800 dark:text-gray-200">
                  {item.institute}
                </p>

                <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
                  {item.degree}
                </p>
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProjectLinks;