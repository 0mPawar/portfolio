import stats from "../../data/stats.json";

import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import technologies from "../../data/technologies.json";
import certificates from "../../data/certificates.json";

export const getStats = () => {
  const counts = {
    Projects: projects.length,
    Skills: skills.length,
    Technologies: technologies.length,
    Certificates: certificates.length
  };

  return stats.map((stat) => ({
    ...stat,
    value: counts[stat.label] ?? 0
  }));
};