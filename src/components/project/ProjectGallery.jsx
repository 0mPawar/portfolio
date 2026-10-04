import { useEffect, useRef, useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Play,
  X,
} from "lucide-react";
import { getAssetUrl } from "../../utils/getAssetUrl";

function ProjectGallery({ project }) {
  const media = Array.isArray(project.media) ? project.media : [];
  const [activeIndex, setActiveIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const closeButtonRef = useRef(null);
  const dialogRef = useRef(null);
  const openerRef = useRef(null);

  function showPrevious() {
    setActiveIndex((index) => (index - 1 + media.length) % media.length);
  }

  function showNext() {
    setActiveIndex((index) => (index + 1) % media.length);
  }

  function openLightbox(index, event) {
    openerRef.current = event.currentTarget;
    setActiveIndex(index);
    setIsOpen(true);
  }

  function closeLightbox() {
    setIsOpen(false);
  }

  useEffect(() => {
    if (!isOpen) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeLightbox();
      } else if (media.length > 1 && event.key === "ArrowLeft") {
        event.preventDefault();
        setActiveIndex((index) => (index - 1 + media.length) % media.length);
      } else if (media.length > 1 && event.key === "ArrowRight") {
        event.preventDefault();
        setActiveIndex((index) => (index + 1) % media.length);
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      openerRef.current?.focus();
    };
  }, [isOpen, media.length]);

  function trapDialogFocus(event) {
    if (event.key !== "Tab") return;

    const focusableElements = dialogRef.current?.querySelectorAll(
      'button:not([disabled]), video[controls], [href], [tabindex]:not([tabindex="-1"])',
    );
    if (!focusableElements?.length) return;

    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];

    if (event.shiftKey && document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    } else if (!event.shiftKey && document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }

  const activeMedia = media[activeIndex];

  return (
    <section
      aria-labelledby={`project-media-heading-${project.id}`}
      className="mt-8"
    >
      <div>
        <h2
          id={`project-media-heading-${project.id}`}
          className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
        >
          Project Screenshots
        </h2>
        <p className="mt-2 text-sm leading-6 text-gray-600 dark:text-gray-400">
          Screenshots and media from {project.name}.
        </p>
      </div>

      {media.length > 0 ? (
        <div className="mt-5 max-w-full overflow-x-auto overscroll-x-contain pb-2">
          <div className="flex w-max min-w-full gap-3">
            {media.map((item, index) => (
              <button
                key={item.src}
                type="button"
                onClick={(event) => openLightbox(index, event)}
                aria-label={`Open ${item.type === "video" ? "video" : "image"} ${index + 1} of ${media.length}: ${item.alt || project.name}`}
                aria-current={index === activeIndex ? "true" : undefined}
                className={`group relative flex h-28 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl border bg-gray-50 p-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 sm:h-36 sm:w-28 sm:p-2 dark:bg-white/[0.03] dark:focus-visible:outline-blue-400 ${
                  index === activeIndex
                    ? "border-blue-600 ring-2 ring-blue-500/30 dark:border-blue-400"
                    : "border-gray-200 hover:border-blue-300 dark:border-white/10 dark:hover:border-blue-500/50"
                }`}
              >
                {item.type === "video" ? (
                  item.poster ? (
                    <img
                      src={getAssetUrl(item.poster)}
                      alt=""
                      loading="lazy"
                      className="h-full w-full object-contain"
                    />
                  ) : (
                    <span
                      aria-hidden="true"
                      className="flex h-full w-full items-center justify-center text-gray-500 dark:text-gray-400"
                    >
                      <Play size={28} />
                    </span>
                  )
                ) : (
                  <img
                    src={getAssetUrl(item.src)}
                    alt=""
                    loading="lazy"
                    className="h-full w-full object-contain"
                  />
                )}

                {item.type === "video" && (
                  <span
                    aria-hidden="true"
                    className="absolute bottom-2 right-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/70 text-white"
                  >
                    <Play size={14} fill="currentColor" />
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <p className="mt-5 rounded-2xl border border-dashed border-gray-300 p-6 text-sm text-gray-600 dark:border-white/10 dark:text-gray-400">
          <span className="block font-medium text-gray-800 dark:text-gray-200">
            No screenshots available
          </span>
          <span className="mt-1 block">
            Project images and media have not been added yet.
          </span>
        </p>
      )}

      {isOpen && activeMedia && (
        <div
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${project.name} media viewer`}
          onKeyDown={trapDialogFocus}
          onClick={(event) => {
            if (event.target === event.currentTarget) closeLightbox();
          }}
          className="fixed inset-0 z-[100] flex flex-col bg-black/95 p-3 pt-16 text-white sm:p-6 sm:pt-16"
        >
          <button
            ref={closeButtonRef}
            type="button"
            onClick={closeLightbox}
            aria-label="Close media viewer"
            className="absolute right-3 top-3 z-10 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:right-5 sm:top-5"
          >
            <X size={22} aria-hidden="true" />
          </button>

          <div className="flex min-h-0 flex-1 items-center justify-center gap-2 sm:gap-5">
            {media.length > 1 && (
              <button
                type="button"
                onClick={showPrevious}
                aria-label="Show previous media"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-12 sm:w-12"
              >
                <ChevronLeft size={24} aria-hidden="true" />
              </button>
            )}

            <div className="flex h-full min-w-0 flex-1 items-center justify-center">
              {activeMedia.type === "video" ? (
                <video
                  key={activeMedia.src}
                  src={getAssetUrl(activeMedia.src)}
                  poster={getAssetUrl(activeMedia.poster)}
                  controls
                  playsInline
                  preload="metadata"
                  aria-label={activeMedia.alt || `${project.name} video`}
                  className="max-h-full max-w-full object-contain"
                >
                  Your browser does not support HTML video.
                </video>
              ) : (
                <img
                  key={activeMedia.src}
                  src={getAssetUrl(activeMedia.src)}
                  alt={activeMedia.alt || `${project.name} screenshot`}
                  className="max-h-full max-w-full object-contain"
                />
              )}
            </div>

            {media.length > 1 && (
              <button
                type="button"
                onClick={showNext}
                aria-label="Show next media"
                className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:h-12 sm:w-12"
              >
                <ChevronRight size={24} aria-hidden="true" />
              </button>
            )}
          </div>

          <p
            aria-live="polite"
            className="mt-3 shrink-0 text-center text-sm text-white/80"
          >
            {activeIndex + 1} / {media.length}
          </p>
        </div>
      )}
    </section>
  );
}

export default ProjectGallery;
