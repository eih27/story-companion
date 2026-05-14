import { Clock, ShieldCheck, FileText } from "lucide-react";
import { timeline, trustCues } from "../../data/mockData";

export default function TimelineTab() {
  return (
    <div className="px-5 py-6 space-y-8">
      {/* Source transparency */}
      <section>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-3">
          <ShieldCheck size={12} strokeWidth={2.2} />
          Source transparency
        </div>
        <h3 className="font-display font-bold text-lg leading-tight mb-1">
          How this story was reported.
        </h3>
        <p className="text-sm text-ink-soft mb-4 leading-relaxed">
          Last updated {trustCues.lastUpdated}.
        </p>

        <div className="space-y-2">
          {trustCues.sourceTypes.map((s) => (
            <div
              key={s.type}
              className="flex items-start gap-3 p-3 bg-paper-warm border border-rule rounded-lg"
            >
              <div className="w-9 h-9 rounded-md bg-paper border border-rule flex items-center justify-center shrink-0 font-display font-black text-base">
                {s.count}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-ink">{s.type}</div>
                <div className="text-xs text-ink-soft leading-snug">{s.note}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Story timeline */}
      <section>
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-3">
          <Clock size={12} strokeWidth={2.2} />
          Story timeline
        </div>
        <h3 className="font-display font-bold text-lg leading-tight mb-4">
          How we got here.
        </h3>

        <ol className="relative border-l border-rule ml-2 space-y-5">
          {timeline.map((t, i) => (
            <li key={i} className="pl-5 relative">
              <span
                className={`absolute -left-[5px] top-1.5 w-2.5 h-2.5 rounded-full border-2 ${
                  t.current
                    ? "bg-accent border-accent"
                    : "bg-paper border-ink-soft"
                }`}
              />
              <div className="text-[11px] uppercase tracking-wider font-bold mb-0.5">
                {t.current ? (
                  <span className="text-accent">● {t.date}</span>
                ) : (
                  <span className="text-ink-soft">{t.date}</span>
                )}
              </div>
              <div className="text-sm font-semibold text-ink leading-tight mb-1">
                {t.title}
              </div>
              <div className="text-xs text-ink-soft leading-relaxed">{t.detail}</div>
            </li>
          ))}
        </ol>
      </section>

      {/* What we know / don't */}
      <section className="bg-paper-warm -mx-5 px-5 py-5 border-y border-rule">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-bold text-ink mb-3">
          <FileText size={12} strokeWidth={2.2} className="text-accent" />
          What we know · what we don't
        </div>
        <div className="space-y-4">
          <div>
            <div className="text-[11px] uppercase tracking-wider text-accent font-semibold mb-2">
              Confirmed
            </div>
            <ul className="space-y-1.5">
              {trustCues.whatWeKnow.map((item, i) => (
                <li key={i} className="text-xs text-ink leading-snug flex gap-2">
                  <span className="text-accent shrink-0">●</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <div className="text-[11px] uppercase tracking-wider text-ink-soft font-semibold mb-2">
              Still uncertain
            </div>
            <ul className="space-y-1.5">
              {trustCues.whatWeDontKnow.map((item, i) => (
                <li key={i} className="text-xs text-ink-soft leading-snug flex gap-2">
                  <span className="shrink-0">○</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
