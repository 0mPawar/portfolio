import { useParams, Navigate } from "react-router-dom";
import {
  Calendar,
  GraduationCap,
  MapPin,
} from "lucide-react";

import educationData from "../../data/education.json";

import BackButton from "../../components/common/BackButton";
import EducationOverview from "../../components/education/EducationOverview";
import EducationProjects from "../../components/education/EducationProjects";

import { ROUTES } from "../../constants/routes";
import { getAssetUrl } from "../../utils/getAssetUrl";

function EducationDetails() {
  const { id } = useParams();

  const education = educationData.find(
    (item) => String(item.id) === String(id)
  );

  if (!education) {
    return <Navigate to={ROUTES.NOT_FOUND} replace />;
  }

  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const duration = `${formatDate(education.startDate)} — ${
    education.current
      ? "Present"
      : formatDate(education.endDate)
  }`;

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="border-b border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <BackButton fallback={ROUTES.EDUCATION} />

          <div className="mt-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            {/* Main Information */}
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              {/* Logo */}
              <div className="flex h-24 w-24 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/5">
                {education.logo ? (
                  <img
                    src={getAssetUrl(education.logo)}
                    alt={`${education.institute} logo`}
                    className="h-full w-full object-contain p-3"
                  />
                ) : (
                  <GraduationCap
                    size={38}
                    className="text-gray-400"
                  />
                )}
              </div>

              {/* Text */}
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
                  {education.type || "Education"}
                </p>

                <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
                  {education.degree}
                </h1>

                {education.field && (
                  <p className="mt-3 text-lg font-medium text-gray-700 dark:text-gray-300">
                    {education.field}
                  </p>
                )}

                <p className="mt-1 text-base text-gray-600 dark:text-gray-400">
                  {education.institute}
                </p>
              </div>
            </div>

            {/* Meta */}
            <div className="flex flex-col gap-3 text-sm text-gray-600 dark:text-gray-400">
              {education.location && (
                <div className="flex items-center gap-2">
                  <MapPin size={17} />
                  {education.location}
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

      {/* Main Content */}
      <main className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-16">
          <EducationOverview education={education} />

          <EducationProjects education={education} />
        </div>
      </main>
    </div>
  );
}

export default EducationDetails;