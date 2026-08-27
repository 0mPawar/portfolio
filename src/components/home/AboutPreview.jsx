import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

import profile from "../../data/profile.json";
import { ROUTES } from "../../constants/routes";

function AboutPreview() {
  const about = profile.about;

  let previewText = "";

  if (Array.isArray(about)) {
    previewText = about[0];
  } else if (typeof about === "string") {
    previewText = about;
  } else {
    previewText =
      profile.bio ||
      profile.description ||
      "Learn more about my background, skills and journey as a developer.";
  }

  return (
    <section className="border-y border-white/5 bg-white/[0.02] px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          {/* OP Identity */}
          <div className="flex justify-center">
            <div className="flex h-32 w-32 items-center justify-center rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/20 to-blue-500/5">
              <span className="text-4xl font-bold tracking-tight text-blue-400">
                OP
              </span>
            </div>
          </div>

          {/* About Content */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              About Me
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              A little about who I am
            </h2>

            <p className="mt-3 max-w-2xl text-gray-400">
              {previewText}
            </p>

            <Link
              to={ROUTES.ABOUT}
              className="mt-7 inline-flex items-center gap-2 font-semibold text-blue-400 transition hover:text-blue-300"
            >
              Learn more about me
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutPreview;