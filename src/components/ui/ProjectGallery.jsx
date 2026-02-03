import { useState } from "react";
import PropTypes from "prop-types";
import { ArrowLeft, ArrowRight } from "lucide-react";

const ProjectGallery = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  if (!images.length) return null;

  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  return (
    <div className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 mb-8">
      <img
        src={images[current]}
        alt={`Project screenshot ${current + 1}`}
        className="w-full h-full object-cover transition-all duration-300"
      />
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition"
            aria-label="Previous image"
            type="button"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={next}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/40 text-white rounded-full p-2 hover:bg-black/70 transition"
            aria-label="Next image"
            type="button"
          >
            <ArrowRight size={20} />
          </button>
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, idx) => (
              <button
                key={idx}
                className={`w-3 h-3 rounded-full border border-white ${
                  idx === current ? "bg-primary" : "bg-white/60"
                }`}
                onClick={() => setCurrent(idx)}
                aria-label={`Go to image ${idx + 1}`}
                type="button"
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};
ProjectGallery.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

export default ProjectGallery;