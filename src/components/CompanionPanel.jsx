import { useState } from "react";
import {
  X,
  Sparkles,
  ListChecks,
  Headphones,
  Clock,
  LayoutGrid,
  Bookmark,
  BookmarkCheck,
} from "lucide-react";
import AskTab from "./tabs/AskTab";
import SummarizeTab from "./tabs/SummarizeTab";
import ListenTab from "./tabs/ListenTab";
import TimelineTab from "./tabs/TimelineTab";
import RelatedTab from "./tabs/RelatedTab";
import SaveTab from "./tabs/SaveTab";

const TABS = [
  { id: "ask", label: "Ask", icon: Sparkles },
  { id: "summarize", label: "Summarize", icon: ListChecks },
  { id: "listen", label: "Listen", icon: Headphones },
  { id: "timeline", label: "Timeline", icon: Clock },
  { id: "related", label: "Related", icon: LayoutGrid },
  { id: "save", label: "Save", icon: Bookmark },
];

export default function CompanionPanel({
  open,
  onClose,
  activeTab,
  setActiveTab,
  saved,
  onToggleSave,
  showToast,
}) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-ink/20 z-40 transition-opacity duration-300 ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
        aria-hidden
      />

      {/* Panel */}
      <aside
        className={`fixed top-0 right-0 h-full w-full sm:w-[440px] bg-paper z-50 shadow-2xl border-l border-rule flex flex-col transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Story Companion"
      >
        {/* Header */}
        <div className="px-5 pt-5 pb-3 border-b border-rule shrink-0">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-ink flex items-center justify-center">
                <Sparkles size={14} strokeWidth={2.2} className="text-paper" />
              </div>
              <div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-ink-soft font-bold">
                  Story Companion
                </div>
                <div className="text-xs font-medium text-ink">Reading aid · grounded in this article</div>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 hover:bg-ink/5 rounded-full transition-colors"
              aria-label="Close companion"
            >
              <X size={16} strokeWidth={2} />
            </button>
          </div>

          {/* Tabs */}
          <div className="flex gap-1 -mb-3 overflow-x-auto scrollbar-hide">
            {TABS.map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 text-xs font-medium whitespace-nowrap border-b-2 transition-colors ${
                    isActive
                      ? "border-accent text-ink"
                      : "border-transparent text-ink-soft hover:text-ink"
                  }`}
                >
                  <Icon size={13} strokeWidth={2.2} />
                  {t.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          {activeTab === "ask" && <AskTab />}
          {activeTab === "summarize" && <SummarizeTab />}
          {activeTab === "listen" && <ListenTab />}
          {activeTab === "timeline" && <TimelineTab />}
          {activeTab === "related" && <RelatedTab />}
          {activeTab === "save" && (
            <SaveTab saved={saved} onToggleSave={onToggleSave} showToast={showToast} />
          )}
        </div>

        {/* Footer disclosure */}
        <div className="px-5 py-3 border-t border-rule shrink-0 bg-paper-warm">
          <p className="text-[11px] text-ink-soft leading-relaxed">
            Companion responses are AI-generated and grounded in this article and related reporting. Editorial review applies to summaries. Reporters' words remain unchanged.
          </p>
        </div>
      </aside>
    </>
  );
}
