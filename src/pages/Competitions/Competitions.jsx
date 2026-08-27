import competitions from "../../data/competitions.json";
import { sortByDateAscending } from "../../utils/sortData";

import PageHeader from "../../components/common/PageHeader";
import CompetitionGrid from "../../components/competition/CompetitionGrid";

function Competitions() {
  const sortedCompetitions = sortByDateAscending(competitions, "date");

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Challenges & Events"
          title="Competitions"
          description="Competitions, hackathons, coding events, and challenges where I have participated and applied my skills."
        />

        <CompetitionGrid competitions={sortedCompetitions} />
      </div>
    </section>
  );
}

export default Competitions;