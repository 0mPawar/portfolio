import {
  Calendar,
  MapPin,
  Trophy,
  Users,
} from "lucide-react";
import { getAssetUrl } from "../../utils/getAssetUrl";

function CompetitionCard({ competition }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30">
      <div className="relative aspect-[16/9] overflow-hidden bg-gray-100 dark:bg-white/5">
        {competition.image ? (
          <img
            src={getAssetUrl(competition.image)}
            alt={competition.name}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <Trophy
              size={52}
              className="text-gray-300 dark:text-gray-600"
            />
          </div>
        )}

        {competition.result && (
          <div className="absolute bottom-4 left-4 rounded-xl bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-lg">
            {competition.result}
          </div>
        )}
      </div>

      <div className="p-5">
        <h2 className="text-xl font-bold text-gray-900 dark:text-white">
          {competition.name}
        </h2>

        {competition.organizer && (
          <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
            {competition.organizer}
          </p>
        )}

        {competition.description && (
          <p className="mt-4 text-sm leading-6 text-gray-600 dark:text-gray-400">
            {competition.description}
          </p>
        )}

        <div className="mt-5 space-y-3 border-t border-gray-100 pt-4 text-sm text-gray-500 dark:border-white/10 dark:text-gray-400">
          {competition.date && (
            <div className="flex items-center gap-2">
              <Calendar size={16} />
              {competition.date}
            </div>
          )}

          {competition.location && (
            <div className="flex items-center gap-2">
              <MapPin size={16} />
              {competition.location}
            </div>
          )}

          {competition.team && (
            <div className="flex items-center gap-2">
              <Users size={16} />
              {competition.team}
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default CompetitionCard;