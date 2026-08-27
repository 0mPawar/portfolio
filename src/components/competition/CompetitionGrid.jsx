import CompetitionCard from "./CompetitionCard";

function CompetitionGrid({ competitions = [] }) {
  if (!competitions.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center dark:border-white/10">
        <p className="text-gray-500 dark:text-gray-400">
          No competitions available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {competitions.map((competition) => (
        <CompetitionCard
          key={competition.id}
          competition={competition}
        />
      ))}
    </div>
  );
}

export default CompetitionGrid;