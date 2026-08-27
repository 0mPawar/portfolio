import projects from "../../data/projects.json";

import ProjectCard from "../project/ProjectCard";
import { getByIds } from "../../utils/relations/getByIds";

function EducationProjects({ education }) {
  const educationProjects = getByIds(
    projects,
    education.projects || []
  );

  if (!educationProjects.length) {
    return null;
  }

  return (
    <section>
      {/* Header */}
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Academic Work
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Projects
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
          Projects and practical work completed during my studies at{" "}
          {education.institute}.
        </p>
      </div>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {educationProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </div>
    </section>
  );
}

export default EducationProjects;