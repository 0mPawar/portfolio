import CertificateCard from "./CertificateCard";

function CertificateGrid({ certificates = [] }) {
  if (!certificates.length) {
    return (
      <div className="rounded-2xl border border-dashed border-gray-300 p-10 text-center dark:border-white/10">
        <p className="text-gray-500 dark:text-gray-400">
          No certificates available yet.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {certificates.map((certificate) => (
        <CertificateCard
          key={certificate.id}
          certificate={certificate}
        />
      ))}
    </div>
  );
}

export default CertificateGrid;