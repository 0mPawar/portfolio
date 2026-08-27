import profile from "../../data/profile.json";

import PageHeader from "../../components/common/PageHeader";

function About() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Get to Know Me"
          title="About Me"
          description="A little more about who I am, what I do, and what I enjoy building."
        />

        <div className="grid gap-12 lg:grid-cols-[280px_minmax(0,1fr)]">
          {/* Profile Image */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-gray-100 dark:border-white/10 dark:bg-white/5">
              {profile.image ? (
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="aspect-square w-full object-cover"
                />
              ) : (
                <div className="flex aspect-square items-center justify-center text-6xl font-bold text-gray-400">
                  {profile.name?.charAt(0)}
                </div>
              )}
            </div>
          </div>

          {/* Content */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Hello, I&apos;m
            </p>

            <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
              {profile.name}
            </h1>

            {profile.title && (
              <p className="mt-4 text-xl font-medium text-gray-600 dark:text-gray-300">
                {profile.title}
              </p>
            )}

            <div className="mt-10 space-y-6 text-base leading-8 text-gray-700 dark:text-gray-300">
              {profile.about?.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Interests */}
            {profile.interests?.length > 0 && (
              <div className="mt-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                  What I&apos;m Interested In
                </h2>

                <div className="mt-5 flex flex-wrap gap-3">
                  {profile.interests.map((interest) => (
                    <span
                      key={interest}
                      className="rounded-full border border-gray-200 bg-gray-50 px-4 py-2 text-sm font-medium text-gray-700 dark:border-white/10 dark:bg-white/5 dark:text-gray-300"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Currently */}
            {profile.currently && (
              <div className="mt-12 rounded-2xl border border-gray-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
                  Currently
                </p>

                <p className="mt-3 text-lg leading-8 text-gray-700 dark:text-gray-300">
                  {profile.currently}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;