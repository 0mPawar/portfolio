function PageHeader({ eyebrow, title, description }) {
  return (
    <div className="mb-10 max-w-2xl">
      {eyebrow && (
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          {eyebrow}
        </p>
      )}

      <h1 className="mt-3 text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
        {title}
      </h1>

      {description && (
        <p className="mt-4 text-base leading-7 text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}

export default PageHeader;