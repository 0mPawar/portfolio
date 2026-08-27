import projects from "../../data/projects.json";
import experience from "../../data/experience.json";
import education from "../../data/education.json";

export const getSkillProjects = (skillId) => {
  return projects.filter((project) =>
    project.skills?.includes(Number(skillId))
  );
};

export const getSkillExperience = (skillId) => {
  return experience.filter((item) => {
    const projectsUsingSkill = getSkillProjects(skillId);

    return (
      item.skills?.includes(Number(skillId)) ||
      projectsUsingSkill.some((project) =>
        item.projects?.includes(project.id)
      )
    );
  });
};

export const getSkillEducation = (skillId) => {
  return education.filter((item) => {
    const projectsUsingSkill = getSkillProjects(skillId);

    return (
      item.skills?.includes(Number(skillId)) ||
      projectsUsingSkill.some((project) =>
        item.projects?.includes(project.id)
      )
    );
  });
};