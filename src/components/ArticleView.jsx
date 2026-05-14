import { forwardRef } from "react";
import {
  Bookmark,
  BookmarkCheck,
  Share2,
  Sparkles,
  Headphones,
  ListChecks,
  Clock,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";
import { article, trustCues, related } from "../data/mockData";

const ArticleView = forwardRef(function ArticleView(
  { onOpenCompanion, saved, onToggleSave },
  ref
) {
  return (
    <article ref={ref} className="pb-20">
      {/* Hero / Headline */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 pt-10 sm:pt-16">
        <div className="max-w-[760px] mx-auto">
          <div className="text-[11px] uppercase tracking-[0.18em] text-accent font-bold mb-5">
            {article.kicker}
          </div>
          <h1 className="font-display font-black text-[2.4rem] sm:text-[3.3rem] leading-[1.05] tracking-[-0.02em] mb-6 text-ink">
            {article.headline}
          </h1>
          <p className="font-display text-xl sm:text-[1.4rem] leading-[1.4] text-ink-soft mb-8 font-normal italic">
            {article.dek}
          </p>

          {/* Byline + meta */}
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 pb-6 border-b border-rule text-sm">
            <div>
              <span className="text-ink-soft">By </span>
              <span className="font-semibold text-ink">
                {article.byline.authors.join(" and ")}
              </span>
            </div>
            <div className="text-ink-soft">{article.publishedAt}</div>
            <div className="flex items-center gap-1 text-ink-soft">
              <span className="w-1 h-1 rounded-full bg-accent inline-block" />
              {article.updatedAt}
            </div>
            <div className="flex items-center gap-1.5 text-ink-soft">
              <Clock size={12} strokeWidth={2} />
              {article.readingTime}
            </div>
          </div>

          {/* Action bar */}
          <div className="flex items-center justify-between py-4 border-b border-rule">
            <div className="flex items-center gap-2 text-xs text-ink-soft">
              <ShieldCheck size={14} strokeWidth={2} className="text-accent" />
              <span>
                <span className="font-semibold text-ink">{article.sources}</span> sources cited ·{" "}
                <button
                  onClick={() => onOpenCompanion("timeline")}
                  className="underline underline-offset-2 hover:text-ink"
                >
                  view source transparency
                </button>
              </span>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={onToggleSave}
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full hover:bg-ink/5 transition-colors"
              >
                {saved ? (
                  <>
                    <BookmarkCheck size={14} strokeWidth={2} className="text-accent" />
                    <span className="font-medium">Following</span>
                  </>
                ) : (
                  <>
                    <Bookmark size={14} strokeWidth={2} />
                    <span>Save</span>
                  </>
                )}
              </button>
              <button className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full hover:bg-ink/5 transition-colors">
                <Share2 size={14} strokeWidth={2} />
                <span>Share</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-[1400px] mx-auto px-5 sm:px-8 mt-10">
        <div className="grid grid-cols-12 gap-8">
          {/* Article body */}
          <div className="col-span-12 lg:col-span-8 lg:col-start-3">
            <div className="max-w-[680px] mx-auto">
              {/* Companion inline prompt */}
              <div className="mb-10 p-5 sm:p-6 border border-rule rounded-lg bg-paper-warm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                <div className="relative">
                  <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-2">
                    <Sparkles size={12} strokeWidth={2.2} />
                    Story Companion
                  </div>
                  <p className="font-display text-lg leading-snug text-ink mb-4">
                    New to this story? Want a quick brief, or to ask a question? The Companion can help you read more deeply — grounded in this reporting.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <CompanionChip
                      icon={<ListChecks size={12} strokeWidth={2.2} />}
                      label="Quick brief"
                      onClick={() => onOpenCompanion("summarize")}
                    />
                    <CompanionChip
                      icon={<Sparkles size={12} strokeWidth={2.2} />}
                      label="Ask a question"
                      onClick={() => onOpenCompanion("ask")}
                    />
                    <CompanionChip
                      icon={<Headphones size={12} strokeWidth={2.2} />}
                      label="2-min briefing"
                      onClick={() => onOpenCompanion("listen")}
                    />
                  </div>
                </div>
              </div>

              {/* Paragraphs */}
              <div className="space-y-5 font-display text-[1.18rem] leading-[1.7] text-ink article-body">
                {article.paragraphs.map((p, i) => (
                  <p key={p.id} className={i === 0 ? "first-paragraph" : ""}>
                    {p.text}
                  </p>
                ))}
              </div>

              {/* Trust block inline */}
              <div className="mt-14 p-6 sm:p-7 border-y border-ink/15 bg-paper-warm">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] font-bold text-ink mb-4">
                  <ShieldCheck size={12} strokeWidth={2.2} className="text-accent" />
                  How we reported this story
                </div>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-5">
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-ink-soft mb-2 font-semibold">
                      What we know
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed">
                      {trustCues.whatWeKnow.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-accent mt-1.5 shrink-0">●</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <div className="text-[11px] uppercase tracking-wider text-ink-soft mb-2 font-semibold">
                      What we don't know yet
                    </div>
                    <ul className="space-y-2 text-sm leading-relaxed">
                      {trustCues.whatWeDontKnow.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="text-ink-soft mt-1.5 shrink-0">○</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-5 pt-4 border-t border-rule flex flex-wrap items-center justify-between gap-3 text-xs text-ink-soft">
                  <span>Last updated {trustCues.lastUpdated}</span>
                  <button
                    onClick={() => onOpenCompanion("timeline")}
                    className="underline underline-offset-2 hover:text-ink"
                  >
                    See source breakdown →
                  </button>
                </div>
              </div>

              {/* Save / follow CTA */}
              <div className="mt-12 text-center">
                <button
                  onClick={onToggleSave}
                  className={`inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-colors ${
                    saved
                      ? "bg-accent/10 text-accent border border-accent/30"
                      : "bg-ink text-paper hover:bg-ink/85"
                  }`}
                >
                  {saved ? (
                    <>
                      <BookmarkCheck size={15} strokeWidth={2} />
                      You're following this story
                    </>
                  ) : (
                    <>
                      <Bookmark size={15} strokeWidth={2} />
                      Follow this story
                    </>
                  )}
                </button>
                <p className="text-xs text-ink-soft mt-3">
                  {saved
                    ? "We'll notify you and resume where you left off when this story develops."
                    : "Get notified when this story develops — and pick up where you left off."}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related reporting */}
      <section className="max-w-[1400px] mx-auto px-5 sm:px-8 mt-20">
        <div className="border-t border-ink/15 pt-10">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-2">
                Continue reading
              </div>
              <h2 className="font-display font-black text-2xl tracking-tight">
                Related reporting
              </h2>
            </div>
            <button
              onClick={() => onOpenCompanion("related")}
              className="hidden sm:inline-flex items-center gap-1 text-xs text-ink-soft hover:text-ink"
            >
              View all in Companion <ArrowUpRight size={12} />
            </button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {related.map((r, i) => (
              <article
                key={i}
                className="group cursor-pointer border-t border-ink pt-4 hover:opacity-80 transition-opacity"
              >
                <div className="text-[10px] uppercase tracking-[0.15em] text-accent font-bold mb-2">
                  {r.kicker}
                </div>
                <h3 className="font-display font-bold text-lg leading-tight tracking-tight mb-2 text-ink group-hover:underline underline-offset-2 decoration-1">
                  {r.title}
                </h3>
                <p className="text-sm text-ink-soft leading-snug mb-3">{r.dek}</p>
                <div className="text-[11px] text-ink-soft flex items-center gap-2">
                  <span>{r.readingTime}</span>
                  <span className="w-1 h-1 rounded-full bg-ink-soft" />
                  <span>{r.desk}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </article>
  );
});

function CompanionChip({ icon, label, onClick }) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-paper border border-rule hover:border-ink/40 hover:bg-ink/[0.02] transition-colors"
    >
      {icon}
      {label}
    </button>
  );
}

export default ArticleView;
