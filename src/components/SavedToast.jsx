import { CheckCircle2 } from "lucide-react";

export default function SavedToast({ message }) {
  return (
    <div
      className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] transition-all duration-300 ${
        message
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <div className="bg-ink text-paper px-4 py-2.5 rounded-full shadow-lg flex items-center gap-2 text-sm">
        <CheckCircle2 size={15} strokeWidth={2.2} className="text-accent" />
        {message}
      </div>
    </div>
  );
}
