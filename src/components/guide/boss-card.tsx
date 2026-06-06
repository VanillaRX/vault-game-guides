import { Swords, MapPin, Star } from "lucide-react";

interface BossCardProps {
  name: string;
  location: string;
  difficulty: 1 | 2 | 3 | 4 | 5;
  strategy: string;
  drops?: string;
  image?: string;
}

export function BossCard({ name, location, difficulty, strategy, drops, image }: BossCardProps) {
  return (
    <div className="my-5 overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--card)]/60 transition-all hover:border-[var(--accent)]/30">
      {image && (
        <div className="relative h-40 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] to-transparent" />
        </div>
      )}
      <div className="p-5">
        <div className="flex items-start justify-between">
          <div>
            <h4 className="font-display text-base font-bold tracking-tight text-[var(--fg)]">
              {name}
            </h4>
            <div className="mt-2 flex flex-wrap items-center gap-3 text-xs text-[var(--muted)]">
              <span className="inline-flex items-center gap-1">
                <MapPin size={12} /> {location}
              </span>
              <span className="inline-flex items-center gap-1">
                Difficulty:
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={12}
                    className={i < difficulty ? "text-[var(--amber)]" : "text-[var(--border)]"}
                    fill={i < difficulty ? "currentColor" : "none"}
                  />
                ))}
              </span>
            </div>
          </div>
        </div>
        <div className="mt-3 text-xs leading-relaxed text-[var(--fg)]/75 [&_b]:text-[var(--fg)] [&_b]:font-semibold"
             dangerouslySetInnerHTML={{ __html: strategy }} />
        {drops && (
          <div className="mt-3 border-t border-[var(--border)] pt-3">
            <span className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
              Key drops:
            </span>{" "}
            <span className="text-xs text-[var(--neon)]">{drops}</span>
          </div>
        )}
      </div>
    </div>
  );
}
