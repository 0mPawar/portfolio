import { Link } from "react-router-dom";
import {
  Award,
  BriefcaseBusiness,
  Calendar,
  Code2,
  ExternalLink,
  FolderKanban,
  GraduationCap,
  Trophy,
  X,
} from "lucide-react";

import projects from "../../data/projects.json";
import skills from "../../data/skills.json";
import technologies from "../../data/technologies.json";
import experience from "../../data/experience.json";
import education from "../../data/education.json";
import achievements from "../../data/achievements.json";
import competitions from "../../data/competitions.json";

import {
  getEducationRoute,
  getExperienceRoute,
  getProjectRoute,
} from "../../constants/routes";

import { getAssetUrl } from "../../utils/getAssetUrl";

function CertificateDetails({ certificate, onClose }) {
  if (!certificate) return null;

  const getRelatedItems = (items, ids = []) =>
    items.filter((item) => ids.includes(item.id));

  const relatedProjects = getRelatedItems(projects, certificate.projects);

  const relatedSkills = getRelatedItems(skills, certificate.skills);

  const relatedTechnologies = getRelatedItems(
    technologies,
    certificate.technologies,
  );

  const relatedExperience = getRelatedItems(experience, certificate.experience);

  const relatedEducation = getRelatedItems(education, certificate.education);

  const relatedAchievements = getRelatedItems(
    achievements,
    certificate.achievements,
  );

  const relatedCompetitions = getRelatedItems(
    competitions,
    certificate.competitions,
  );

  const handleBackgroundClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  const rawCredentialUrl =
    certificate.credentialUrl || certificate.url || certificate.link;
  const credentialUrl = getAssetUrl(rawCredentialUrl);

  const hasRelations =
    relatedProjects.length > 0 ||
    relatedSkills.length > 0 ||
    relatedTechnologies.length > 0 ||
    relatedExperience.length > 0 ||
    relatedEducation.length > 0 ||
    relatedAchievements.length > 0 ||
    relatedCompetitions.length > 0;

  return (
    <div
      onClick={handleBackgroundClick}
      role="dialog"
      aria-modal="true"
      aria-labelledby="certificate-details-title"
      className="fixed inset-0 z-[100] flex items-center justify-center overflow-y-auto bg-black/70 p-4 backdrop-blur-sm sm:p-6"
    >
      <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl dark:border-white/10 dark:bg-[#111827]">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-500 shadow-sm transition hover:bg-red-50 hover:text-red-500 dark:border-white/10 dark:bg-[#111827] dark:text-gray-400 dark:hover:bg-red-500/10"
          aria-label="Close certificate details"
        >
          <X size={20} />
        </button>

        {/* Header */}
        <div className="border-b border-gray-200 bg-gradient-to-br from-blue-500/10 via-transparent to-transparent p-6 dark:border-white/10 sm:p-8">
          <div className="pr-12">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
                <Award size={23} />
              </div>

              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-blue-600 dark:text-blue-400">
                  Certificate
                </p>

                {certificate.issuer && (
                  <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                    Issued by {certificate.issuer}
                  </p>
                )}
              </div>
            </div>

            <h2
              id="certificate-details-title"
              className="mt-6 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl dark:text-white"
            >
              {certificate.title}
            </h2>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              {certificate.type && (
                <span className="rounded-full bg-blue-500/10 px-3 py-1.5 text-sm font-medium text-blue-600 dark:text-blue-400">
                  {certificate.type}
                </span>
              )}

              {certificate.date && (
                <span className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-sm text-gray-600 dark:border-white/10 dark:bg-white/5 dark:text-gray-300">
                  <Calendar size={15} />
                  {certificate.date}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[70vh] overflow-y-auto p-6 sm:p-8">
          {/* Description */}
          {certificate.description && (
            <section>
              <SectionHeading title="About this Certificate" icon={Award} />

              <div className="mt-4 rounded-2xl border border-gray-200 bg-gray-50/70 p-5 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="leading-7 text-gray-600 dark:text-gray-400">
                  {certificate.description}
                </p>
              </div>
            </section>
          )}

          {/* Credential Link */}
          {credentialUrl && (
            <div className="mt-8">
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
              >
                View Credential
                <ExternalLink size={16} />
              </a>
            </div>
          )}

          {/* Relations */}
          {hasRelations && (
            <section className="mt-10">
              <SectionHeading
                title="Connected Portfolio Content"
                icon={Code2}
              />

              <div className="mt-6 grid gap-6">
                {relatedProjects.length > 0 && (
                  <RelationSection title="Related Projects" icon={FolderKanban}>
                    {relatedProjects.map((project) => (
                      <RelationLink
                        key={project.id}
                        to={getProjectRoute(project.slug)}
                        onClick={onClose}
                      >
                        <div>
                          <p>{project.name}</p>

                          {project.shortDescription && (
                            <span>{project.shortDescription}</span>
                          )}
                        </div>
                      </RelationLink>
                    ))}
                  </RelationSection>
                )}

                {relatedSkills.length > 0 && (
                  <RelationSection title="Related Skills" icon={Code2}>
                    {relatedSkills.map((skill) => (
                      <RelationBadge key={skill.id} label={skill.name} />
                    ))}
                  </RelationSection>
                )}

                {relatedTechnologies.length > 0 && (
                  <RelationSection title="Related Technologies" icon={Code2}>
                    {relatedTechnologies.map((technology) => (
                      <RelationBadge
                        key={technology.id}
                        label={technology.name}
                      />
                    ))}
                  </RelationSection>
                )}

                {relatedExperience.length > 0 && (
                  <RelationSection
                    title="Related Experience"
                    icon={BriefcaseBusiness}
                  >
                    {relatedExperience.map((item) => (
                      <RelationLink
                        key={item.id}
                        to={getExperienceRoute(item.id)}
                        onClick={onClose}
                      >
                        <div>
                          <p>{item.role}</p>

                          {item.company && <span>{item.company}</span>}
                        </div>
                      </RelationLink>
                    ))}
                  </RelationSection>
                )}

                {relatedEducation.length > 0 && (
                  <RelationSection
                    title="Related Education"
                    icon={GraduationCap}
                  >
                    {relatedEducation.map((item) => (
                      <RelationLink
                        key={item.id}
                        to={getEducationRoute(item.id)}
                        onClick={onClose}
                      >
                        <div>
                          <p>{item.degree}</p>

                          {(item.institution || item.institute) && (
                            <span>{item.institution || item.institute}</span>
                          )}
                        </div>
                      </RelationLink>
                    ))}
                  </RelationSection>
                )}

                {relatedAchievements.length > 0 && (
                  <RelationSection title="Related Achievements" icon={Award}>
                    {relatedAchievements.map((achievement) => (
                      <RelationBadge
                        key={achievement.id}
                        label={achievement.title}
                      />
                    ))}
                  </RelationSection>
                )}

                {relatedCompetitions.length > 0 && (
                  <RelationSection title="Related Competitions" icon={Trophy}>
                    {relatedCompetitions.map((competition) => (
                      <RelationBadge
                        key={competition.id}
                        label={competition.name}
                      />
                    ))}
                  </RelationSection>
                )}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              SECTION HEADING                               */
/* -------------------------------------------------------------------------- */

function SectionHeading({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
        <Icon size={19} />
      </div>

      <h3 className="text-lg font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                              RELATION SECTION                              */
/* -------------------------------------------------------------------------- */

function RelationSection({ title, icon: Icon, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50/50 p-5 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-500/10 text-blue-600 dark:text-blue-400">
          <Icon size={17} />
        </div>

        <h4 className="font-semibold text-gray-900 dark:text-white">{title}</h4>
      </div>

      <div className="mt-4 flex flex-wrap gap-3">{children}</div>
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/*                               RELATION LINK                                */
/* -------------------------------------------------------------------------- */

function RelationLink({ to, onClick, children }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="group flex min-w-[220px] flex-1 items-center justify-between gap-4 rounded-xl border border-gray-200 bg-white px-4 py-3.5 transition hover:border-blue-300 hover:shadow-sm dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30"
    >
      <div className="min-w-0">
        <div className="truncate text-sm font-semibold text-gray-800 dark:text-gray-200">
          {children}
        </div>
      </div>

      <ExternalLink
        size={16}
        className="shrink-0 text-gray-400 transition group-hover:text-blue-600 dark:group-hover:text-blue-400"
      />
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/*                               RELATION BADGE                               */
/* -------------------------------------------------------------------------- */

function RelationBadge({ label }) {
  return (
    <span className="rounded-xl border border-gray-200 bg-white px-3.5 py-2 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/[0.03] dark:text-gray-300">
      {label}
    </span>
  );
}

export default CertificateDetails;
