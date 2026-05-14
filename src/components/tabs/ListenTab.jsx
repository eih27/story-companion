import { useState, useEffect } from "react";
import { Play, Pause, SkipForward, SkipBack, Headphones, FileText } from "lucide-react";
import { audioBriefing } from "../../data/mockData";

export default function ListenTab() {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0); // 0–134 seconds (2:14)
  const total = 134;

  useEffect(() => {
    if (!playing) return;
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= total) {
          setPlaying(false);
          return total;
        }
        return p + 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [playing]);

  function format(s) {
    const m = Math.floor(s / 60);
    const sec = String(Math.floor(s % 60)).padStart(2, "0");
    return `${m}:${sec}`;
  }

  return (
    <div className="px-5 py-6">
      <div className="mb-5">
        <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.18em] text-accent font-bold mb-2">
          <Headphones size={12} strokeWidth={2.2} />
          Audio briefing
        </div>
        <h3 className="font-display font-bold text-xl leading-tight mb-1">
          {audioBriefing.title}
        </h3>
        <p className="text-xs text-ink-soft">{audioBriefing.voicedBy}</p>
      </div>

      {/* Player */}
      <div className="border border-rule rounded-xl p-5 bg-gradient-to-br from-paper-warm to-paper">
        {/* Waveform placeholder */}
        <div className="flex items-end gap-[2px] h-12 mb-4">
          {Array.from({ length: 56 }).map((_, i) => {
            const playedRatio = progress / total;
            const isPlayed = i / 56 < playedRatio;
            const h = 20 + Math.abs(Math.sin(i * 0.6) * 24);
            return (
              <div
                key={i}
                className={`flex-1 rounded-sm transition-colors ${
                  isPlayed ? "bg-accent" : "bg-ink/15"
                }`}
                style={{ height: `${h}px` }}
              />
            );
          })}
        </div>

        <div className="flex items-center justify-between text-[11px] text-ink-soft mb-3 font-mono">
          <span>{format(progress)}</span>
          <span>{audioBriefing.duration}</span>
        </div>

        <div className="flex items-center justify-center gap-4">
          <button
            onClick={() => setProgress(Math.max(0, progress - 15))}
            className="p-2 hover:bg-ink/5 rounded-full transition-colors"
            aria-label="Back 15 seconds"
          >
            <SkipBack size={18} strokeWidth={2} />
          </button>
          <button
            onClick={() => setPlaying((p) => !p)}
            className="w-12 h-12 rounded-full bg-ink text-paper flex items-center justify-center hover:bg-ink/85 transition-colors"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause size={18} fill="currentColor" /> : <Play size={18} fill="currentColor" className="ml-0.5" />}
          </button>
          <button
            onClick={() => setProgress(Math.min(total, progress + 15))}
            className="p-2 hover:bg-ink/5 rounded-full transition-colors"
            aria-label="Forward 15 seconds"
          >
            <SkipForward size={18} strokeWidth={2} />
          </button>
        </div>
      </div>

      {/* Key moments */}
      <div className="mt-6">
        <div className="text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft mb-3">
          Key moments
        </div>
        <ul className="space-y-1">
          {audioBriefing.keyMoments.map((m, i) => (
            <li key={i}>
              <button
                onClick={() => {
                  const [min, sec] = m.time.split(":").map(Number);
                  setProgress(min * 60 + sec);
                }}
                className="w-full flex items-center gap-3 py-2 px-2 -mx-2 rounded-md hover:bg-paper-warm transition-colors text-left"
              >
                <span className="text-xs font-mono text-accent font-bold w-10 shrink-0">
                  {m.time}
                </span>
                <span className="text-sm text-ink leading-snug">{m.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Transcript preview */}
      <div className="mt-6 pt-5 border-t border-rule">
        <div className="flex items-center gap-1.5 text-[10px] uppercase tracking-[0.15em] font-bold text-ink-soft mb-2">
          <FileText size={11} strokeWidth={2.2} />
          Transcript preview
        </div>
        <p className="text-sm leading-relaxed text-ink-soft italic">
          "{audioBriefing.transcriptPreview}"
        </p>
        <button className="mt-3 text-xs text-ink underline underline-offset-2 hover:text-accent">
          Read full transcript →
        </button>
      </div>
    </div>
  );
}
