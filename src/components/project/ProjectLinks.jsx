import {
  Calendar,
  CircleDot,
  ExternalLink,
  Code2,
  GraduationCap,
  BriefcaseBusiness,
  FolderGit2,
  Globe,
  MonitorPlay,
  BookOpen,
} from "lucide-react";

import { getExperienceRoute, getEducationRoute } from "../../constants/routes";

import experiences from "../../data/experience.json";
import education from "../../data/education.json";
import { getAssetUrl } from "../../utils/getAssetUrl";
import { useToast } from "../../hooks/useToast";

function resolveProjectLink(url) {
  if (typeof url !== "string") return null;

  const value = url.trim();
  if (!value || value === "#") return null;

  if (/^https?:\/\//i.test(value)) {
    try {
      const parsedUrl = new URL(value);
      return ["http:", "https:"].includes(parsedUrl.protocol)
        ? { href: value, external: true }
        : null;
    } catch {
      return null;
    }
  }

  if (value.startsWith("/") && !value.startsWith("//")) {
    return { href: getAssetUrl(value), external: false };
  }

  return null;
}

function ProjectLinks({ project }) {
  const { toast } = useToast();

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
      value: project.startDate ? formatDate(project.startDate) : null,
      icon: Calendar,
    },
  ].filter((item) => item.value);

  const projectLinks = [
    {
      label: "View Source Code",
      url: project.githubUrl,
      icon: Code2,
    },
    {
      label: "View Live Project",
      url: project.liveUrl,
      icon: Globe,
      primary: true,
    },
    {
      label: "View Demo",
      url: project.demoUrl || project.validDemo,
      icon: MonitorPlay,
    },
    {
      label: "Documentation",
      url: project.documentationUrl,
      icon: BookOpen,
    },
  ]
    .map((item) => ({ ...item, link: resolveProjectLink(item.url) }));

  return (
    <div className="space-y-6">
      <section className="min-w-0 rounded-2xl border border-gray-200 bg-white p-5 shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Project Links
        </h3>

        <div className="mt-4 space-y-2">
          {projectLinks.map(({ label, icon: Icon, primary, link }) => {
            const className = `flex min-h-12 w-full min-w-0 items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm font-medium transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 dark:focus-visible:outline-blue-400 ${
              link
                ? primary
                  ? "border-blue-200 bg-blue-50 text-blue-700 hover:bg-blue-100 dark:border-blue-500/20 dark:bg-blue-500/10 dark:text-blue-300 dark:hover:bg-blue-500/20"
                  : "border-gray-200 text-gray-700 hover:border-gray-300 hover:bg-gray-50 dark:border-white/10 dark:text-gray-200 dark:hover:bg-white/5"
                : "cursor-pointer border-gray-200 bg-gray-50 text-gray-500 hover:border-gray-300 hover:bg-gray-100 dark:border-white/10 dark:bg-white/[0.02] dark:text-gray-400 dark:hover:bg-white/[0.05]"
            }`;

            const content = (
              <>
                <span className="flex min-w-0 flex-1 items-center gap-3">
                  <Icon size={18} aria-hidden="true" className="shrink-0" />
                  <span className="min-w-0 break-words">{label}</span>
                </span>

                {link ? (
                  <ExternalLink
                    size={16}
                    aria-hidden="true"
                    className="shrink-0"
                  />
                ) : (
                  <span className="shrink-0 text-xs font-normal">
                    Not available
                  </span>
                )}
              </>
            );

            return link ? (
              <a
                key={label}
                href={link.href}
                target={link.external ? "_blank" : undefined}
                rel={link.external ? "noopener noreferrer" : undefined}
                aria-label={`${label}${link.external ? " (opens in a new tab)" : ""}`}
                className={className}
              >
                {content}
              </a>
            ) : (
              <button
                key={label}
                type="button"
                aria-label={`${label}, not available`}
                onClick={() =>
                  toast({
                    message: `${label} is not available for this project yet.`,
                    type: "info",
                  })
                }
                className={className}
              >
                {content}
              </button>
            );
          })}
        </div>
      </section>

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
                <div key={item.label} className="flex items-start gap-3">
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