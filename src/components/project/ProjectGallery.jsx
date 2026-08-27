import { useState } from "react";
import { Images, Maximize2 } from "lucide-react";

import ImagePreview from "../common/ImagePreview";
import { getAssetUrl } from "../../utils/getAssetUrl";

function ProjectGallery({ project }) {
  const [selectedImage, setSelectedImage] = useState(null);

  if (!project.gallery?.length) {
    return null;
  }

  return (
    <section>
      {/* Header */}
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">
          Gallery
        </p>

        <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white">
          Project Screenshots
        </h2>

        <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-600 dark:text-gray-400">
          A visual overview of different screens and features of this project.
        </p>
      </div>

      {/* Gallery */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {project.gallery.map((image, index) => (
          <button
            key={image.id || index}
            type="button"
            onClick={() => setSelectedImage(image)}
            className={`group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-100 text-left dark:border-white/10 dark:bg-white/5 ${
              index === 0 ? "sm:col-span-2" : ""
            }`}
          >
            <img
              src={getAssetUrl(image.src)}
              alt={image.alt || `${project.name} screenshot ${index + 1}`}
              loading="lazy"
              className={`w-full object-cover transition duration-500 group-hover:scale-105 ${
                index === 0
                  ? "aspect-[16/7]"
                  : "aspect-video"
              }`}
            />

            {/* Overlay */}
            <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition group-hover:bg-black/30">
              <span className="flex h-11 w-11 scale-90 items-center justify-center rounded-full bg-white text-gray-900 opacity-0 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                <Maximize2 size={19} />
              </span>
            </div>

            {/* Title */}
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-4 pb-4 pt-12">
                <p className="text-sm font-medium text-white">
                  {image.title}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Empty? */}
      <ImagePreview
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </section>
  );
}

export default ProjectGallery;