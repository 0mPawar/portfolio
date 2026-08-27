import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";

function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-4 py-16">
      <div className="mx-auto max-w-xl text-center">
        {/* 404 */}
        <p className="text-8xl font-bold tracking-tight text-gray-200 dark:text-white/10 sm:text-9xl">
          404
        </p>

        {/* Content */}
        <h1 className="mt-6 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
          Page not found
        </h1>

        <p className="mx-auto mt-4 max-w-md text-gray-600 dark:text-gray-400">
          The page you are looking for doesn't exist, has been moved, or the
          URL may be incorrect.
        </p>

        {/* Actions */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-gray-900 px-5 py-3 font-medium text-white transition hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            <Home size={18} />
            Back to Home
          </Link>

          <button
            type="button"
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100 dark:border-white/20 dark:text-gray-200 dark:hover:bg-white/10"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>
      </div>
    </section>
  );
}

export default NotFound;