/**
 * Animated genomic / DNA helix background.
 * Pure SVG + CSS animations — lightweight, accessible, no extra deps.
 */
export function DnaBackground({ className = "" }: { className?: string }) {
  // Generate helix nodes
  const points = Array.from({ length: 28 }, (_, i) => i);
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {/* Network nodes */}
      <svg className="absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1200 700" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="line-grad" x1="0" x2="1">
            <stop offset="0%" stopColor="#1CCFC9" stopOpacity="0.0" />
            <stop offset="50%" stopColor="#1CCFC9" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#2AE86D" stopOpacity="0.0" />
          </linearGradient>
          <radialGradient id="node-grad">
            <stop offset="0%" stopColor="#2AE86D" />
            <stop offset="100%" stopColor="#082F6B" />
          </radialGradient>
        </defs>

        {/* connecting lines */}
        {Array.from({ length: 14 }).map((_, i) => {
          const y = 40 + i * 45;
          return (
            <path
              key={`l-${i}`}
              d={`M0 ${y} C 300 ${y - 30}, 600 ${y + 40}, 1200 ${y - 10}`}
              stroke="url(#line-grad)"
              strokeWidth="1"
              fill="none"
              strokeDasharray="4 8"
              style={{ animation: `dash ${10 + i}s linear infinite` }}
            />
          );
        })}

        {/* floating nodes */}
        {points.map((i) => {
          const cx = (i * 137) % 1200;
          const cy = (i * 91) % 700;
          const r = 2 + (i % 4);
          return (
            <circle
              key={`n-${i}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="url(#node-grad)"
              opacity={0.55}
              style={{ animation: `pulse-soft ${3 + (i % 5)}s ease-in-out infinite` }}
            />
          );
        })}
      </svg>

      {/* Rotating helix orb */}
      <div className="absolute -right-32 top-1/2 hidden h-[520px] w-[520px] -translate-y-1/2 md:block">
        <svg viewBox="0 0 400 400" className="h-full w-full animate-helix">
          <defs>
            <linearGradient id="helix-a" x1="0" x2="1">
              <stop offset="0%" stopColor="#082F6B" />
              <stop offset="100%" stopColor="#1CCFC9" />
            </linearGradient>
            <linearGradient id="helix-b" x1="0" x2="1">
              <stop offset="0%" stopColor="#2AE86D" />
              <stop offset="100%" stopColor="#1CCFC9" />
            </linearGradient>
          </defs>
          {Array.from({ length: 24 }).map((_, i) => {
            const t = (i / 24) * Math.PI * 4;
            const x1 = 200 + Math.cos(t) * 90;
            const x2 = 200 - Math.cos(t) * 90;
            const y = 30 + i * 14;
            return (
              <g key={i} opacity={0.7}>
                <line x1={x1} y1={y} x2={x2} y2={y} stroke="url(#helix-a)" strokeWidth="1.5" />
                <circle cx={x1} cy={y} r="3.2" fill="url(#helix-a)" />
                <circle cx={x2} cy={y} r="3.2" fill="url(#helix-b)" />
              </g>
            );
          })}
        </svg>
      </div>
    </div>
  );
}
