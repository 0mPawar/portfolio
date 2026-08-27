import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import experience from "../../data/experience.json";
import { ROUTES } from "../../constants/routes";

import ExperienceCard from "../experience/ExperienceCard";

function FeaturedExperience() {
  const featuredExperience = experience.slice(0, 2);

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Career
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Experience
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              Professional experience and practical development work.
            </p>
          </div>

          <Link
            to={ROUTES.EXPERIENCE}
            className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
          >
            View experience
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {featuredExperience.map((item) => (
            <ExperienceCard
              key={item.id}
              experience={item}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedExperience;