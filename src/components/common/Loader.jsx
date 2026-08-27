function Loader({
  size = "md",
  label = "Loading...",
  className = "",
}) {
  const sizes = {
    sm: "h-5 w-5 border-2",
    md: "h-8 w-8 border-[3px]",
    lg: "h-12 w-12 border-4",
  };

  return (
    <div
      className={`flex flex-col items-center justify-center gap-3 ${className}`}
      role="status"
      aria-live="polite"
    >
      <div
        className={`animate-spin rounded-full border-blue-500/20 border-t-blue-500 ${
          sizes[size] || sizes.md
        }`}
      />

      {label && (
        <span className="text-sm text-gray-500 dark:text-gray-400">
          {label}
        </span>
      )}
    </div>
  );
}

export default Loader;