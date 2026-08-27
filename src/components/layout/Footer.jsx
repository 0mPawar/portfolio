import { Link } from "react-router-dom";

import profile from "../../data/profile.json";
import socialLinks from "../../data/socialLinks.json";
import navigation from "../../data/navigation.json";
import portfolioStatus from "../../data/portfolioStatus.json";

import { APP_CONFIG } from "../../constants/appConfig";
import formatDate from "../../utils/formatDate";

import Icon from "../common/Icon";

function Footer() {
  const footerNavigation = [
    ...navigation.mainNavigation,
    ...navigation.moreNavigation,
  ];

  const formattedDate = formatDate(APP_CONFIG.lastUpdated, {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  const statusKey = [
    APP_CONFIG.isDataUpdated,
    APP_CONFIG.isUnderDevelopment,
    APP_CONFIG.isUnderMaintenance,
  ]
    .map((value) => (value ? "1" : "0"))
    .join("");

  const currentStatus = portfolioStatus[statusKey];

  const isPortfolioReady = !currentStatus?.show;

  return (
    <footer className="border-t border-gray-200 bg-gray-50 dark:border-white/10 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-3">
          {/* About */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 dark:text-white">
              {APP_CONFIG.name}
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-600 dark:text-gray-400">
              {profile.shortBio}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Navigation
            </h3>

            <div className="mt-4 grid grid-cols-2 gap-x-6 gap-y-3">
              {footerNavigation.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="group flex items-center gap-2 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                >
                  <Icon
                    name="ArrowRight"
                    type="lucide"
                    size={14}
                    className="text-gray-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-500 dark:text-gray-500 dark:group-hover:text-blue-400"
                  />

                  <span>{link.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white">
              Connect
            </h3>

            <div className="mt-4 flex flex-col gap-3">
              {socialLinks.map((social) => {
                const isEmail = social.url.startsWith("mailto:");

                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target={isEmail ? undefined : "_blank"}
                    rel={isEmail ? undefined : "noreferrer"}
                    className="group flex w-fit items-center gap-3 text-sm text-gray-600 transition-colors hover:text-blue-500 dark:text-gray-400 dark:hover:text-blue-400"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-200/70 text-gray-600 transition-all group-hover:scale-105 group-hover:bg-blue-500/10 group-hover:text-blue-500 dark:bg-white/5 dark:text-gray-400 dark:group-hover:text-blue-400">
                      <Icon
                        name={social.icon}
                        type={social.iconLibrary}
                        size={16}
                      />
                    </span>

                    <div className="flex flex-col">
                      <span>{social.name}</span>

                      {social.username && (
                        <span className="text-xs text-gray-400 dark:text-gray-500">
                          {social.username}
                        </span>
                      )}
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-gray-200 pt-6 text-sm text-gray-500 dark:border-white/10 dark:text-gray-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {APP_CONFIG.copyrightYear} {APP_CONFIG.name}. All rights
            reserved.
          </p>

          <div className="flex items-center gap-2">
            <span
              className={`h-2 w-2 rounded-full ${
                isPortfolioReady ? "bg-green-500" : "bg-red-500"
              }`}
              aria-hidden="true"
            />

            <span>Last updated: {formattedDate}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;