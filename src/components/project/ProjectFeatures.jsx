import { CheckCircle2 } from "lucide-react";

function ProjectFeatures({ project }) {
  if (!project.features?.length) {
    return null;
  }

  return (
    <section>
      {/* Section Header */}
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Features
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Key Features
        </h2>
      </div>

      {/* Feature List */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {project.features.map((feature, index) => (
          <div
            key={index}
            className="group flex gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30"
          >
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <CheckCircle2 size={19} />
            </div>

            <p className="pt-1 text-sm leading-6 text-gray-700 dark:text-gray-300">
              {feature}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectFeatures;