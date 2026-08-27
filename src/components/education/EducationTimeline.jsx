import EducationCard from "./EducationCard";

function EducationTimeline({ education = [] }) {
  if (!education.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center dark:border-white/10">
        <p className="text-gray-500 dark:text-gray-400">
          No education information available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Mobile Timeline */}
      <div className="absolute bottom-0 left-[19px] top-0 w-px bg-gray-200 dark:bg-white/10 sm:hidden" />

      {/* Desktop Timeline */}
      <div className="absolute bottom-0 left-1/2 top-0 hidden w-px -translate-x-1/2 bg-gray-200 dark:bg-white/10 sm:block" />

      <div className="space-y-10">
        {education.map((item, index) => {
          const isLeft = index % 2 === 0;

          return (
            <div
              key={item.id}
              className="relative sm:grid sm:grid-cols-2 sm:gap-12"
            >
              {/* Timeline Dot */}
              <div className="absolute left-[11px] top-8 z-10 h-[17px] w-[17px] rounded-full border-4 border-white bg-blue-600 dark:border-gray-950 sm:left-1/2 sm:-translate-x-1/2" />

              {/* Desktop Left */}
              <div className="hidden sm:block sm:pr-6">
                {isLeft && <EducationCard education={item} />}
              </div>

              {/* Right / Mobile */}
              <div
                className={`pl-12 sm:pl-6 ${
                  isLeft ? "sm:hidden" : ""
                }`}
              >
                <div className="sm:hidden">
                  <EducationCard education={item} />
                </div>

                {!isLeft && (
                  <div className="hidden sm:block">
                    <EducationCard education={item} />
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

export default EducationTimeline;