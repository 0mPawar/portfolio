import { ExternalLink, X } from "lucide-react";

function CertificatePreview({ certificate, onClose }) {
  if (!certificate) return null;

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      onClick={handleBackgroundClick}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
    >
      <div className="relative flex max-h-[90vh] w-full max-w-6xl flex-col">
        {/* Top Actions */}
        <div className="mb-4 flex items-center justify-between gap-4">
          <div className="min-w-0">
            <h2 className="truncate text-lg font-semibold text-white sm:text-xl">
              {certificate.title}
            </h2>

            {certificate.issuer && (
              <p className="mt-1 text-sm text-gray-300">
                {certificate.issuer}
              </p>
            )}
          </div>

          <div className="flex shrink-0 items-center gap-2">
            {certificate.image && (
              <a
                href={certificate.image}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-2 text-sm font-medium text-white transition hover:bg-white/20"
              >
                <ExternalLink size={17} />
                <span className="hidden sm:inline">Open</span>
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition hover:bg-red-500"
              aria-label="Close preview"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Certificate */}
        <div className="overflow-auto rounded-2xl bg-black/30">
          {certificate.image ? (
            <img
              src={certificate.image}
              alt={certificate.title}
              className="mx-auto max-h-[75vh] w-auto max-w-full object-contain"
            />
          ) : (
            <div className="flex min-h-[400px] items-center justify-center text-gray-400">
              Certificate image not available.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default CertificatePreview;