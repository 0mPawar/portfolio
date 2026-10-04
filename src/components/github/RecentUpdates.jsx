import portfolioUpdates from "../../data/portfolioUpdates.json";
import formatDate from "../../utils/formatDate";

function RecentUpdates() {
  const sortedUpdates = [...portfolioUpdates].sort((first, second) =>
    second.date.localeCompare(first.date),
  );

  return (
    <section aria-labelledby="recent-updates-heading">
      <div className="max-w-2xl">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Changelog
        </p>

        <h2
          id="recent-updates-heading"
          className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Recent Updates
        </h2>

        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
          Recent changes and improvements made to this portfolio.
        </p>
      </div>

      {sortedUpdates.length > 0 ? (
        <ol className="mt-8 space-y-4">
          {sortedUpdates.map((update) => (
            <li key={update.id}>
              <article className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03] sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <time
                    dateTime={update.date}
                    className="text-sm font-medium text-gray-500 dark:text-gray-400"
                  >
                    {formatDate(update.date)}
                  </time>

                  {update.type && (
                    <span className="rounded-full bg-blue-500/10 px-3 py-1 text-xs font-medium text-blue-700 dark:text-blue-300">
                      {update.type}
                    </span>
                  )}
                </div>

                <h3 className="mt-3 break-words text-lg font-semibold text-gray-900 dark:text-white">
                  {update.title}
                </h3>

                <p className="mt-2 break-words text-sm leading-6 text-gray-600 dark:text-gray-400">
                  {update.description}
                </p>
              </article>
            </li>
          ))}
        </ol>
      ) : (
        <p className="mt-8 rounded-2xl border border-dashed border-gray-300 p-6 text-sm text-gray-600 dark:border-white/10 dark:text-gray-400">
          No recent updates available.
        </p>
      )}
    </section>
  );
}

export default RecentUpdates;
