import TechnologyCard from "./TechnologyCard";

function TechnologyGrid({ technologies = [] }) {
  if (!technologies.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center dark:border-white/10">
        <p className="text-gray-500 dark:text-gray-400">
          No technologies available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid items-stretch gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {technologies.map((technology) => (
        <TechnologyCard
          key={technology.id}
          technology={technology}
        />
      ))}
    </div>
  );
}

export default TechnologyGrid;