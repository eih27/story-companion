import {
  Target,
  Users,
  Lightbulb,
  Wrench,
  TrendingUp,
  FlaskConical,
  Scale,
  Quote,
} from "lucide-react";
import { productRationale } from "../data/mockData";

const tierColors = {
  Core: "bg-accent text-paper",
  Adoption: "bg-ink text-paper",
  Engagement: "bg-paper border border-ink/40 text-ink",
  Retention: "bg-paper-warm border border-rule text-ink",
  Quality: "bg-accent/15 text-accent",
};

export default function ProductRationale() {
  return (
    <div className="max-w-[1400px] mx-auto px-5 sm:px-8 py-14">
      {/* Hero */}
      <header className="max-w-[820px] mb-16">
        <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-5">
          Product Case Study
        </div>
        <h1 className="font-display font-black text-4xl sm:text-[3rem] leading-[1.05] tracking-tight mb-5">
          Story Companion: an AI-native reading layer for premium journalism.
        </h1>
        <p className="font-display text-xl text-ink-soft leading-relaxed italic">
          How I framed the problem, scoped an MVP, and reasoned through the tradeoffs of putting AI inside the article — without weakening the journalism.
        </p>
      </header>

      {/* Problem */}
      <Section icon={Target} label="Problem">
        <p className="text-lg leading-relaxed text-ink max-w-[760px]">
          {productRationale.problem}
        </p>
      </Section>

      {/* User */}
      <Section icon={Users} label="Target user">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <div className="text-xs uppercase tracking-wider text-ink-soft mb-1 font-semibold">
              Primary
            </div>
            <div className="font-display font-bold text-2xl leading-tight mb-3">
              {productRationale.user.primary}
            </div>
            <p className="text-sm text-ink-soft leading-relaxed">
              {productRationale.user.description}
            </p>
          </div>
          <div className="md:col-span-2 space-y-3">
            <div className="text-xs uppercase tracking-wider text-ink-soft font-semibold mb-2">
              From reader research
            </div>
            {productRationale.user.quotes.map((q, i) => (
              <blockquote
                key={i}
                className="border-l-2 border-accent pl-4 py-1 font-display italic text-base leading-snug text-ink"
              >
                <Quote
                  size={14}
                  className="inline-block text-accent mr-1 -mt-1"
                  strokeWidth={2.2}
                />
                {q}
              </blockquote>
            ))}
          </div>
        </div>
      </Section>

      {/* Hypothesis */}
      <Section icon={Lightbulb} label="Product hypothesis">
        <div className="bg-paper-warm border-l-4 border-accent p-6 max-w-[820px]">
          <div className="text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-2">
            If / Then
          </div>
          <p className="font-display text-xl leading-snug text-ink">
            {productRationale.hypothesis}
          </p>
        </div>
      </Section>

      {/* MVP */}
      <Section icon={Wrench} label="MVP scope">
        <p className="text-sm text-ink-soft mb-5 max-w-[680px]">
          The minimum surface that lets us test the hypothesis end-to-end — one article, one panel, six tabs.
        </p>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 max-w-[920px]">
          {productRationale.mvp.map((m, i) => (
            <div
              key={i}
              className="flex items-start gap-3 p-4 border border-rule rounded-lg bg-paper hover:bg-paper-warm transition-colors"
            >
              <span className="font-display font-black text-xl text-accent leading-none w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm leading-snug text-ink">{m}</span>
            </div>
          ))}
        </div>
      </Section>

      {/* Metrics */}
      <Section icon={TrendingUp} label="Success metrics">
        <p className="text-sm text-ink-soft mb-5 max-w-[680px]">
          Layered by what they tell us. Trust and quality sit alongside engagement on purpose.
        </p>
        <div className="border-t border-rule">
          {productRationale.metrics.map((m, i) => (
            <div
              key={i}
              className="grid grid-cols-12 gap-4 py-3.5 border-b border-rule items-center"
            >
              <div className="col-span-12 sm:col-span-5">
                <div className="font-display font-semibold text-base text-ink">
                  {m.name}
                </div>
              </div>
              <div className="col-span-8 sm:col-span-5 text-sm text-ink-soft">
                {m.target}
              </div>
              <div className="col-span-4 sm:col-span-2 text-right">
                <span
                  className={`inline-block text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-full ${tierColors[m.tier]}`}
                >
                  {m.tier}
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Experiments */}
      <Section icon={FlaskConical} label="Experiment plan">
        <div className="grid md:grid-cols-2 gap-4">
          {productRationale.experiments.map((e, i) => (
            <div
              key={i}
              className="p-5 border border-rule rounded-xl bg-paper hover:border-ink/40 transition-colors"
            >
              <div className="flex items-baseline justify-between mb-2">
                <h4 className="font-display font-bold text-lg leading-tight text-ink">
                  {e.title}
                </h4>
                <span className="text-[10px] uppercase tracking-wider text-ink-soft font-semibold ml-2 shrink-0">
                  Exp {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p className="text-sm text-ink-soft leading-relaxed mb-3">
                {e.description}
              </p>
              <div className="pt-3 border-t border-rule">
                <div className="text-[10px] uppercase tracking-wider text-accent font-bold mb-1">
                  Success looks like
                </div>
                <p className="text-xs text-ink leading-snug">{e.success}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Tradeoffs */}
      <Section icon={Scale} label="Key product tradeoffs">
        <p className="text-sm text-ink-soft mb-5 max-w-[680px]">
          The decisions I'd defend in a product review. Each one is a stance, not a hedge.
        </p>
        <div className="space-y-3 max-w-[920px]">
          {productRationale.tradeoffs.map((t, i) => (
            <div key={i} className="grid grid-cols-12 gap-4 py-4 border-t border-rule">
              <div className="col-span-12 md:col-span-4">
                <div className="text-[10px] uppercase tracking-wider text-accent font-bold mb-1">
                  Tradeoff {String(i + 1).padStart(2, "0")}
                </div>
                <div className="font-display font-bold text-base text-ink leading-tight">
                  {t.pair}
                </div>
              </div>
              <div className="col-span-12 md:col-span-8 text-sm text-ink leading-relaxed">
                {t.stance}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Closing */}
      <section className="mt-16 pt-10 border-t border-ink/20">
        <div className="max-w-[680px]">
          <div className="text-[11px] uppercase tracking-[0.2em] text-accent font-bold mb-3">
            Designed by
          </div>
          <p className="font-display text-lg text-ink-soft leading-relaxed italic">
            A prototype built as a portfolio case study for a Product Manager role in consumer news / media — exploring how AI-native interaction can deepen rather than displace the article experience.
          </p>
        </div>
      </section>
    </div>
  );
}

function Section({ icon: Icon, label, children }) {
  return (
    <section className="mb-16 scroll-mt-20">
      <div className="flex items-center gap-2 mb-6">
        <div className="w-7 h-7 rounded-full bg-ink text-paper flex items-center justify-center shrink-0">
          <Icon size={13} strokeWidth={2.2} />
        </div>
        <h2 className="font-display font-black text-[11px] uppercase tracking-[0.2em] text-ink">
          {label}
        </h2>
        <div className="flex-1 h-px bg-rule" />
      </div>
      {children}
    </section>
  );
}
