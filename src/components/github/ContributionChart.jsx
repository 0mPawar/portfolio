import { GitHubCalendar } from "react-github-calendar";

import Loader from "../common/Loader";
import useLoader from "../../hooks/useLoader";

function ContributionChart({
  username = "0mPawar",
  loaderDuration = 3000,
}) {
  const isLoading = useLoader(loaderDuration);

  return (
    <section>
      {/* Section Header */}
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Activity
        </p>

        <h2 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Contributions
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
          My GitHub contribution activity.
        </p>
      </div>

      {/* Contribution Calendar */}
      <div className="relative mt-8 overflow-x-auto rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
        {/* Calendar loads immediately */}
        <div
          className={`transition-opacity duration-300 ${
            isLoading ? "opacity-0" : "opacity-100"
          }`}
        >
          <div className="w-fit min-w-max">
            <GitHubCalendar
              username={username}
              colorScheme="dark"
              blockSize={15}
              blockMargin={5}
              fontSize={14}
            />
          </div>
        </div>

        {/* Loader overlay */}
        {isLoading && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-white dark:bg-[#0d1420]">
            <Loader
              size="md"
              label="Loading contributions..."
            />
          </div>
        )}
      </div>
    </section>
  );
}

export default ContributionChart;