import { Calendar, FolderKanban, UserRound } from "lucide-react";

function ProjectOverview({ project }) {
  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const infoItems = [
    {
      label: "Project Type",
      value: project.projectType,
      icon: FolderKanban,
    },
    {
      label: "Category",
      value: project.category,
      icon: FolderKanban,
    },
    {
      label: "My Role",
      value: project.role,
      icon: UserRound,
    },
    {
      label: "Duration",
      value: project.startDate
        ? `${formatDate(project.startDate)} — ${formatDate(
            project.endDate
          )}`
        : null,
      icon: Calendar,
    },
  ].filter((item) => item.value);

  return (
    <section>
      {/* Section Header */}
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Overview
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          About the Project
        </h2>
      </div>

      {/* Description */}
      {project.description && (
        <div className="mt-6 space-y-4 text-base leading-8 text-gray-600 dark:text-gray-400">
          {project.description
            .split("\n")
            .filter(Boolean)
            .map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
        </div>
      )}

      {/* Information */}
      {infoItems.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Project Information
          </h3>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {infoItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <Icon size={19} />
                  </div>

                  <div className="min-w-0">
                    <p className="text-xs font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>

                    <p className="mt-1 truncate text-sm font-medium text-gray-900 dark:text-white">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectOverview;