import { useEffect, useState } from "react";
import { AlertTriangle, CalendarDays, Info, Wrench, X } from "lucide-react";

import { APP_CONFIG } from "../../constants/appConfig";
import portfolioStatus from "../../data/portfolioStatus.json";
import formatDate from "../../utils/formatDate";

function PortfolioStatusAlert() {
  const [isOpen, setIsOpen] = useState(false);

  /*
    Create a unique key from the three status values.

    Example:

    isDataUpdated: true
    isUnderDevelopment: false
    isUnderMaintenance: false

    Result:
    "100"
  */
  const statusKey = [
    APP_CONFIG.isDataUpdated,
    APP_CONFIG.isUnderDevelopment,
    APP_CONFIG.isUnderMaintenance,
  ]
    .map((value) => (value ? "1" : "0"))
    .join("");

  // Get the matching status configuration from JSON.
  const status = portfolioStatus[statusKey];

  useEffect(() => {
    // Only open the alert when the current status
    // is configured to be shown.
    if (status?.show) {
      setIsOpen(true);
    }
  }, [status]);

  // Do not render anything for normal status
  // or if the alert has been closed.
  if (!isOpen || !status?.show) {
    return null;
  }

  const getStatusIcon = () => {
    switch (status.type) {
      case "maintenance":
        return <Wrench size={28} />;

      case "development":
        return <Info size={28} />;

      case "warning":
      default:
        return <AlertTriangle size={28} />;
    }
  };

  const getStatusStyles = () => {
    switch (status.type) {
      case "maintenance":
        return {
          border: "border-orange-500/20",
          line: "bg-orange-400/80",
          icon: "bg-orange-500/10 text-orange-400",
        };

      case "development":
        return {
          border: "border-blue-500/20",
          line: "bg-blue-400/80",
          icon: "bg-blue-500/10 text-blue-400",
        };

      case "warning":
      default:
        return {
          border: "border-yellow-500/20",
          line: "bg-yellow-400/80",
          icon: "bg-yellow-500/10 text-yellow-400",
        };
    }
  };

  const styles = getStatusStyles();

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="portfolio-status-title"
    >
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-3xl border bg-[#0d1420] shadow-2xl shadow-black/50 ${styles.border}`}
      >
        {/* Top Status Line */}
        <div className={`h-1 ${styles.line}`} />

        {/* Close Button */}
        <button
          type="button"
          onClick={() => setIsOpen(false)}
          className="absolute right-4 top-5 rounded-xl p-2 text-gray-400 transition hover:bg-white/10 hover:text-white"
          aria-label="Close portfolio status alert"
        >
          <X size={20} />
        </button>

        <div className="p-6 sm:p-8">
          {/* Status Icon */}
          <div
            className={`flex h-14 w-14 items-center justify-center rounded-2xl ${styles.icon}`}
          >
            {getStatusIcon()}
          </div>

          {/* Title */}
          <h2
            id="portfolio-status-title"
            className="mt-6 text-2xl font-bold text-white"
          >
            {status.title}
          </h2>

          {/* Description */}
          <p className="mt-3 leading-7 text-gray-400">{status.description}</p>

          {/* Last Updated */}
          <div className="mt-6 flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400">
              <CalendarDays size={20} />
            </div>

            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-gray-500">
                Last updated
              </p>

              <p className="mt-1 font-semibold text-gray-200">
                {formatDate(APP_CONFIG.lastUpdated)}
              </p>
            </div>
          </div>

          {/* Additional Notice */}
          {status.notice && (
            <div className="mt-4 flex gap-3 rounded-2xl bg-blue-500/5 p-4">
              <Info size={19} className="mt-0.5 shrink-0 text-blue-400" />

              <p className="text-sm leading-6 text-gray-400">{status.notice}</p>
            </div>
          )}

          {/* Continue Button */}
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="mt-6 w-full rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
          >
            {status.buttonText || "Continue to Portfolio"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default PortfolioStatusAlert;
