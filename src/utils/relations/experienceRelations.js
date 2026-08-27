import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import technologies from "../../data/technologies.json";
import certificates from "../../data/certificates.json";
import achievements from "../../data/achievements.json";
import competitions from "../../data/competitions.json";

import { getByIds } from "./getByIds";
import { flattenIds, uniqueIds } from "../arrayUtils";

export const getExperienceProjects = (experience) => {
  return getByIds(projects, experience?.projects);
};

export const getExperienceSkills = (experience) => {
  const relatedProjects = getExperienceProjects(experience);

  const projectSkillIds = flattenIds(relatedProjects, "skills");

  const allSkillIds = uniqueIds([
    ...(experience?.skills || []),
    ...projectSkillIds,
  ]);

  return getByIds(skills, allSkillIds);
};

export const getExperienceTechnologies = (experience) => {
  const relatedProjects = getExperienceProjects(experience);

  const projectTechnologyIds = flattenIds(
    relatedProjects,
    "technologies"
  );

  const allTechnologyIds = uniqueIds([
    ...(experience?.technologies || []),
    ...projectTechnologyIds,
  ]);

  return getByIds(technologies, allTechnologyIds);
};

export const getExperienceCertificates = (experience) => {
  const relatedProjects = getExperienceProjects(experience);

  const projectCertificateIds = flattenIds(
    relatedProjects,
    "certificates"
  );

  const allCertificateIds = uniqueIds([
    ...(experience?.certificates || []),
    ...projectCertificateIds,
  ]);

  return getByIds(certificates, allCertificateIds);
};

export const getExperienceAchievements = (experience) => {
  const relatedProjects = getExperienceProjects(experience);

  const projectAchievementIds = flattenIds(
    relatedProjects,
    "achievements"
  );

  const allAchievementIds = uniqueIds([
    ...(experience?.achievements || []),
    ...projectAchievementIds,
  ]);

  return getByIds(achievements, allAchievementIds);
};

export const getExperienceCompetitions = (experience) => {
  const relatedProjects = getExperienceProjects(experience);

  const projectCompetitionIds = flattenIds(
    relatedProjects,
    "competitions"
  );

  const allCompetitionIds = uniqueIds([
    ...(experience?.competitions || []),
    ...projectCompetitionIds,
  ]);

  return getByIds(competitions, allCompetitionIds);
};