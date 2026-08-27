import { Link } from "react-router-dom";
import { ArrowRight, Download, Mail } from "lucide-react";

import profile from "../../data/profile.json";
import { ROUTES } from "../../constants/routes";

function Hero() {
  const name = profile.name || "Your Name";
  const role =
    profile.role ||
    profile.title ||
    "Full Stack Developer";

  const tagline =
    profile.tagline ||
    profile.shortBio ||
    "Building modern, scalable and user-friendly applications.";

  const image =
    profile.image ||
    profile.profileImage ||
    "/images/profile/profile.png";

  return (
    <section className="relative overflow-hidden px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
        {/* Content */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
            Welcome to my portfolio
          </p>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-blue-500">
              {name}
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-semibold text-gray-300 sm:text-3xl">
            {role}
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 sm:text-lg">
            {tagline}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to={ROUTES.PROJECTS}
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-500"
            >
              View Projects
              <ArrowRight size={18} />
            </Link>

            <Link
              to={ROUTES.CONTACT}
              className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/5 px-5 py-3 font-semibold text-white transition hover:bg-white/10"
            >
              <Mail size={18} />
              Contact Me
            </Link>

            {profile.resume && (
              <a
                href={profile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold text-gray-300 transition hover:bg-white/5 hover:text-white"
              >
                <Download size={18} />
                Resume
              </a>
            )}
          </div>
        </div>

        {/* Profile Image */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute -inset-4 rounded-full bg-blue-500/10 blur-3xl" />

            <div className="relative h-64 w-64 overflow-hidden rounded-3xl border border-white/10 bg-white/5 sm:h-80 sm:w-80">
              <img
                src={image}
                alt={name}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;