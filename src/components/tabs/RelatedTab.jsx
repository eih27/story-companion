import { ArrowUpRight, LayoutGrid } from "lucide-react";
import { related } from "../../data/mockData";

export default function RelatedTab() {
  return (
    <div className="px-5 py-6">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-3">
        <LayoutGrid size={12} strokeWidth={2.2} />
        Related reporting
      </div>
      <h3 className="font-display font-bold text-lg leading-tight mb-1">
        Other ways into this story.
      </h3>
      <p className="text-sm text-ink-soft mb-5 leading-relaxed">
        Curated by the climate desk. Tagged by the angle each story takes.
      </p>

      <div className="space-y-3">
        {related.map((r, i) => (
          <button
            key={i}
            className="w-full text-left p-4 border border-rule rounded-lg hover:border-ink/40 hover:bg-paper-warm transition-all group"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-accent">
                {r.kicker}
              </div>
              <ArrowUpRight
                size={14}
                className="text-ink-soft group-hover:text-ink shrink-0 mt-0.5"
              />
            </div>
            <div className="font-display font-bold text-base leading-snug text-ink mb-1.5 group-hover:underline underline-offset-2 decoration-1">
              {r.title}
            </div>
            <p className="text-xs text-ink-soft leading-relaxed mb-3">{r.dek}</p>
            <div className="flex items-center gap-2 text-[10px] text-ink-soft">
              <span>{r.readingTime}</span>
              <span className="w-1 h-1 rounded-full bg-ink-soft" />
              <span>{r.desk} desk</span>
            </div>
          </button>
        ))}
      </div>

      <div className="mt-6 p-4 bg-paper-warm border border-rule rounded-lg">
        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft mb-1.5">
          About this list
        </div>
        <p className="text-xs text-ink-soft leading-relaxed">
          Selected by our climate desk, not by an opaque algorithm. Suggestions update as the story develops.
        </p>
      </div>
    </div>
  );
}
