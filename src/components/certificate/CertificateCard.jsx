import { useState } from "react";
import { Award, Calendar, Eye, Info } from "lucide-react";

import CertificatePreview from "./CertificatePreview";
import CertificateDetails from "./CertificateDetails";

function CertificateCard({ certificate }) {
  const [isHovered, setIsHovered] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  return (
    <>
      <article
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group overflow-hidden rounded-2xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30"
      >
        {/* Certificate Image */}
        <div className="relative aspect-[16/10] overflow-hidden bg-gray-100 dark:bg-white/5">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              className={`h-full w-full object-cover transition-transform duration-500 ${
                isHovered ? "scale-105" : "scale-100"
              }`}
            />
          ) : (
            <div className="flex h-full items-center justify-center">
              <Award size={48} className="text-gray-300 dark:text-gray-600" />
            </div>
          )}

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

          <span className="absolute bottom-4 left-4 rounded-full bg-black/50 px-3 py-1 text-xs font-medium text-white backdrop-blur">
            {certificate.type || "Certificate"}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white">
            {certificate.title}
          </h2>

          {certificate.issuer && (
            <p className="mt-2 text-sm text-blue-600 dark:text-blue-400">
              {certificate.issuer}
            </p>
          )}

          {certificate.date && (
            <div className="mt-3 flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
              <Calendar size={15} />
              <span>{certificate.date}</span>
            </div>
          )}

          {certificate.description && (
            <p className="mt-4 line-clamp-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
              {certificate.description}
            </p>
          )}

          {/* Actions */}
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => setShowPreview(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-white/10 dark:text-gray-300 dark:hover:bg-white/5"
            >
              <Eye size={16} />
              Preview
            </button>

            <button
              type="button"
              onClick={() => setShowDetails(true)}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-3 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700"
            >
              <Info size={16} />
              Info
            </button>
          </div>
        </div>
      </article>

      {/* Preview Modal */}
      {showPreview && (
        <CertificatePreview
          certificate={certificate}
          onClose={() => setShowPreview(false)}
        />
      )}

      {/* Details Modal */}
      {showDetails && (
        <CertificateDetails
          certificate={certificate}
          onClose={() => setShowDetails(false)}
        />
      )}
    </>
  );
}

export default CertificateCard;
