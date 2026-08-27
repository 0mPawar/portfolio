import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function BackButton({ fallback = "/" }) {
  const navigate = useNavigate();

  const handleBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate(fallback);
    }
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      className="group inline-flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm font-medium text-gray-600 transition hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-white/10 dark:hover:text-white"
    >
      <ArrowLeft
        size={18}
        className="transition-transform duration-200 group-hover:-translate-x-1"
      />

      <span>Back</span>
    </button>
  );
}

export default BackButton;