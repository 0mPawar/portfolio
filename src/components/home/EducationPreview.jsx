import { Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";

import education from "../../data/education.json";
import { ROUTES } from "../../constants/routes";

function EducationPreview() {
  const latestEducation = education[0];

  if (!latestEducation) {
    return null;
  }

  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 lg:grid-cols-[0.7fr_1.3fr] lg:items-center">
          <div className="flex justify-center">
            <div className="flex h-28 w-28 items-center justify-center rounded-3xl bg-blue-500/10 text-blue-400">
              <GraduationCap size={52} />
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Education
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Academic Journey
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              A look at my academic background and learning journey.
            </p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-[#0d1420] p-6">
              <h3 className="text-xl font-bold text-white">
                {latestEducation.degree}
              </h3>

              <p className="mt-2 text-blue-400">
                {latestEducation.institution}
              </p>

              {latestEducation.field && (
                <p className="mt-2 text-gray-400">
                  {latestEducation.field}
                </p>
              )}

              <Link
                to={ROUTES.EDUCATION}
                className="mt-5 inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
              >
                View education
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationPreview;