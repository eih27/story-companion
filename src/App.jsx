import { useState, useEffect, useRef } from "react";
import { Sparkles, BookOpen, FileText, Menu, X } from "lucide-react";
import ArticleView from "./components/ArticleView";
import CompanionPanel from "./components/CompanionPanel";
import ProductRationale from "./components/ProductRationale";
import SavedToast from "./components/SavedToast";

export default function App() {
  const [view, setView] = useState("reader"); // "reader" | "rationale"
  const [companionOpen, setCompanionOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("ask");
  const [saved, setSaved] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);
  const [readingProgress, setReadingProgress] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const articleRef = useRef(null);

  // Reading progress tracking
  useEffect(() => {
    function onScroll() {
      if (!articleRef.current) return;
      const el = articleRef.current;
      const rect = el.getBoundingClientRect();
      const totalScrollable = el.offsetHeight - window.innerHeight;
      const scrolled = -rect.top;
      const progress = Math.max(0, Math.min(1, scrolled / totalScrollable));
      setReadingProgress(progress);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [view]);

  function openCompanion(tab) {
    if (tab) setActiveTab(tab);
    setCompanionOpen(true);
  }

  function showToast(msg) {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2800);
  }

  function toggleSaved() {
    setSaved((prev) => {
      const next = !prev;
      showToast(next ? "Story saved. We'll notify you when it updates." : "Removed from saved stories.");
      return next;
    });
  }

  return (
    <div className="min-h-screen bg-paper text-ink font-sans antialiased">
      {/* Reading progress bar */}
      {view === "reader" && (
        <div
          className="fixed top-0 left-0 h-[2px] bg-accent z-50 transition-[width] duration-150"
          style={{ width: `${readingProgress * 100}%` }}
          aria-hidden
        />
      )}

      {/* Top nav */}
      <header className="border-b border-rule bg-paper/95 backdrop-blur sticky top-0 z-40">
        <div className="max-w-[1400px] mx-auto px-5 sm:px-8 h-14 flex items-center justify-between">
          <div className="flex items-center gap-8">
            <button
              onClick={() => setView("reader")}
              className="font-display font-black text-xl tracking-tight hover:opacity-70 transition-opacity"
              aria-label="Story Companion home"
            >
              The Dispatch<span className="text-accent">.</span>
            </button>
            <nav className="hidden md:flex items-center gap-6 text-sm text-ink-soft">
              <span>Politics</span>
              <span>Climate</span>
              <span>Economy</span>
              <span>Investigations</span>
              <span>Opinion</span>
            </nav>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => setView("reader")}
              className={`hidden sm:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                view === "reader"
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              <BookOpen size={13} strokeWidth={2.2} />
              Story
            </button>
            <button
              onClick={() => setView("rationale")}
              className={`hidden sm:flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full transition-colors ${
                view === "rationale"
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:text-ink"
              }`}
            >
              <FileText size={13} strokeWidth={2.2} />
              Product Rationale
            </button>
            {view === "reader" && (
              <button
                onClick={() => openCompanion("ask")}
                className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-accent text-paper hover:bg-accent-dark transition-colors"
              >
                <Sparkles size={13} strokeWidth={2.2} />
                <span className="hidden sm:inline">Companion</span>
              </button>
            )}
            <button
              className="sm:hidden text-ink p-1"
              onClick={() => setMobileNavOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {mobileNavOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
        {mobileNavOpen && (
          <div className="sm:hidden border-t border-rule px-5 py-3 flex flex-col gap-2 text-sm">
            <button
              onClick={() => {
                setView("reader");
                setMobileNavOpen(false);
              }}
              className="text-left py-1"
            >
              Story
            </button>
            <button
              onClick={() => {
                setView("rationale");
                setMobileNavOpen(false);
              }}
              className="text-left py-1"
            >
              Product Rationale
            </button>
          </div>
        )}
      </header>

      {/* Main */}
      <main>
        {view === "reader" ? (
          <ArticleView
            ref={articleRef}
            onOpenCompanion={openCompanion}
            saved={saved}
            onToggleSave={toggleSaved}
          />
        ) : (
          <ProductRationale />
        )}
      </main>

      {/* Companion panel */}
      <CompanionPanel
        open={companionOpen}
        onClose={() => setCompanionOpen(false)}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        saved={saved}
        onToggleSave={toggleSaved}
        showToast={showToast}
      />

      {/* Footer */}
      <footer className="border-t border-rule mt-24 py-10 px-5 sm:px-8">
        <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row justify-between gap-4 text-xs text-ink-soft">
          <div>
            <span className="font-display font-black text-ink">The Dispatch.</span>
            <span className="ml-2">— A fictional premium-news prototype.</span>
          </div>
          <div>
            Built as a portfolio case study. No affiliation with any real publication.
          </div>
        </div>
      </footer>

      <SavedToast message={toastMessage} />
    </div>
  );
}
