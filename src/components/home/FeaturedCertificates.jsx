import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import certificates from "../../data/certificates.json";
import { ROUTES } from "../../constants/routes";

import CertificateCard from "../certificate/CertificateCard";

function FeaturedCertificates() {
  const featuredCertificates = certificates.slice(0, 3);

  if (!featuredCertificates.length) {
    return null;
  }

  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Learning
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Certificates
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              Certifications and completed learning milestones.
            </p>
          </div>

          <Link
            to={ROUTES.CERTIFICATES}
            className="inline-flex items-center gap-2 font-semibold text-blue-400 hover:text-blue-300"
          >
            View all certificates
            <ArrowRight size={18} />
          </Link>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {featuredCertificates.map((certificate) => (
            <CertificateCard
              key={certificate.id}
              certificate={certificate}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedCertificates;