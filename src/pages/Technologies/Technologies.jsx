import technologies from "../../data/technologies.json";
import { sortByNameAlphabetical } from "../../utils/sortData";

import PageHeader from "../../components/common/PageHeader";
import TechnologyGrid from "../../components/technology/TechnologyGrid";

function Technologies() {
  const sortedTechnologies = sortByNameAlphabetical(technologies, "name");

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Tools & Technologies"
          title="Technologies"
          description="Technologies, frameworks, tools, platforms, and software I have explored and used while building projects."
        />

        <TechnologyGrid technologies={sortedTechnologies} />
      </div>
    </section>
  );
}

export default Technologies;