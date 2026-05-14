import { useState, useRef, useEffect } from "react";
import { Send, Sparkles, FileText, ArrowUpRight } from "lucide-react";
import { suggestedQuestions, qaResponses } from "../../data/mockData";

export default function AskTab() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, thinking]);

  function submit(question) {
    if (!question.trim()) return;
    const userMsg = { role: "user", text: question };
    setMessages((m) => [...m, userMsg]);
    setInput("");
    setThinking(true);

    setTimeout(() => {
      const known = qaResponses[question];
      const response = known || {
        answer:
          "I can answer this kind of question by grounding it in the article and the climate desk's related reporting. For this prototype, try one of the suggested questions below — they'll show fully grounded answers with source pointers.",
        grounding: [{ type: "paragraph", ref: "Article", label: "Grounded in this reporting" }],
      };
      setMessages((m) => [...m, { role: "assistant", ...response }]);
      setThinking(false);
    }, 900);
  }

  return (
    <div className="flex flex-col min-h-full">
      {/* Empty state / suggestions */}
      {messages.length === 0 && (
        <div className="px-5 py-6">
          <div className="mb-5">
            <h3 className="font-display font-bold text-lg leading-tight mb-1">
              Ask anything about this story.
            </h3>
            <p className="text-sm text-ink-soft leading-relaxed">
              Answers are grounded in this article and related reporting from the climate desk. Source paragraphs are always shown.
            </p>
          </div>
          <div className="text-[10px] uppercase tracking-[0.15em] text-ink-soft font-bold mb-2">
            Try one of these
          </div>
          <div className="flex flex-col gap-1.5">
            {suggestedQuestions.map((q) => (
              <button
                key={q}
                onClick={() => submit(q)}
                className="text-left text-sm py-2.5 px-3.5 border border-rule rounded-lg hover:border-ink/40 hover:bg-paper-warm transition-colors group flex items-center justify-between gap-2"
              >
                <span>{q}</span>
                <Sparkles
                  size={12}
                  strokeWidth={2.2}
                  className="text-ink-soft group-hover:text-accent shrink-0"
                />
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Messages */}
      {messages.length > 0 && (
        <div className="flex-1 px-5 py-5 space-y-5">
          {messages.map((m, i) =>
            m.role === "user" ? (
              <div key={i} className="flex justify-end">
                <div className="max-w-[85%] bg-ink text-paper rounded-2xl rounded-tr-md px-4 py-2.5 text-sm">
                  {m.text}
                </div>
              </div>
            ) : (
              <div key={i} className="space-y-3">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft">
                  <Sparkles size={11} strokeWidth={2.2} className="text-accent" />
                  Companion
                </div>
                <div className="text-[15px] leading-relaxed text-ink whitespace-pre-line">
                  {m.answer}
                </div>
                {m.grounding && (
                  <div className="mt-3 p-3 bg-paper-warm border border-rule rounded-lg">
                    <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft mb-2 flex items-center gap-1.5">
                      <FileText size={10} strokeWidth={2.2} />
                      Grounded in
                    </div>
                    <ul className="space-y-1.5">
                      {m.grounding.map((g, gi) => (
                        <li
                          key={gi}
                          className="text-xs flex items-start gap-2 group cursor-pointer"
                        >
                          <span
                            className={`shrink-0 mt-0.5 text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              g.type === "paragraph"
                                ? "bg-accent/15 text-accent"
                                : "bg-ink/10 text-ink"
                            }`}
                          >
                            {g.ref}
                          </span>
                          <span className="text-ink-soft group-hover:text-ink leading-snug flex-1">
                            {g.label}
                          </span>
                          <ArrowUpRight
                            size={11}
                            className="text-ink-soft opacity-0 group-hover:opacity-100 transition-opacity mt-0.5"
                          />
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )
          )}
          {thinking && (
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft">
                <Sparkles size={11} strokeWidth={2.2} className="text-accent" />
                Companion
              </div>
              <div className="flex gap-1.5 items-center text-ink-soft text-sm">
                <span className="w-1.5 h-1.5 bg-ink-soft rounded-full animate-pulse" />
                <span
                  className="w-1.5 h-1.5 bg-ink-soft rounded-full animate-pulse"
                  style={{ animationDelay: "0.15s" }}
                />
                <span
                  className="w-1.5 h-1.5 bg-ink-soft rounded-full animate-pulse"
                  style={{ animationDelay: "0.3s" }}
                />
                <span className="ml-1 text-xs">Grounding in the article…</span>
              </div>
            </div>
          )}
          <div ref={endRef} />
        </div>
      )}

      {/* Input */}
      <div className="px-5 py-3 border-t border-rule shrink-0 bg-paper sticky bottom-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            submit(input);
          }}
          className="flex gap-2 items-center"
        >
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about this story…"
            className="flex-1 px-3.5 py-2.5 text-sm bg-paper-warm border border-rule rounded-full focus:outline-none focus:border-ink/40"
          />
          <button
            type="submit"
            disabled={!input.trim()}
            className="w-9 h-9 rounded-full bg-ink text-paper flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:bg-ink/85 transition-colors shrink-0"
            aria-label="Send"
          >
            <Send size={14} strokeWidth={2.2} />
          </button>
        </form>
      </div>
    </div>
  );
}
