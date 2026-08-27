import * as Icons from "lucide-react";

import stats from "../../data/stats.json";

function Stats() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat) => {
          const Icon = Icons[stat.icon];

          return (
            <div
              key={stat.id}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-6"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
                  {Icon && <Icon size={24} />}
                </div>

                <div>
                  <p className="text-2xl font-bold text-white">
                    {stat.value}
                  </p>

                  <p className="text-sm text-gray-400">
                    {stat.label}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Stats;