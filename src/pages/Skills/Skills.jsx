import skills from "../../data/skills.json";
import { sortByNameAlphabetical } from "../../utils/sortData";

import PageHeader from "../../components/common/PageHeader";
import SkillGrid from "../../components/skill/SkillGrid";

function Skills() {
  const sortedSkills = sortByNameAlphabetical(skills, "name");

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="My Skills"
          title="Skills"
          description="A collection of skills I have learned and applied while building projects and exploring different areas of technology."
        />

        <SkillGrid skills={sortedSkills} />
      </div>
    </section>
  );
}

export default Skills;