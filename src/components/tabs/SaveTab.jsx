import { Bookmark, BookmarkCheck, Bell, Clock, ArrowUpRight, Sparkles } from "lucide-react";
import { article, related } from "../../data/mockData";

export default function SaveTab({ saved, onToggleSave, showToast }) {
  return (
    <div className="px-5 py-6">
      <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-3">
        <Bookmark size={12} strokeWidth={2.2} />
        Saved story thread
      </div>
      <h3 className="font-display font-bold text-lg leading-tight mb-1">
        Follow this story as it develops.
      </h3>
      <p className="text-sm text-ink-soft mb-5 leading-relaxed">
        We'll quietly let you know when something material changes — not every minor update.
      </p>

      {/* Saved card */}
      <div
        className={`border rounded-xl p-4 mb-5 transition-all ${
          saved ? "border-accent/40 bg-accent/[0.03]" : "border-rule"
        }`}
      >
        <div className="flex items-start gap-3">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
              saved ? "bg-accent text-paper" : "bg-paper-warm text-ink-soft"
            }`}
          >
            {saved ? (
              <BookmarkCheck size={18} strokeWidth={2} />
            ) : (
              <Bookmark size={18} strokeWidth={2} />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-accent mb-0.5">
              {article.kicker}
            </div>
            <div className="font-display font-bold text-sm leading-tight text-ink mb-1">
              {article.headline}
            </div>
            <div className="text-[11px] text-ink-soft">
              {saved
                ? "Saved · You'll be notified of updates"
                : "Not yet saved"}
            </div>
          </div>
        </div>

        <button
          onClick={onToggleSave}
          className={`mt-4 w-full py-2.5 rounded-full text-sm font-medium transition-colors ${
            saved
              ? "bg-paper border border-rule text-ink hover:border-ink/40"
              : "bg-ink text-paper hover:bg-ink/85"
          }`}
        >
          {saved ? "Unfollow story" : "Follow this story"}
        </button>
      </div>

      {saved && (
        <>
          {/* Resume */}
          <div className="mb-5 p-4 bg-paper-warm border border-rule rounded-xl">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft mb-2">
              <Clock size={11} strokeWidth={2.2} />
              Continue where you left off
            </div>
            <p className="text-sm text-ink leading-snug mb-3">
              You stopped reading at paragraph 7 — Phoenix's $80M heat-mitigation program.
            </p>
            <button className="text-xs font-medium text-accent hover:underline flex items-center gap-1">
              Jump back to ¶7 <ArrowUpRight size={12} />
            </button>
          </div>

          {/* Update preferences */}
          <div className="mb-5 p-4 border border-rule rounded-xl">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft mb-3">
              <Bell size={11} strokeWidth={2.2} />
              Notify me when
            </div>
            <div className="space-y-2.5">
              <CheckRow defaultChecked label="A material update is added" />
              <CheckRow defaultChecked label="A correction is published" />
              <CheckRow label="Any new related story runs" />
              <CheckRow label="A reader Q&A is answered live" />
            </div>
          </div>

          {/* Topic follow */}
          <div className="mb-5 p-4 border border-rule rounded-xl">
            <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft mb-3">
              <Sparkles size={11} strokeWidth={2.2} />
              Follow the topic too?
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["Climate adaptation", "Urban policy", "Phoenix", "Public health"].map((t) => (
                <button
                  key={t}
                  onClick={() => showToast(`Following "${t}".`)}
                  className="text-xs px-2.5 py-1.5 rounded-full bg-paper-warm border border-rule hover:border-ink/40 transition-colors"
                >
                  + {t}
                </button>
              ))}
            </div>
          </div>
        </>
      )}

      {/* Other saved threads (illustrative) */}
      <div>
        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft mb-3">
          Your other saved threads
        </div>
        <div className="space-y-2">
          {related.slice(0, 2).map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-3 rounded-lg hover:bg-paper-warm transition-colors cursor-pointer"
            >
              <div className="w-8 h-8 rounded-md bg-paper-warm border border-rule flex items-center justify-center shrink-0 mt-0.5">
                <BookmarkCheck size={13} strokeWidth={2} className="text-accent" />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[10px] uppercase tracking-wider text-accent font-bold mb-0.5">
                  {r.kicker}
                </div>
                <div className="text-sm font-semibold leading-tight text-ink mb-0.5 truncate">
                  {r.title}
                </div>
                <div className="text-[11px] text-ink-soft">
                  Updated 3 days ago · 2 new developments
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function CheckRow({ label, defaultChecked }) {
  return (
    <label className="flex items-center gap-2.5 text-sm text-ink cursor-pointer group">
      <input
        type="checkbox"
        defaultChecked={defaultChecked}
        className="w-4 h-4 rounded border-rule text-accent focus:ring-accent accent-accent"
      />
      <span className="leading-snug">{label}</span>
    </label>
  );
}
