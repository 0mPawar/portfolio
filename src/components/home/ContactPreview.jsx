import { Link } from "react-router-dom";
import { ArrowRight, Send } from "lucide-react";

import { ROUTES } from "../../constants/routes";

import SocialLinks from "../contact/SocialLinks";

function ContactPreview() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-500/10 via-white/[0.03] to-transparent p-8 sm:p-12">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-500/10 text-blue-400">
              <Send size={30} />
            </div>

            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-blue-500">
              Get In Touch
            </p>

            <h2 className="mt-3 text-3xl font-bold text-white sm:text-4xl">
              Let's build something together
            </h2>

            <p className="mt-3 leading-8 text-gray-400">
              Have a project, opportunity or idea you would like to discuss?
              Feel free to get in touch.
            </p>

            <div className="mt-8 flex justify-center">
              <Link
                to={ROUTES.CONTACT}
                className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-500"
              >
                Contact Me
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="mt-8 flex justify-center">
              <SocialLinks />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactPreview;