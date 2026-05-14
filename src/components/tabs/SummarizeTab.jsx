import { useState } from "react";
import { Zap, Sprout, BookOpen, ListChecks, RefreshCw, Clock } from "lucide-react";
import { summaries } from "../../data/mockData";

const OPTIONS = [
  { id: "quick", icon: Zap, key: "quick" },
  { id: "beginner", icon: Sprout, key: "beginner" },
  { id: "deep", icon: BookOpen, key: "deep" },
  { id: "facts", icon: ListChecks, key: "facts" },
  { id: "changed", icon: RefreshCw, key: "changed" },
];

export default function SummarizeTab() {
  const [selected, setSelected] = useState("quick");
  const current = summaries[selected];

  return (
    <div className="px-5 py-6">
      <div className="mb-5">
        <h3 className="font-display font-bold text-lg leading-tight mb-1">
          Choose how you'd like to read this.
        </h3>
        <p className="text-sm text-ink-soft leading-relaxed">
          Same reporting, different framings. We adapt the format — not the facts.
        </p>
      </div>

      {/* Selector */}
      <div className="grid grid-cols-2 gap-2 mb-6">
        {OPTIONS.map((o) => {
          const Icon = o.icon;
          const data = summaries[o.key];
          const active = selected === o.id;
          return (
            <button
              key={o.id}
              onClick={() => setSelected(o.id)}
              className={`text-left p-3 rounded-lg border transition-all ${
                active
                  ? "border-ink bg-ink text-paper"
                  : "border-rule hover:border-ink/40 bg-paper"
              }`}
            >
              <div className="flex items-start justify-between mb-1.5">
                <Icon size={14} strokeWidth={2.2} />
                <span
                  className={`text-[9px] uppercase tracking-wider ${
                    active ? "text-paper/70" : "text-ink-soft"
                  }`}
                >
                  {data.duration}
                </span>
              </div>
              <div className="text-xs font-semibold leading-tight">{data.label}</div>
            </button>
          );
        })}
      </div>

      {/* Output */}
      <div className="border-t border-rule pt-5">
        <div className="flex items-center justify-between mb-3">
          <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft">
            {current.label}
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-ink-soft">
            <Clock size={10} strokeWidth={2.2} />
            {current.duration}
          </div>
        </div>

        {current.items ? (
          <ul className="space-y-2.5">
            {current.items.map((item, i) => (
              <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed text-ink">
                <span className="shrink-0 mt-1.5 w-1 h-1 rounded-full bg-accent" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        ) : (
          <div className="text-[15px] leading-[1.65] text-ink whitespace-pre-line font-display">
            {current.body}
          </div>
        )}

        <div className="mt-6 pt-4 border-t border-rule flex items-center justify-between gap-3">
          <button className="text-xs text-ink-soft hover:text-ink underline underline-offset-2">
            Read the full article ↑
          </button>
          <div className="text-[11px] text-ink-soft">
            Generated · editor-reviewed
          </div>
        </div>
      </div>
    </div>
  );
}
