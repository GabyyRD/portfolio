export function DataPulse() {
  const bars = [
    { height: 38, delay: 0 },
    { height: 66, delay: 80 },
    { height: 50, delay: 160 },
    { height: 86, delay: 240 },
    { height: 60, delay: 320 },
    { height: 98, delay: 400 },
    { height: 46, delay: 480 },
  ];

  return (
    <svg
      viewBox="0 0 280 110"
      className="h-24 w-full max-w-xs md:h-28"
      aria-hidden="true"
    >
      <line
        x1="0"
        y1="104"
        x2="280"
        y2="104"
        stroke="var(--color-line)"
        strokeWidth="1"
      />
      {bars.map((bar, i) => {
        const width = 24;
        const gap = 16;
        const x = i * (width + gap) + 6;
        const y = 104 - bar.height;
        const isHighlight = i === bars.length - 2;

        return (
          <rect
            key={i}
            x={x}
            y={y}
            width={width}
            height={bar.height}
            rx="3"
            fill={isHighlight ? "var(--color-accent)" : "var(--color-ink-soft)"}
            opacity={isHighlight ? 1 : 0.5}
            className="animate-[datapulse_0.7s_ease-out_both]"
            style={{
              transformBox: "fill-box",
              transformOrigin: "bottom",
              animationDelay: `${bar.delay}ms`,
            }}
          />
        );
      })}
    </svg>
  );
}