import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";

import navigation from "../../data/navigation.json";
import { APP_CONFIG } from "../../constants/appConfig";
import MoreMenu from "./MoreMenu";

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const initials = APP_CONFIG.name
    .split(" ")
    .filter(Boolean)
    .map((name) => name.charAt(0).toUpperCase())
    .join("")
    .slice(0, 2);

  const linkClasses = ({ isActive }) =>
    `transition-colors hover:text-blue-500 ${
      isActive
        ? "font-medium text-blue-600 dark:text-blue-400"
        : "text-gray-600 dark:text-gray-300"
    }`;

  const handleMobileToggle = () => {
    setMobileOpen((value) => !value);
  };

  const handleNavigationClick = () => {
    setMobileOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/90 backdrop-blur dark:border-white/10 dark:bg-black/90">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3"
          onClick={handleNavigationClick}
        >
          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white shadow-sm transition-transform hover:scale-105">
            {initials}
          </span>

          <span className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
            {APP_CONFIG.name}
          </span>
        </NavLink>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-6 lg:flex">
          {navigation.mainNavigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={linkClasses}
            >
              {item.label}
            </NavLink>
          ))}

          {/* More Dropdown */}
          <div className="group relative">
            <button
              type="button"
              className="flex items-center gap-1 text-gray-600 transition-colors group-hover:text-blue-500 dark:text-gray-300 dark:group-hover:text-blue-400"
              aria-haspopup="menu"
            >
              More

              <ChevronDown
                size={16}
                className="transition-transform duration-200 group-hover:rotate-180"
              />
            </button>

            <MoreMenu />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="rounded-lg p-2 text-gray-700 transition-colors hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10 lg:hidden"
          onClick={handleMobileToggle}
          aria-label="Toggle navigation"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileOpen && (
        <div className="border-t border-gray-200 bg-white px-4 py-5 dark:border-white/10 dark:bg-black sm:px-6 lg:hidden">
          <nav className="flex flex-col gap-4">
            {/* Main Navigation */}
            {navigation.mainNavigation.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={linkClasses}
                onClick={handleNavigationClick}
              >
                {item.label}
              </NavLink>
            ))}

            {/* More Navigation */}
            <div className="border-t border-gray-200 pt-4 dark:border-white/10">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-400">
                More
              </p>

              <div className="flex flex-col gap-4">
                {navigation.moreNavigation.map((item) => (
                  <NavLink
                    key={item.path}
                    to={item.path}
                    className={linkClasses}
                    onClick={handleNavigationClick}
                  >
                    {item.label}
                  </NavLink>
                ))}
              </div>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

export default Navbar;