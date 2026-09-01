import { createContext, useCallback, useContext, useRef, useState } from "react";

const ToastContext = createContext(null);

let idCounter = 0;

/**
 * Provider — mount once at the app root (inside MainLayout).
 * Children can call useToast() to trigger toasts.
 */
export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);
  // Keep a ref so the dismiss timer callback always sees fresh state.
  const timersRef = useRef({});

  const dismiss = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
    clearTimeout(timersRef.current[id]);
    delete timersRef.current[id];
  }, []);

  const toast = useCallback(
    ({ message, type = "info", duration = 4000 }) => {
      const id = ++idCounter;

      setToasts((prev) => {
        // Cap at 5 simultaneous toasts to avoid UI overflow.
        const next = prev.length >= 5 ? prev.slice(1) : prev;
        return [...next, { id, message, type }];
      });

      timersRef.current[id] = setTimeout(() => dismiss(id), duration);

      return id;
    },
    [dismiss]
  );

  return (
    <ToastContext.Provider value={{ toast, dismiss, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

/**
 * Hook — call inside any component to get the `toast` function.
 *
 * Usage:
 *   const { toast } = useToast();
 *   toast({ message: "Hello!", type: "info" });
 */
export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used inside <ToastProvider>");
  }
  return ctx;
}
