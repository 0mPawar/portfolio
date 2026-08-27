import {
  Mail,
  MapPin,
  Copy,
} from "lucide-react";

import profile from "../../data/profile.json";

function ContactInfo() {
  const copyEmail = async () => {
    if (!profile.email) return;

    try {
      await navigator.clipboard.writeText(profile.email);
    } catch (error) {
      console.error("Unable to copy email:", error);
    }
  };

  return (
    <section>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
        Contact Information
      </p>

      <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
        Let&apos;s Talk
      </h2>

      <div className="mt-8 space-y-4">
        {/* Email */}
        {profile.email && (
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <Mail size={21} />
            </div>

            <div className="min-w-0 flex-1">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Email
              </p>

              <a
                href={`mailto:${profile.email}`}
                className="mt-1 block truncate font-medium text-gray-900 hover:text-blue-600 dark:text-white dark:hover:text-blue-400"
              >
                {profile.email}
              </a>
            </div>

            <button
              type="button"
              onClick={copyEmail}
              className="rounded-lg p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
              title="Copy email"
            >
              <Copy size={18} />
            </button>
          </div>
        )}

        {/* Location */}
        {profile.location && (
          <div className="flex items-center gap-4 rounded-2xl border border-gray-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400">
              <MapPin size={21} />
            </div>

            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Location
              </p>

              <p className="mt-1 font-medium text-gray-900 dark:text-white">
                {profile.location}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default ContactInfo;