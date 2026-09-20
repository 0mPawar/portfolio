import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

import { ROUTES } from "../../constants/routes";

function ProjectAvailability() {
  return (
    <section className="px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-transparent p-8 sm:p-10">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 text-blue-500 dark:text-blue-400">
                <Sparkles size={18} />
                <p className="text-sm font-semibold uppercase tracking-[0.2em]">
                  Project Availability
                </p>
              </div>

              <h2 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Looking for a Ready-to-Use Project?
              </h2>

              <p className="mt-4 max-w-xl leading-7 text-gray-600 dark:text-gray-400">
                Some of my projects are available for purchase or customization.
                If you&apos;re interested in a project, source code, or a
                customized version, feel free to contact me.
              </p>
            </div>

            <Link
              to={ROUTES.CONTACT}
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              Contact Me
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectAvailability;
