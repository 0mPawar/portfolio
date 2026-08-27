import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import projects from "../../data/projects.json";
import { ROUTES } from "../../constants/routes";

import ProjectCard from "../project/ProjectCard";

function FeaturedProjects() {
  const featuredProjects = projects
    .filter((project) => project.featured)
    .slice(0, 3);

  const projectsToShow =
    featuredProjects.length > 0
      ? featuredProjects
      : projects.slice(0, 3);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Portfolio
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Featured Projects
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              A selection of projects I have built and worked on.
            </p>
          </div>

          <Link
            to={ROUTES.PROJECTS}
            className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
          >
            View all projects
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectsToShow.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProjects;