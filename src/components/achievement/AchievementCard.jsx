import {
  Award,
  Calendar,
  Trophy,
} from "lucide-react";
import { getAssetUrl } from "../../utils/getAssetUrl";

function AchievementCard({ achievement }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30">
      <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden bg-gray-100 dark:bg-white/5">
        {achievement.image ? (
          <img
            src={getAssetUrl(achievement.image)}
            alt={achievement.title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <Trophy
            size={52}
            className="text-blue-600 dark:text-blue-400"
          />
        )}

        {achievement.result && (
          <span className="absolute bottom-4 left-4 rounded-full bg-black/60 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {achievement.result}
          </span>
        )}
      </div>

      <div className="p-5">
        <div className="flex items-start gap-3">
          <Award
            size={20}
            className="mt-1 shrink-0 text-blue-600 dark:text-blue-400"
          />

          <div>
            <h2 className="font-bold text-gray-900 dark:text-white">
              {achievement.title}
            </h2>

            {achievement.organization && (
              <p className="mt-1 text-sm text-blue-600 dark:text-blue-400">
                {achievement.organization}
              </p>
            )}
          </div>
        </div>

        {achievement.description && (
          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {achievement.description}
          </p>
        )}

        {achievement.date && (
          <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
            <Calendar size={15} />
            {achievement.date}
          </div>
        )}
      </div>
    </article>
  );
}

export default AchievementCard;