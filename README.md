# Story Companion

An AI-native reading layer for premium journalism. A Product Manager portfolio case study exploring how readers could discover, understand, personalize, and return to complex stories through a companion embedded inside the article experience.

**This is a prototype, not a production app.** No real APIs are used. All AI responses are mocked. The publication "The Dispatch" is fictional — no affiliation with any real news brand.

---

## Run it locally

```bash
# 1. Install
npm install

# 2. Start dev server
npm run dev
# → opens http://localhost:5173
```

That's it. Requires Node 18+.

To build a static version for deployment (e.g. Vercel, Netlify, GitHub Pages):

```bash
npm run build
# output in /dist
```

---

## File structure

```
story-companion/
├── index.html
├── package.json
├── tailwind.config.js
├── postcss.config.js
├── vite.config.js
└── src/
    ├── main.jsx                       # React entry
    ├── index.css                      # Global styles, fonts, CSS vars
    ├── App.jsx                        # Shell: nav, view routing, progress bar
    ├── data/
    │   └── mockData.js                # All article, Q&A, summary, metric data
    └── components/
        ├── ArticleView.jsx            # Article reading experience
        ├── CompanionPanel.jsx         # Right-side panel shell + tabs
        ├── ProductRationale.jsx       # Portfolio case-study view
        ├── SavedToast.jsx             # Save/follow toast
        └── tabs/
            ├── AskTab.jsx             # Conversational Q&A
            ├── SummarizeTab.jsx       # Personalized summaries (5 formats)
            ├── ListenTab.jsx          # Audio briefing mock with waveform
            ├── TimelineTab.jsx        # Source transparency + story timeline
            ├── RelatedTab.jsx         # Related reporting
            └── SaveTab.jsx            # Saved threads + update preferences
```

---

## What's interactive

- **Top nav** toggles between the Article and Product Rationale views.
- **Companion button** (top right) opens the panel. It also opens from inline chips inside the article.
- **Reading progress bar** at the top of the article tracks scroll position.
- **Ask tab:** click any suggested question to see a fully grounded answer with paragraph references. Free-text input also works.
- **Summarize tab:** five formats (Quick, Beginner, Deep, Facts, What changed). Each restyles the body — same reporting, different framing.
- **Listen tab:** a working play/pause/seek mock of a 2-minute briefing with an animated waveform and clickable key moments.
- **Timeline tab:** source breakdown, story chronology, and "what we know / don't know" cues.
- **Related tab:** four curated related stories.
- **Save tab:** toggle follow state, see "continue where you left off," update notification preferences, follow topic tags.
- **Save / Follow button** in the article header and at the bottom of the article — both stay in sync with the Save tab.

---

## Screenshots to put in your portfolio

In recommended order:

1. **Hero: Article view with the inline Companion prompt** — shows the editorial layout and the AI-native entry point in context. Make sure the drop-cap, byline, and reading-progress bar are visible.
2. **Companion panel open on Ask tab** — after clicking one of the suggested questions. The grounded-in source pills are the most defensible "trust UI" detail.
3. **Summarize tab with "Beginner context" selected** — demonstrates personalization without manipulation.
4. **Listen tab mid-playback** — the waveform and key moments make this feel like a real product, not a wireframe.
5. **Timeline tab** — the source breakdown plus "what we know / don't know" framing is the trust thesis made visible.
6. **Save tab in the "Following" state** — shows the resume-where-you-left-off and notification controls.
7. **Product Rationale: Problem + Hypothesis** — opens the case study.
8. **Product Rationale: Metrics table** — the tiered metric labels (Core / Adoption / Engagement / Retention / Quality) communicate PM thinking at a glance.
9. **Product Rationale: Tradeoffs** — the strongest section to capture. Each tradeoff is written as a stance, not a hedge.

Capture at ~1440px wide for desktop shots. Take at least one **mobile screenshot of the article + open companion as a bottom sheet** — it shows responsive thinking.

---

## Resume blurb (paste-ready)

> **Story Companion — AI-native news reader prototype** *(Self-directed portfolio case study)*
>
> Designed a Washington Post Core Experience product critique and AI-native Story Companion prototype, mapping reader journeys across article discovery, contextual Q&A, personalized summaries, audio-style briefings, trust cues, saved story threads, and return engagement loops. Defined the problem, target user, hypothesis, MVP scope, layered success metrics (engagement + trust + retention), four-experiment plan, and seven product tradeoffs. Built the working prototype in React, Tailwind, and lucide-react.

**Tagline option** (for a portfolio header or LinkedIn About): *Reframed AI in a news product from "summary machine" to "reading aid" — grounded answers, editorial review, and trust cues as first-class UI.*

---

## Design notes

The aesthetic deliberately avoids generic SaaS-dashboard conventions:

- **Typography:** Fraunces (display serif, with optical sizing) for headlines and body, Inter Tight for UI/sans elements. Premium-news cadence without copying any specific publication's wordmark or font choices.
- **Color:** warm off-white paper (#FAF7F2), deep ink (#1A1A1A), single restrained accent (a desaturated burgundy #8A1C2B). One accent, used sparingly, for grounding cues, status indicators, and "current" markers.
- **Layout:** 680px column for body copy. Editorial spacing (generous leading, restrained measure). Drop cap on the first paragraph. Hairline rules instead of cards-on-cards.
- **Motion:** restrained. The companion slides in from the right with a single ease-out transition. Reading progress bar updates as scroll happens. The audio waveform fills smoothly. No bouncy springs, no toast theatrics.

---

## What I'd build next (not in MVP)

Worth mentioning in interview discussion, deliberately not in the prototype to keep MVP scope honest:

- **Newsroom-facing dashboard:** what readers are asking, where comprehension breaks down, which paragraphs aren't earning their dwell.
- **Companion across a story arc, not a single article:** when you follow a saved thread, the Companion knows what you've already read and personalizes accordingly.
- **Editor-in-the-loop summary approvals** for high-stakes stories (elections, investigations).
- **Quote-level provenance:** click a sentence in a summary, jump to the exact paragraph it summarizes.

---

*Built as a portfolio piece. No affiliation with The Washington Post or any other publication.*
