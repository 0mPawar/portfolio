import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import technologies from "../../data/technologies.json";
import certificates from "../../data/certificates.json";
import achievements from "../../data/achievements.json";
import competitions from "../../data/competitions.json";

import { getByIds } from "./getByIds";
import { flattenIds, uniqueIds } from "../arrayUtils";

export const getEducationProjects = (education) => {
  return getByIds(projects, education?.projects);
};

export const getEducationSkills = (education) => {
  const relatedProjects = getEducationProjects(education);

  const projectSkillIds = flattenIds(relatedProjects, "skills");

  const allSkillIds = uniqueIds([
    ...(education?.skills || []),
    ...projectSkillIds,
  ]);

  return getByIds(skills, allSkillIds);
};

export const getEducationTechnologies = (education) => {
  const relatedProjects = getEducationProjects(education);

  const projectTechnologyIds = flattenIds(
    relatedProjects,
    "technologies"
  );

  const allTechnologyIds = uniqueIds([
    ...(education?.technologies || []),
    ...projectTechnologyIds,
  ]);

  return getByIds(technologies, allTechnologyIds);
};

export const getEducationCertificates = (education) => {
  const relatedProjects = getEducationProjects(education);

  const projectCertificateIds = flattenIds(
    relatedProjects,
    "certificates"
  );

  const allCertificateIds = uniqueIds([
    ...(education?.certificates || []),
    ...projectCertificateIds,
  ]);

  return getByIds(certificates, allCertificateIds);
};

export const getEducationAchievements = (education) => {
  const relatedProjects = getEducationProjects(education);

  const projectAchievementIds = flattenIds(
    relatedProjects,
    "achievements"
  );

  const allAchievementIds = uniqueIds([
    ...(education?.achievements || []),
    ...projectAchievementIds,
  ]);

  return getByIds(achievements, allAchievementIds);
};

export const getEducationCompetitions = (education) => {
  const relatedProjects = getEducationProjects(education);

  const projectCompetitionIds = flattenIds(
    relatedProjects,
    "competitions"
  );

  const allCompetitionIds = uniqueIds([
    ...(education?.competitions || []),
    ...projectCompetitionIds,
  ]);

  return getByIds(competitions, allCompetitionIds);
};