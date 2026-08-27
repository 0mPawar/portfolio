import {
  CalendarDays,
  Clock3,
  GraduationCap,
  MapPin,
} from "lucide-react";

function EducationOverview({ education }) {
  const formatDate = (date) => {
    if (!date) return "Present";

    return new Date(date).toLocaleDateString("en-US", {
      month: "long",
      year: "numeric",
    });
  };

  const getDuration = () => {
    if (!education.startDate) return null;

    const start = new Date(education.startDate);

    const end = education.current
      ? new Date()
      : education.endDate
        ? new Date(education.endDate)
        : null;

    if (!end || Number.isNaN(start.getTime())) {
      return null;
    }

    let months =
      (end.getFullYear() - start.getFullYear()) * 12 +
      (end.getMonth() - start.getMonth());

    if (end.getDate() < start.getDate()) {
      months -= 1;
    }

    if (months < 1) {
      return "Less than 1 month";
    }

    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;

    const parts = [];

    if (years > 0) {
      parts.push(`${years} ${years === 1 ? "year" : "years"}`);
    }

    if (remainingMonths > 0) {
      parts.push(
        `${remainingMonths} ${
          remainingMonths === 1 ? "month" : "months"
        }`
      );
    }

    return parts.join(" ");
  };

  const details = [
    {
      label: "Duration",
      value: `${formatDate(education.startDate)} — ${
        education.current
          ? "Present"
          : formatDate(education.endDate)
      }`,
      icon: CalendarDays,
    },
    {
      label: "Time Period",
      value: getDuration(),
      icon: Clock3,
    },
    {
      label: "Education Type",
      value: education.type,
      icon: GraduationCap,
    },
    {
      label: "Location",
      value: education.location,
      icon: MapPin,
    },
  ].filter((item) => item.value);

  return (
    <section>
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Overview
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Education Overview
        </h2>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        {/* Description */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 sm:p-8 dark:border-white/10 dark:bg-white/[0.03]">
          <p className="text-base leading-8 text-gray-700 dark:text-gray-300">
            {education.description ||
              education.shortDescription}
          </p>
        </div>

        {/* Details */}
        <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Details
          </h3>

          <div className="mt-6 space-y-5">
            {details.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="flex gap-3"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-gray-600 dark:bg-white/5 dark:text-gray-300">
                    <Icon size={17} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      {item.label}
                    </p>

                    <p className="mt-1 text-sm font-medium text-gray-800 dark:text-gray-200">
                      {item.value}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default EducationOverview;