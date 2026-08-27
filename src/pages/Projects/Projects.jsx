import projects from "../../data/projects.json";
import { sortByDateAscending } from "../../utils/sortData";

import PageHeader from "../../components/common/PageHeader";
import ProjectGrid from "../../components/project/ProjectGrid";

function Projects() {
  const sortedProjects = sortByDateAscending(projects, "startDate");

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="My Work"
          title="Projects"
          description="A collection of projects I have built while learning, experimenting and working on real-world applications."
        />

        <ProjectGrid projects={sortedProjects} />
      </div>
    </section>
  );
}

export default Projects;