import education from "../../data/education.json";
import { sortByDateAscending } from "../../utils/sortData";

import PageHeader from "../../components/common/PageHeader";
import EducationTimeline from "../../components/education/EducationTimeline";

function Education() {
  const sortedEducation = sortByDateAscending(education, "startDate");

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Academic Journey"
          title="Education"
          description="A timeline of my academic journey, learning experiences, projects, and achievements."
        />

        <EducationTimeline education={sortedEducation} />
      </div>
    </section>
  );
}

export default Education;