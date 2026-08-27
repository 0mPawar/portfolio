import experiences from "../../data/experience.json";
import { sortByDateAscending } from "../../utils/sortData";

import PageHeader from "../../components/common/PageHeader";
import ExperienceTimeline from "../../components/experience/ExperienceTimeline";

function Experience() {
  const sortedExperiences = sortByDateAscending(experiences, "startDate");

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="My Journey"
          title="Experience"
          description="A timeline of my internships, professional experiences, and the projects I worked on."
        />

        <ExperienceTimeline experiences={sortedExperiences} />
      </div>
    </section>
  );
}

export default Experience;