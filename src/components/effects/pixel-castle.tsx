"use client";

import { useEffect, useState } from "react";

// Pixel art: 20×16 medieval castle
// Each number = color palette index, 0 = transparent
const CASTLE_FRAMES: number[][][] = [
  // Frame 1: Foundation only (year 1)
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3], // ground
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2], // foundation stones
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1], // dirt
  ],
  // Frame 2: Walls going up
  [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,4,4,4,0,0,0,0,0,0,0,0,4,4,4,0,0,0], // tower tops start
    [0,0,0,4,4,4,0,0,0,0,0,0,0,0,4,4,4,0,0,0],
    [0,0,0,4,4,4,0,0,0,0,0,0,0,0,4,4,4,0,0,0],
    [0,0,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,0,0], // wall top
    [0,0,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,0,0],
    [0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0],
    [0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0], // walls mid
    [0,0,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,4,0,0],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ],
  // Frame 3: Full castle + gate + flag
  [
    [0,0,0,0,0,0,0,0,5,5,0,0,0,0,0,0,0,0,0,0], // flag pole
    [0,0,0,0,0,0,0,0,5,6,0,0,0,0,0,0,0,0,0,0], // flag
    [0,0,0,0,0,0,0,0,5,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,0,4,0,0,0,0,5,0,0,0,0,0,0,4,0,0,0,0], // tower top
    [0,0,0,4,4,4,0,0,5,0,0,0,0,4,4,4,0,0,0,0],
    [0,0,0,4,4,4,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
    [0,0,0,4,4,4,0,0,0,0,0,0,0,4,4,4,0,0,0,0],
    [0,0,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,0,0],
    [0,0,4,4,4,4,4,4,4,0,0,4,4,4,4,4,4,4,0,0],
    [0,0,4,4,4,4,4,4,7,0,0,7,4,4,4,4,4,4,4,0], // gate (brown)
    [0,0,4,4,4,4,4,4,7,7,7,7,4,4,4,4,4,4,4,0],
    [0,0,4,4,4,4,4,4,7,0,0,7,4,4,4,4,4,4,4,0],
    [3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
  ],
];

// Color palette
const COLORS: Record<number, string> = {
  1: "#3d2b1f", // dark earth
  2: "#6b6b6b", // stone foundation
  3: "#4a6741", // grass green
  4: "#8b8b8b", // stone walls
  5: "#5c3a1e", // wood pole
  6: "#a855f7", // flag purple (brand accent!)
  7: "#6b3a2a", // gate brown
};

export function PixelCastle() {
  const [frame, setFrame] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setFrame((f) => (f + 1) % CASTLE_FRAMES.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  const grid = CASTLE_FRAMES[frame];
  const pixelSize = 4;

  return (
    <div className="flex flex-col items-center gap-2 select-none">
      <div
        className="inline-block"
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${grid[0].length}, ${pixelSize}px)`,
          gridTemplateRows: `repeat(${grid.length}, ${pixelSize}px)`,
          gap: "0.5px",
        }}
      >
        {grid.flat().map((colorIdx, i) => {
          const color = COLORS[colorIdx];
          return (
            <span
              key={i}
              className="inline-block transition-all duration-700"
              style={{
                width: pixelSize,
                height: pixelSize,
                backgroundColor: color || "transparent",
                borderRadius: color ? "0.5px" : undefined,
                opacity: color ? 1 : 0,
              }}
            />
          );
        })}
      </div>
      <div className="flex gap-2">
        {CASTLE_FRAMES.map((_, i) => (
          <span
            key={i}
            className={`h-1 w-1 rounded-full transition-colors ${
              i === frame ? "bg-[var(--accent)]" : "bg-[var(--border)]"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
