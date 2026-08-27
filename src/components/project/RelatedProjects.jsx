import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import projects from "../../data/projects.json";
import ProjectCard from "./ProjectCard";
import { getProjectRoute } from "../../constants/routes";

function RelatedProjects({ project }) {
  const getRelatedProjects = () => {
    return projects
      .filter((item) => item.id !== project.id)
      .map((item) => {
        let score = 0;

        // Same category
        if (
          project.category &&
          item.category === project.category
        ) {
          score += 3;
        }

        // Shared skills
        const sharedSkills = item.skills?.filter((skillId) =>
          project.skills?.includes(skillId)
        );

        score += sharedSkills?.length || 0;

        // Shared technologies
        const sharedTechnologies =
          item.technologies?.filter((technologyId) =>
            project.technologies?.includes(technologyId)
          );

        score += (sharedTechnologies?.length || 0) * 2;

        return {
          ...item,
          relevanceScore: score,
        };
      })
      .filter((item) => item.relevanceScore > 0)
      .sort(
        (a, b) =>
          b.relevanceScore - a.relevanceScore
      )
      .slice(0, 3);
  };

  const relatedProjects = getRelatedProjects();

  if (!relatedProjects.length) {
    return null;
  }

  return (
    <section>
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
            Explore More
          </p>

          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
            Related Projects
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
            Other projects with similar skills, technologies, or categories.
          </p>
        </div>

        <Link
          to={getProjectRoute("")}
          className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300"
        >
          View All Projects
          <ArrowRight size={17} />
        </Link>
      </div>

      {/* Projects */}
      <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {relatedProjects.map((relatedProject) => (
          <ProjectCard
            key={relatedProject.id}
            project={relatedProject}
          />
        ))}
      </div>
    </section>
  );
}

export default RelatedProjects;