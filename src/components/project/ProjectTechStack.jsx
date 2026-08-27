import { Braces, Wrench } from "lucide-react";

import Icon from "../common/Icon";

import skills from "../../data/skills.json";
import technologies from "../../data/technologies.json";
import { getByIds } from "../../utils/relations/getByIds";

function ProjectTechStack({ project }) {
  const projectSkills = getByIds(
    skills,
    project.skills || []
  );

  const projectTechnologies = getByIds(
    technologies,
    project.technologies || []
  );

  if (
    !projectSkills.length &&
    !projectTechnologies.length
  ) {
    return null;
  }

  return (
    <section>
      {/* Section Header */}
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Tech Stack
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
          Skills & Technologies
        </h2>

        <p className="mt-4 max-w-2xl leading-7 text-gray-600 dark:text-gray-400">
          The skills and technologies used to design, build, and
          develop this project.
        </p>
      </div>

      <div className="mt-10 grid gap-8 lg:grid-cols-2">
        {/* Skills */}
        {projectSkills.length > 0 && (
          <TechStackGroup
            title="Skills"
            description="Core areas of expertise applied to this project."
            icon={Wrench}
            items={projectSkills}
            iconType="lucide"
          />
        )}

        {/* Technologies */}
        {projectTechnologies.length > 0 && (
          <TechStackGroup
            title="Technologies"
            description="Tools and technologies used during development."
            icon={Braces}
            items={projectTechnologies}
            iconType="technology"
          />
        )}
      </div>
    </section>
  );
}

function TechStackGroup({
  title,
  description,
  icon: HeaderIcon,
  items,
  iconType,
}) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 sm:p-6 dark:border-white/10 dark:bg-white/[0.03]">
      {/* Group Header */}
      <div className="flex items-start gap-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <HeaderIcon size={21} />
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm leading-6 text-gray-500 dark:text-gray-400">
            {description}
          </p>
        </div>
      </div>

      {/* Items */}
      <div className="mt-6 flex flex-wrap gap-3">
        {items.map((item) => (
          <div
            key={item.id}
            className="group flex items-center gap-2.5 rounded-xl border border-gray-200 bg-gray-50 px-3.5 py-2.5 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-sm dark:border-white/10 dark:bg-white/[0.04] dark:hover:border-blue-500/30 dark:hover:bg-white/[0.07]"
          >
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Icon
                name={item.icon}
                type={item.iconLibrary || iconType}
                size={17}
              />
            </div>

            <div className="min-w-0">
              <span className="block text-sm font-medium text-gray-800 dark:text-gray-200">
                {item.name}
              </span>

              {item.category && (
                <span className="block text-xs text-gray-500 dark:text-gray-500">
                  {item.category}
                </span>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProjectTechStack;