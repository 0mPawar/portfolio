import ProjectCard from "./ProjectCard";

function ProjectGrid({ projects }) {
  if (!projects?.length) {
    return (
      <div className="py-16 text-center text-gray-500">
        No projects found.
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.id}
          project={project}
        />
      ))}
    </div>
  );
}

export default ProjectGrid;