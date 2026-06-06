/**
 * Pure CSS animated pixel gears — management/strategy theme.
 * Uses CSS transform animations for infinite rotation.
 */
export function PixelGears() {
  return (
    <div className="relative h-16 w-16 select-none" aria-hidden="true">
      {/* Large gear */}
      <div
        className="absolute left-0 top-0 animate-[spin_8s_linear_infinite]"
        style={{ animationName: "spin", animationDuration: "8s" }}
      >
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
          {/* 8-tooth gear — pixel-style */}
          <rect x="15" y="0" width="10" height="8" fill="var(--neon)" rx="1" />
          <rect x="15" y="32" width="10" height="8" fill="var(--neon)" rx="1" />
          <rect x="0" y="15" width="8" height="10" fill="var(--neon)" rx="1" />
          <rect x="32" y="15" width="8" height="10" fill="var(--neon)" rx="1" />
          <rect x="6" y="4" width="8" height="8" fill="var(--neon)" rx="1" />
          <rect x="26" y="4" width="8" height="8" fill="var(--neon)" rx="1" />
          <rect x="6" y="28" width="8" height="8" fill="var(--neon)" rx="1" />
          <rect x="26" y="28" width="8" height="8" fill="var(--neon)" rx="1" />
          {/* Center */}
          <rect x="14" y="14" width="12" height="12" fill="var(--bg)" rx="2" />
          <rect x="17" y="17" width="6" height="6" fill="var(--neon)" rx="1" />
        </svg>
      </div>

      {/* Small gear — opposite rotation */}
      <div
        className="absolute right-0 top-0 animate-[spin_5s_linear_infinite_reverse]"
        style={{ animationName: "spin", animationDuration: "5s", animationDirection: "reverse" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <rect x="9" y="0" width="6" height="5" fill="var(--accent)" rx="1" />
          <rect x="9" y="19" width="6" height="5" fill="var(--accent)" rx="1" />
          <rect x="0" y="9" width="5" height="6" fill="var(--accent)" rx="1" />
          <rect x="19" y="9" width="5" height="6" fill="var(--accent)" rx="1" />
          <rect x="3" y="2" width="5" height="5" fill="var(--accent)" rx="1" />
          <rect x="16" y="2" width="5" height="5" fill="var(--accent)" rx="1" />
          <rect x="3" y="17" width="5" height="5" fill="var(--accent)" rx="1" />
          <rect x="16" y="17" width="5" height="5" fill="var(--accent)" rx="1" />
          <rect x="8" y="8" width="8" height="8" fill="var(--bg)" rx="2" />
          <rect x="10" y="10" width="4" height="4" fill="var(--accent)" rx="1" />
        </svg>
      </div>
    </div>
  );
}
