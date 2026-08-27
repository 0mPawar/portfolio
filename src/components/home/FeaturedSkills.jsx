import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import skills from "../../data/skills.json";
import { ROUTES } from "../../constants/routes";

import SkillCard from "../skill/SkillCard";

function FeaturedSkills() {
  const featuredSkills = skills.slice(0, 4);

  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Expertise
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Core Skills
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              Areas I focus on while building applications.
            </p>
          </div>

          <Link
            to={ROUTES.SKILLS}
            className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
          >
            View all skills
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredSkills.map((skill) => (
            <SkillCard
              key={skill.id}
              skill={skill}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedSkills;