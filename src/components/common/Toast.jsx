import { Info, X } from "lucide-react";
import { useToast } from "../../hooks/useToast.jsx";

/**
 * ToastContainer — place once inside MainLayout.
 * It reads toasts from context and renders them.
 */
function ToastContainer() {
  const { toasts, dismiss } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div
      aria-live="polite"
      aria-label="Notifications"
      className="fixed bottom-6 right-4 z-[200] flex flex-col items-end gap-3 sm:right-6"
    >
      {toasts.map((t) => (
        <Toast key={t.id} toast={t} onDismiss={dismiss} />
      ))}
    </div>
  );
}

function Toast({ toast, onDismiss }) {
  return (
    <div
      role="alert"
      className="toast-item flex w-full max-w-sm items-start gap-3 overflow-hidden rounded-2xl border border-blue-500/20 bg-[#0d1420] px-4 py-3.5 shadow-2xl shadow-black/40"
    >
      {/* Icon */}
      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400">
        <Info size={15} />
      </span>

      {/* Message */}
      <p className="flex-1 text-sm leading-6 text-gray-300">{toast.message}</p>

      {/* Close */}
      <button
        type="button"
        onClick={() => onDismiss(toast.id)}
        aria-label="Dismiss notification"
        className="ml-1 mt-0.5 rounded-lg p-1 text-gray-500 transition hover:bg-white/10 hover:text-gray-200"
      >
        <X size={15} />
      </button>
    </div>
  );
}

export default ToastContainer;
