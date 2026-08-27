import { useParams, Navigate } from "react-router-dom";

import projects from "../../data/projects.json";
import { ROUTES } from "../../constants/routes";
import ProjectHero from "../../components/project/ProjectHero";
import ProjectOverview from "../../components/project/ProjectOverview";
import ProjectFeatures from "../../components/project/ProjectFeatures";
import ProjectTechStack from "../../components/project/ProjectTechStack";
import ProjectGallery from "../../components/project/ProjectGallery";
import ProjectLinks from "../../components/project/ProjectLinks";
import RelatedProjects from "../../components/project/RelatedProjects";

function ProjectDetails() {
  const { slug } = useParams();

  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/not-found" replace />;
  }
  if (!project) {
    return <Navigate to={ROUTES.NOT_FOUND} replace />;
  }
  return (
    <div>
      {/* Project Hero */}
      <ProjectHero project={project} />

      <main className="mx-auto max-w-7xl px-4 py-12 sm:py-16">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_320px]">
          {/* Main Content */}
          <div className="min-w-0 space-y-16">
            <ProjectOverview project={project} />

            <ProjectFeatures project={project} />

            <ProjectTechStack project={project} />

            <ProjectGallery project={project} />

            <RelatedProjects project={project} />
          </div>

          {/* Sidebar */}
          <aside className="space-y-6 lg:sticky lg:top-24 lg:h-fit">
            <ProjectLinks project={project} />
          </aside>
        </div>
      </main>
    </div>
  );
}

export default ProjectDetails;
