import { NavLink } from "react-router-dom";

import navigation from "../../data/navigation.json";

function MoreMenu() {
  return (
    <div className="invisible absolute right-0 top-full z-50 mt-3 w-52 translate-y-1 rounded-xl border border-gray-200 bg-white p-2 opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 dark:border-white/10 dark:bg-gray-950">
      {navigation.moreNavigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          className={({ isActive }) =>
            `block rounded-lg px-3 py-2 text-sm transition-colors ${
              isActive
                ? "bg-gray-100 font-medium text-blue-600 dark:bg-white/10 dark:text-blue-400"
                : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-white/10"
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </div>
  );
}

export default MoreMenu;
