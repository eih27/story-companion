// Mock data for Story Companion prototype
// All content is fictional and for portfolio demonstration purposes.

export const article = {
  kicker: "Climate · Urban Policy",
  headline: "Cities prepare for a new era of extreme heat",
  dek: "From Phoenix to Paris, mayors are rewriting building codes, planting forests of shade, and naming a new kind of public official — the chief heat officer — as summers grow hotter and longer.",
  byline: {
    authors: ["Maya Chen", "David Okafor"],
    role: "Climate desk",
  },
  publishedAt: "May 11, 2026 · 6:14 a.m. ET",
  updatedAt: "Updated 4 hours ago",
  readingTime: "11 min read",
  sources: 14,
  paragraphs: [
    {
      id: "p1",
      text: "PHOENIX — On the morning the temperature first crossed 115 degrees this year, Marisol Vega was already three hours into her shift. Her job did not exist five years ago. As the city's deputy chief heat officer, she spent the dawn checking on cooling centers, dispatching outreach vans to encampments along the Salt River, and reviewing overnight emergency-room data for signs of heat-related illness.",
    },
    {
      id: "p2",
      text: "\"Heat used to be a weather story,\" Vega said, scrolling through a dashboard of shaded bus stops and water-fountain locations. \"Now it's an infrastructure story, a housing story, a labor story. It's a city-government story.\"",
    },
    {
      id: "p3",
      text: "Across the United States and around the world, cities are quietly remaking themselves for a future in which dangerous heat is no longer a summer anomaly but a defining feature of urban life. The shifts are visible in new building codes that require reflective roofs, in tree-planting campaigns financed by federal climate dollars, and in the rise of a new municipal job title — chief heat officer — that did not exist before 2021.",
    },
    {
      id: "p4",
      text: "More than 30 cities worldwide now employ one, according to a tally maintained by the Atlantic Council's Adrienne Arsht-Rockefeller Foundation Resilience Center. The first was appointed in Miami in 2021. Athens, Los Angeles, Freetown, Santiago, and Melbourne followed. Paris named its first this spring.",
    },
    {
      id: "p5",
      text: "The work is part emergency management, part urban planning, and part communications. Heat kills more Americans each year than hurricanes, tornadoes, and floods combined, federal data show, but its toll is often invisible: deaths attributed to heart attacks or kidney failure that were, in fact, triggered by days of relentless temperatures.",
    },
    {
      id: "p6",
      text: "\"We are still in the early innings of taking heat seriously as a public-health emergency,\" said Dr. Linnea Sato, an epidemiologist at the University of Washington who studies heat mortality. \"The systems we built — the power grid, the housing stock, the way we schedule outdoor work — were designed for a climate that no longer exists.\"",
    },
    {
      id: "p7",
      text: "In Phoenix, the changes have been concrete and physical. The city has coated more than 100 miles of streets with a light-gray sealant that reflects sunlight, lowering surface temperatures by as much as 12 degrees. It has installed shade structures at hundreds of bus stops. It has rewritten its zoning code to require new parking lots to include trees, and is piloting a program that pays low-income homeowners to install heat-reflective roofs.",
    },
    {
      id: "p8",
      text: "The price tag is not small. Phoenix has spent roughly $80 million on heat-mitigation projects since 2022, much of it drawn from federal Inflation Reduction Act funds. Vega's office alone runs on a $4.2 million annual budget — a rounding error in a city of 1.6 million, she noted, but a fight to secure each year.",
    },
    {
      id: "p9",
      text: "Other cities face harder constraints. Freetown, the capital of Sierra Leone, has a chief heat officer but almost no budget; her work consists mostly of organizing volunteers to plant trees in informal settlements. Athens has the budget but a building stock — much of it concrete apartments from the 1960s and 70s — that traps heat for days after the sun goes down.",
    },
    {
      id: "p10",
      text: "And in the United States, the politics of heat are tangled with the politics of climate change itself. Several states have moved in recent years to preempt local heat ordinances, including a 2024 Texas law that bars cities from requiring water breaks for outdoor workers. A federal heat-protection standard for workers, first proposed in 2024, remains stalled at the Office of Management and Budget.",
    },
    {
      id: "p11",
      text: "Still, the direction of travel is clear. The Urban Land Institute now publishes a heat-readiness scorecard for major metropolitan areas. Bond rating agencies have begun asking cities about heat exposure as part of their creditworthiness reviews. And in conversations with two dozen city officials for this story, none expressed doubt that the role of chief heat officer — or something like it — would be standard in city halls within a decade.",
    },
    {
      id: "p12",
      text: "\"Twenty years ago, no city had a chief resilience officer,\" said Eugene Marquez, who leads climate-adaptation work at the Brookings Institution. \"Ten years ago, no city had a chief sustainability officer at the cabinet level. The chief heat officer is the next one. We're watching a job category be born in real time.\"",
    },
    {
      id: "p13",
      text: "For Vega, in Phoenix, the work is less abstract. By mid-morning, the temperature had climbed past 110. She was on her way to a cooling center in Maryvale, where a line had already formed outside. \"The summer hasn't really started yet,\" she said. \"Ask me again in August.\"",
    },
  ],
};

export const trustCues = {
  lastUpdated: "May 11, 2026 at 2:47 p.m. ET",
  sourceCount: 14,
  sourceTypes: [
    { type: "Named interviews", count: 8, note: "City officials, researchers, residents" },
    { type: "Public records", count: 3, note: "Phoenix budget docs, federal data" },
    { type: "Academic research", count: 2, note: "Peer-reviewed studies on heat mortality" },
    { type: "On-the-ground reporting", count: 1, note: "Reporter spent 4 days in Phoenix" },
  ],
  whatWeKnow: [
    "More than 30 cities now employ a chief heat officer; Miami appointed the first in 2021.",
    "Phoenix has spent ~$80M on heat-mitigation projects since 2022.",
    "Heat kills more Americans annually than hurricanes, tornadoes, and floods combined.",
  ],
  whatWeDontKnow: [
    "Whether the proposed federal heat-protection standard for workers will be finalized.",
    "How effective reflective street coatings are over a 10+ year horizon — most studies are short-term.",
    "The full mortality toll in 2025; CDC data lags by 12–18 months.",
  ],
  corrections: null,
};

export const summaries = {
  quick: {
    label: "Quick brief",
    duration: "30 sec read",
    body: "Cities worldwide are creating a new role — chief heat officer — to manage rising urban temperatures as a public-health and infrastructure crisis. Phoenix has spent ~$80M since 2022 on reflective streets, shade structures, and zoning changes. More than 30 cities now have the role, but budgets, building stock, and state preemption laws limit progress in many places.",
  },
  beginner: {
    label: "Beginner context",
    duration: "1 min read",
    body: "Heat is becoming one of the most serious — and most overlooked — urban problems of the climate era. It kills more Americans each year than hurricanes, tornadoes, and floods combined, but the deaths are often miscounted as heart attacks or kidney failure.\n\nIn response, a small but growing number of cities have created a position called \"chief heat officer.\" Miami appointed the first in 2021. Phoenix, Athens, Paris, and others have followed. The job blends emergency management, urban planning, and public-health communication.\n\nThe work is practical: coating streets with reflective sealant to lower surface temperatures, planting trees, building shaded bus stops, rewriting zoning codes. It's also political. Some U.S. states have passed laws preventing cities from requiring water breaks for outdoor workers, and a proposed federal heat standard has stalled.\n\nThe broader point in this story: heat is shifting from a weather story to an infrastructure-and-governance story, and city halls are slowly catching up.",
  },
  deep: {
    label: "Deep dive",
    duration: "3 min read",
    body: "This story documents an emerging municipal job category — chief heat officer — and uses it as a lens to examine how cities are adapting to a hotter climate. The reporting is structured around three layers.\n\nFirst, the human layer: Marisol Vega, Phoenix's deputy chief heat officer, frames the piece. Her morning routine — checking cooling centers, dispatching outreach to encampments, reviewing ER data — illustrates how heat response now spans public health, housing, and labor.\n\nSecond, the institutional layer: 30+ cities globally now employ a chief heat officer, tracked by the Atlantic Council's Adrienne Arsht-Rockefeller Foundation Resilience Center. Phoenix has spent ~$80M on heat mitigation since 2022, much of it Inflation Reduction Act funds. Other cities (Freetown, Athens) face acute constraints in budget or building stock.\n\nThird, the political layer: state preemption laws (notably a 2024 Texas statute barring local water-break requirements for outdoor workers) and a stalled federal heat-protection rule signal that adaptation is politically contested even where the science is settled.\n\nThe piece situates these findings against epidemiological evidence (Dr. Linnea Sato, Univ. of Washington) and institutional signals — Urban Land Institute scorecards, bond-rating agencies asking about heat exposure. The throughline, articulated by Brookings's Eugene Marquez, is that we're watching a new municipal job category be born in real time, comparable to the rise of chief resilience and sustainability officers in prior decades.",
  },
  facts: {
    label: "Key facts",
    duration: "Glanceable",
    items: [
      "First chief heat officer appointed in Miami, 2021.",
      "30+ cities globally now have the role, per Atlantic Council tracking.",
      "Phoenix spent ~$80M on heat mitigation since 2022.",
      "Phoenix's heat office runs on a $4.2M annual budget.",
      "Reflective street sealant can lower surface temps by up to 12°F.",
      "Heat kills more Americans each year than hurricanes, tornadoes, and floods combined.",
      "Federal heat-protection standard for workers, proposed 2024, still stalled.",
      "Texas 2024 law bars cities from requiring water breaks for outdoor workers.",
    ],
  },
  changed: {
    label: "What's changed since you last read",
    duration: "Since May 4",
    body: "Two updates have been added since your last visit:\n\n• Paris named its first chief heat officer this spring — added in an editor's update May 9.\n• A new paragraph cites the Urban Land Institute's heat-readiness scorecard for major metros, published last week.\n\nNo previous claims have been corrected. The Texas preemption law and the stalled federal standard remain unchanged.",
  },
};

export const suggestedQuestions = [
  "Explain this like I'm new to the topic",
  "Why does this matter?",
  "What happened before this?",
  "What should I read next?",
  "What are the key facts?",
];

// Q&A responses are pre-written for the prototype. In production these would
// be generated by an LLM grounded in the article and related Post reporting.
export const qaResponses = {
  "Explain this like I'm new to the topic": {
    answer:
      "Cities are getting hotter, and a new kind of city official — called a \"chief heat officer\" — is being hired to deal with it. Their job is to protect people from extreme heat the way emergency managers protect people from hurricanes.\n\nThis story follows one of them, Marisol Vega in Phoenix, to show what the role looks like day-to-day: checking cooling centers, planting shade trees, rewriting building codes. It also explains why the role is spreading globally (Miami started it in 2021; 30+ cities now have one) and why progress is uneven — money, old buildings, and politics all get in the way.",
    grounding: [
      { type: "paragraph", ref: "¶1–4", label: "Vega's role and the rise of chief heat officers" },
      { type: "paragraph", ref: "¶5", label: "Why heat is a public-health emergency" },
    ],
  },
  "Why does this matter?": {
    answer:
      "Three reasons this story matters beyond Phoenix:\n\n1. Heat is the deadliest weather hazard in the U.S. — more lethal than hurricanes, tornadoes, and floods combined — but it's invisible in most casualty statistics because deaths get coded as heart attacks or kidney failure.\n\n2. The systems cities rely on (power grids, housing stock, outdoor-work schedules) were designed for a climate that no longer exists, per Univ. of Washington epidemiologist Linnea Sato. Adapting them is expensive and slow.\n\n3. A new layer of municipal government is being built in real time. Bond-rating agencies are starting to factor heat exposure into city creditworthiness, which means heat policy will increasingly shape what cities can borrow and build.",
    grounding: [
      { type: "paragraph", ref: "¶5–6", label: "Public-health framing and Sato quote" },
      { type: "paragraph", ref: "¶11", label: "Bond agencies and ULI scorecard" },
    ],
  },
  "What happened before this?": {
    answer:
      "Three threads of background help frame this story:\n\n• 2021: Miami appointed the world's first chief heat officer, Jane Gilbert, with backing from the Atlantic Council's Adrienne Arsht-Rockefeller Foundation Resilience Center. The Center has since helped seed the role in cities globally.\n\n• 2022: The Inflation Reduction Act unlocked federal funding for urban climate-adaptation work, including the heat-mitigation projects Phoenix has financed since.\n\n• 2024: Texas passed a law barring cities from requiring water breaks for outdoor workers, becoming the highest-profile example of state preemption on heat policy. A federal OSHA heat-protection standard was proposed the same year but has not been finalized.",
    grounding: [
      { type: "paragraph", ref: "¶4, ¶10", label: "Miami first, Texas preemption, federal standard" },
      { type: "related", ref: "Related: 'The federal heat rule that won't move'", label: "Prior Post reporting" },
    ],
  },
  "What should I read next?": {
    answer:
      "If this story interested you, three follow-ups are worth your time:\n\n• \"The federal heat rule that won't move\" — our Washington reporter on why OSHA's proposed worker-protection standard has stalled across two administrations.\n\n• \"Inside Miami's first heat season under a chief heat officer\" — the origin story of the role this piece is built around.\n\n• \"What reflective streets actually do (and don't do)\" — a more technical look at the cool-pavement programs Phoenix has rolled out, including the limits of the science.",
    grounding: [
      { type: "related", ref: "3 related Post stories", label: "Curated by the climate desk" },
    ],
  },
  "What are the key facts?": {
    answer:
      "• 30+ cities globally now employ a chief heat officer (Atlantic Council tracking).\n• Miami appointed the first in 2021; Paris is the most recent, this spring.\n• Phoenix has spent ~$80M on heat mitigation since 2022.\n• Phoenix's heat office runs on a $4.2M annual budget.\n• Reflective street coatings can lower surface temperatures by up to 12°F.\n• Heat kills more Americans each year than hurricanes, tornadoes, and floods combined.\n• A 2024 Texas law bars cities from requiring water breaks for outdoor workers.\n• A federal heat-protection standard for workers, proposed in 2024, remains stalled.",
    grounding: [
      { type: "paragraph", ref: "¶4, ¶7–10", label: "Pulled from the article's reporting" },
    ],
  },
};

export const audioBriefing = {
  title: "Your 2-minute briefing",
  duration: "2 min 14 sec",
  voicedBy: "Generated narration · reviewed by an editor",
  transcriptPreview:
    "From the climate desk: a new kind of city official is emerging in the era of extreme heat — the chief heat officer. We follow Marisol Vega through a morning in Phoenix, where the temperature has already cleared 110 degrees…",
  keyMoments: [
    { time: "0:00", label: "Why heat is a new kind of city problem" },
    { time: "0:34", label: "The rise of the chief heat officer role" },
    { time: "1:02", label: "Phoenix's $80M experiment" },
    { time: "1:38", label: "Politics: state preemption and the stalled federal rule" },
    { time: "2:00", label: "Where the role is headed next" },
  ],
};

export const timeline = [
  {
    date: "2021",
    title: "Miami names the first chief heat officer",
    detail: "Jane Gilbert is appointed under Mayor Levine Cava, with funding and technical support from the Atlantic Council.",
  },
  {
    date: "2022",
    title: "Inflation Reduction Act passes",
    detail: "Unlocks federal funding that will underwrite a significant share of Phoenix's heat-mitigation work.",
  },
  {
    date: "2023",
    title: "Athens, LA, Freetown, Santiago, Melbourne follow",
    detail: "The chief heat officer role goes global. Each city adapts the model to local budget and climate.",
  },
  {
    date: "2024",
    title: "Texas preempts local heat ordinances",
    detail: "State law bars cities from requiring water breaks for outdoor workers. OSHA proposes a federal heat standard the same year.",
  },
  {
    date: "Spring 2026",
    title: "Paris names its first chief heat officer",
    detail: "Brings the European total to four. The federal U.S. heat standard remains stalled at OMB.",
  },
  {
    date: "This week",
    title: "Phoenix begins its 2026 heat season",
    detail: "Temperatures clear 115°F for the first time this year. Our story opens here.",
    current: true,
  },
];

export const related = [
  {
    kicker: "Washington",
    title: "The federal heat rule that won't move",
    dek: "Why OSHA's proposed worker-protection standard has stalled across two administrations.",
    readingTime: "8 min",
    desk: "Politics",
  },
  {
    kicker: "Climate",
    title: "Inside Miami's first heat season under a chief heat officer",
    dek: "The origin story of a job category that didn't exist five years ago.",
    readingTime: "12 min",
    desk: "Climate",
  },
  {
    kicker: "Science",
    title: "What reflective streets actually do (and don't do)",
    dek: "A closer look at cool-pavement programs and the limits of the science behind them.",
    readingTime: "9 min",
    desk: "Science",
  },
  {
    kicker: "Investigation",
    title: "Counting the uncounted: heat deaths in America",
    dek: "How thousands of heat-related fatalities are missed each year — and what better tracking could change.",
    readingTime: "15 min",
    desk: "Investigations",
  },
];

export const productRationale = {
  problem:
    "Readers often encounter complex, evolving news stories without enough context to fully understand why they matter, what changed, or what to read next. The opportunity is to make journalism easier to understand, personalize, trust, and return to — without weakening editorial authority.",
  user: {
    primary: "Engaged-but-overwhelmed readers",
    description:
      "Washington Post subscribers who want to follow complex stories — climate, courts, economy, international — but lack the background to fully grasp them and don't have time to read every related piece. They value rigor and trust, but bounce off long, dense articles. They want clarity without losing depth.",
    quotes: [
      "\"I'll start a 3,000-word piece and abandon it 400 words in because I don't have the context.\"",
      "\"I want to follow this story, but I lose the thread between updates.\"",
      "\"I trust the Post. I don't trust a chatbot. I want both.\"",
    ],
  },
  hypothesis:
    "If readers can ask contextual questions, receive personalized summaries, explore related reporting, and save evolving story threads inside the article experience, they will engage more deeply and return more often to follow developments.",
  mvp: [
    "Article-embedded companion panel",
    "Contextual Q&A grounded in the article and related Post reporting",
    "Personalized summaries (quick / beginner / deep / facts / what changed)",
    "Audio-style 2-minute briefing",
    "Related reporting surfaced in context",
    "Save / follow story thread with update reminders",
    "Trust and source cues as first-class UI",
  ],
  metrics: [
    { name: "Story completion rate", target: "+15% on complex stories", tier: "Core" },
    { name: "Time on article", target: "+25% median dwell", tier: "Core" },
    { name: "Companion activation rate", target: "30% of article readers", tier: "Adoption" },
    { name: "Questions asked per active user", target: "≥ 2 per session", tier: "Engagement" },
    { name: "Summary click-through rate", target: "≥ 40% of activations", tier: "Engagement" },
    { name: "Related article clicks", target: "+20% vs. control", tier: "Engagement" },
    { name: "Saved story threads", target: "5% of readers / month", tier: "Retention" },
    { name: "Return visits to saved stories", target: "+30% week-over-week", tier: "Retention" },
    { name: "Trust / helpfulness rating", target: "≥ 4.2 / 5 in qual research", tier: "Quality" },
  ],
  experiments: [
    {
      title: "Companion on vs. off",
      description:
        "A/B test the companion against the control article experience on five complex desks: politics, climate, courts, economy, international.",
      success: "Companion variant lifts completion and dwell without harming trust ratings.",
    },
    {
      title: "Summary format comparison",
      description:
        "Within the companion, A/B test which default summary type — quick brief, beginner context, or deep dive — is opened first.",
      success: "Find the default that maximizes both opens and full-article continuation.",
    },
    {
      title: "Qualitative trust study",
      description:
        "5–10 reader interviews focused on whether AI-generated summaries and Q&A erode or reinforce trust in the underlying journalism.",
      success: "Readers describe the companion as 'the Post helping them read' rather than 'AI replacing reporters.'",
    },
    {
      title: "Saved threads and return visits",
      description:
        "Measure whether readers who save a story return more often when the story updates, vs. readers who don't save.",
      success: "Saved-thread users return at least 30% more often within 14 days of an update.",
    },
  ],
  tradeoffs: [
    {
      pair: "Usefulness vs. novelty",
      stance:
        "Resist features that exist mainly to show AI capability. Every companion surface must answer a specific reader question we've validated in research.",
    },
    {
      pair: "Personalization vs. editorial judgment",
      stance:
        "Personalize format (length, framing) — never claims, framing, or source selection. The newsroom's voice is the source of trust; the AI is a translator.",
    },
    {
      pair: "Speed vs. accuracy",
      stance:
        "Prefer accurate over instant. Cache grounded answers behind a brief loading state rather than streaming uncertain partials.",
    },
    {
      pair: "Summary convenience vs. full-article depth",
      stance:
        "Summaries are an entry, not a substitute. Always offer a one-click path back to the relevant paragraph. Measure summary-to-article continuation, not just summary opens.",
    },
    {
      pair: "AI assistance vs. source transparency",
      stance:
        "Every AI answer shows what it was grounded in — paragraph references, related Post reporting, or an explicit 'we don't know yet.'",
    },
    {
      pair: "Engagement vs. trust",
      stance:
        "If a feature increases engagement but lowers trust ratings, kill the feature. Trust is the moat; engagement without it is borrowed time.",
    },
    {
      pair: "Experimental feature vs. core reader experience",
      stance:
        "Ship the companion as opt-in for the first two quarters. The article remains the article — the companion is a layer over it, not a replacement.",
    },
  ],
};
