"use client";

import { useState, useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  screenshots: string[];
  title: string;
}

export function ScreenshotLightbox({ screenshots, title }: Props) {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const openAt = useCallback((i: number) => {
    setIndex(i);
    setOpen(true);
  }, []);

  const close = useCallback(() => setOpen(false), []);

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + screenshots.length) % screenshots.length);
  }, [screenshots.length]);

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % screenshots.length);
  }, [screenshots.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    // Lock body scroll
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [open, close, prev, next]);

  if (screenshots.length === 0) return null;

  return (
    <>
      {/* Thumbnail grid */}
      <div className="grid gap-3 grid-cols-2 sm:grid-cols-3">
        {screenshots.slice(0, 6).map((url, i) => (
          <img
            key={i}
            src={url}
            alt={`${title} screenshot ${i + 1}`}
            className="aspect-video rounded-xl border border-[var(--border)] object-cover w-full cursor-pointer hover:scale-[1.02] hover:border-[var(--accent)]/50 transition-all"
            onClick={() => openAt(i)}
            loading="lazy"
          />
        ))}
      </div>

      {/* Lightbox overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          onClick={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          {/* Close button */}
          <button
            onClick={close}
            className="absolute top-4 right-4 z-50 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Close"
          >
            <X size={22} />
          </button>

          {/* Previous */}
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-2 sm:left-4 z-50 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Previous"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Image */}
          <img
            src={screenshots[index]}
            alt={`${title} screenshot ${index + 1}`}
            className="max-h-[88vh] max-w-[92vw] object-contain rounded-lg select-none"
            draggable={false}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-2 sm:right-4 z-50 rounded-full bg-white/10 p-2 text-white/70 transition-colors hover:bg-white/20 hover:text-white"
            aria-label="Next"
          >
            <ChevronRight size={28} />
          </button>

          {/* Counter + dot indicators */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
            <div className="flex gap-1.5">
              {screenshots.slice(0, Math.min(screenshots.length, 12)).map((_, i) => (
                <button
                  key={i}
                  onClick={(e) => { e.stopPropagation(); setIndex(i); }}
                  className={`h-1.5 rounded-full transition-all ${
                    i === index
                      ? "w-5 bg-white"
                      : "w-1.5 bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to screenshot ${i + 1}`}
                />
              ))}
            </div>
            <span className="text-xs text-white/40 font-mono">
              {index + 1} / {screenshots.length}
            </span>
          </div>
        </div>
      )}
    </>
  );
}
