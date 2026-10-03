export function Starfield() {
  const stars = [
    { top: "10%", left: "15%", size: 2, delay: 0 },
    { top: "22%", left: "80%", size: 1.5, delay: 400 },
    { top: "65%", left: "8%", size: 1.5, delay: 800 },
    { top: "78%", left: "60%", size: 2, delay: 1200 },
    { top: "35%", left: "45%", size: 1, delay: 1600 },
    { top: "55%", left: "90%", size: 1.5, delay: 2000 },
    { top: "85%", left: "25%", size: 1, delay: 2400 },
    { top: "15%", left: "55%", size: 1.5, delay: 2800 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {stars.map((star, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-night-ink animate-[twinkle_3.5s_ease-in-out_infinite]"
          style={{
            top: star.top,
            left: star.left,
            width: star.size,
            height: star.size,
            animationDelay: `${star.delay}ms`,
          }}
        />
      ))}
    </div>
  );
}