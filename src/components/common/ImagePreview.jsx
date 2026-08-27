import { X } from "lucide-react";
import { getAssetUrl } from "../../utils/getAssetUrl";

function ImagePreview({ image, onClose }) {
  if (!image) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm sm:p-8"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={image.alt || image.title || "Image preview"}
    >
      <div
        className="relative flex max-h-[90vh] max-w-[95vw] flex-col items-center"
        onClick={(event) => event.stopPropagation()}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute right-2 top-2 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-black/60 text-white shadow-lg backdrop-blur-sm transition hover:scale-105 hover:bg-black/80"
          aria-label="Close image preview"
        >
          <X size={20} />
        </button>

        <img
          src={getAssetUrl(image.src)}
          alt={image.alt || "Project screenshot"}
          className="max-h-[85vh] max-w-full rounded-2xl object-contain shadow-2xl"
        />

        {image.title && (
          <div className="mt-3 max-w-full px-4 text-center">
            <p className="text-sm font-medium text-white">
              {image.title}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default ImagePreview;