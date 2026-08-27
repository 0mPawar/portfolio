import ExperienceCard from "./ExperienceCard";

function ExperienceTimeline({ experiences = [] }) {
  if (!experiences.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center dark:border-white/10">
        <p className="text-gray-500 dark:text-gray-400">
          No experience information available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Mobile timeline */}
      <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gray-200 dark:bg-white/10 sm:hidden" />

      {/* Desktop timeline */}
      <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gray-200 dark:bg-white/10 sm:block" />

      <div className="space-y-10">
        {experiences.map((experience, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={experience.id}
              className="relative sm:grid sm:grid-cols-2 sm:gap-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[11px] top-8 z-10 h-[17px] w-[17px] rounded-full border-4 border-white bg-blue-600 dark:border-gray-950 sm:left-1/2 sm:-translate-x-1/2">
                <span className="block h-full w-full rounded-full bg-blue-600" />
              </div>

              {/* Left side on desktop */}
              {isLeft && (
                <div className="hidden sm:block sm:pr-6">
                  <ExperienceCard experience={experience} />
                </div>
              )}

              {/* Empty left side */}
              {!isLeft && (
                <div className="hidden sm:block" />
              )}

              {/* Card */}
              <div
                className={`pl-12 sm:pl-6 ${
                  isLeft
                    ? "sm:col-start-2 sm:hidden"
                    : "sm:col-start-2"
                }`}
              >
                {/* Mobile */}
                <div className="sm:hidden">
                  <ExperienceCard experience={experience} />
                </div>

                {/* Desktop right side */}
                {!isLeft && (
                  <div className="hidden sm:block">
                    <ExperienceCard experience={experience} />
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ExperienceTimeline;