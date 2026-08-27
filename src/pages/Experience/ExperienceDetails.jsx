import { useParams, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  BriefcaseBusiness,
  Calendar,
  MapPin,
} from "lucide-react";

import experiences from "../../data/experience.json";

import BackButton from "../../components/common/BackButton";
import ExperienceOverview from "../../components/experience/ExperienceOverview";
import ExperienceProjects from "../../components/experience/ExperienceProjects";

import { ROUTES } from "../../constants/routes";

function ExperienceDetails() {
  const { id } = useParams();

  const experience = experiences.find(
    (item) => String(item.id) === String(id)
  );

  if (!experience) {
    return <Navigate to={ROUTES.NOT_FOUND} replace />;
  }

  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const duration = `${formatDate(experience.startDate)} — ${
    experience.current ? "Present" : formatDate(experience.endDate)
  }`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <BackButton />

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Main Info */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* Logo */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                {experience.logo ? (
                  <img
                    src={experience.logo}
                    alt={`${experience.company} logo`}
                    className="h-full w-full object-contain p-3"
                  />
                ) : (
                  <BriefcaseBusiness
                    size={38}
                    className="text-gray-400"
                  />
                )}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  {experience.type || "Experience"}
                </p>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  {experience.role}
                </h1>

                <p className="mt-3 text-lg font-medium text-gray-600 dark:text-gray-300">
                  {experience.company}
                </p>
              </div>
            </div>

            {/* Meta Information */}
            <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400">
              {experience.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={17} />
                  {experience.location}
                </div>
              )}

              <div className="flex items-center gap-2">
                <Calendar size={17} />
                {duration}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-16">
          <ExperienceOverview experience={experience} />

          <ExperienceProjects experience={experience} />
        </div>
      </main>
    </div>
  );
}

export default ExperienceDetails;