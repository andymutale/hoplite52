"use client";

import { useEffect, useRef } from "react";

export default function MiniGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    // Create cells
    for (let i = 0; i < 12; i++) {
      const cell = document.createElement("div");
      cell.className = "tv-cell";
      grid.appendChild(cell);
    }

    function tick() {
      grid?.querySelectorAll(".tv-cell").forEach((c) => {
        c.classList.toggle("on", Math.random() > 0.6);
      });
    }

    tick();
    const interval = setInterval(tick, 1100);
    return () => clearInterval(interval);
  }, []);

  return <div className="tv-grid" ref={gridRef} />;
}
