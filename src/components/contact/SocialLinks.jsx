import { ExternalLink } from "lucide-react";

import socialLinks from "../../data/socialLinks.json";
import Icon from "../common/Icon";

function SocialLinks() {
  const activeSocialLinks = socialLinks.filter(
    (social) => social.url
  );

  if (!activeSocialLinks.length) {
    return null;
  }

  return (
    <section>
      <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
        Online
      </p>

      <h2 className="mt-2 text-2xl font-bold text-gray-900 dark:text-white">
        Find Me Online
      </h2>

      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {activeSocialLinks.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-3 rounded-xl border border-gray-200 bg-white p-4 transition hover:border-blue-300 hover:shadow-md dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-blue-500/30"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100 text-gray-700 transition group-hover:bg-blue-500/10 group-hover:text-blue-600 dark:bg-white/5 dark:text-gray-300 dark:group-hover:text-blue-400">
              <Icon
                name={social.icon}
                type={social.iconLibrary || "lucide"}
                size={19}
              />
            </div>

            <span className="flex-1 font-medium text-gray-800 dark:text-gray-200">
              {social.name}
            </span>

            <ExternalLink
              size={16}
              className="text-gray-400 transition group-hover:text-blue-600 dark:group-hover:text-blue-400"
            />
          </a>
        ))}
      </div>
    </section>
  );
}

export default SocialLinks;