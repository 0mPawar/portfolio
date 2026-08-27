import certificates from "../../data/certificates.json";
import { sortByDateAscending } from "../../utils/sortData";

import PageHeader from "../../components/common/PageHeader";
import CertificateGrid from "../../components/certificate/CertificateGrid";

function Certificates() {
  const sortedCertificates = sortByDateAscending(certificates, "issueDate");

  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Recognition & Credentials"
          title="Certificates"
          description="Certificates and credentials earned through internships, courses, training programs, and other learning experiences."
        />

        <CertificateGrid certificates={sortedCertificates} />
      </div>
    </section>
  );
}

export default Certificates;