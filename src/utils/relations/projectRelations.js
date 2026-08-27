import skills from "../../data/skills.json";
import technologies from "../../data/technologies.json";
import certificates from "../../data/certificates.json";
import achievements from "../../data/achievements.json";
import competitions from "../../data/competitions.json";
import experience from "../../data/experience.json";
import education from "../../data/education.json";

import { getByIds } from "./getByIds";

export const getProjectSkills = (project) => {
  return getByIds(skills, project?.skills);
};

export const getProjectTechnologies = (project) => {
  return getByIds(technologies, project?.technologies);
};

export const getProjectCertificates = (project) => {
  return getByIds(certificates, project?.certificates);
};

export const getProjectAchievements = (project) => {
  return getByIds(achievements, project?.achievements);
};

export const getProjectCompetitions = (project) => {
  return getByIds(competitions, project?.competitions);
};

export const getProjectExperience = (projectId) => {
  return experience.filter((item) =>
    item.projects?.includes(Number(projectId))
  );
};

export const getProjectEducation = (projectId) => {
  return education.filter((item) =>
    item.projects?.includes(Number(projectId))
  );
};