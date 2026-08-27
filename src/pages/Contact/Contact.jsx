import PageHeader from "../../components/common/PageHeader";
import ContactInfo from "../../components/contact/ContactInfo";
import SocialLinks from "../../components/contact/SocialLinks";

function Contact() {
  return (
    <section className="px-4 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl">
        <PageHeader
          eyebrow="Get In Touch"
          title="Contact Me"
          description="Have a question, opportunity, or just want to connect? Feel free to reach out."
        />

        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_400px]">
          {/* Contact Information */}
          <div>
            <ContactInfo />

            <div className="mt-10">
              <SocialLinks />
            </div>
          </div>

          {/* Right Side */}
          <div className="rounded-3xl border border-gray-200 bg-gray-50 p-8 dark:border-white/10 dark:bg-white/[0.03]">
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
              Let&apos;s Connect
            </p>

            <h2 className="mt-3 text-3xl font-bold text-gray-900 dark:text-white">
              Have something in mind?
            </h2>

            <p className="mt-4 leading-7 text-gray-600 dark:text-gray-400">
              Whether you want to discuss a project, technology, collaboration,
              or simply connect, you can reach me through any of the platforms
              listed here.
            </p>

            <div className="mt-8 border-t border-gray-200 pt-8 dark:border-white/10">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                I&apos;m always interested in learning, collaborating, and
                connecting with people who enjoy building interesting things.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;