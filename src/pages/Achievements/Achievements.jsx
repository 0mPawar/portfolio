import achievements from "../../data/achievements.json";
import { sortByDateAscending } from "../../utils/sortData";

import PageHeader from "../../components/common/PageHeader";
import AchievementGrid from "../../components/achievement/AchievementGrid";

function Achievements() {
  const sortedAchievements = sortByDateAscending(achievements, "date");

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Milestones & Accomplishments"
          title="Achievements"
          description="A collection of meaningful milestones, accomplishments, recognitions, and goals achieved throughout my journey."
        />

        <AchievementGrid achievements={sortedAchievements} />
      </div>
    </section>
  );
}

export default Achievements;