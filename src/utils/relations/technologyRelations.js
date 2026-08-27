import projects from "../../data/projects.json";
import experience from "../../data/experience.json";
import education from "../../data/education.json";

export const getTechnologyProjects = (technologyId) => {
  return projects.filter((project) =>
    project.technologies?.includes(Number(technologyId))
  );
};

export const getTechnologyExperience = (technologyId) => {
  const projectsUsingTechnology =
    getTechnologyProjects(technologyId);

  return experience.filter((item) => {
    return (
      item.technologies?.includes(Number(technologyId)) ||
      projectsUsingTechnology.some((project) =>
        item.projects?.includes(project.id)
      )
    );
  });
};

export const getTechnologyEducation = (technologyId) => {
  const projectsUsingTechnology =
    getTechnologyProjects(technologyId);

  return education.filter((item) => {
    return (
      item.technologies?.includes(Number(technologyId)) ||
      projectsUsingTechnology.some((project) =>
        item.projects?.includes(project.id)
      )
    );
  });
};