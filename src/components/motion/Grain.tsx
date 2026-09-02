export function Grain() {
  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none opacity-[0.02] mix-blend-overlay"
      viewBox="0 0 400 400"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.9"
          numOctaves="4"
          result="noise"
          seed="2"
        />
        <feDisplacementMap in="SourceGraphic" in2="noise" scale="1" />
      </filter>
      <rect width="400" height="400" fill="#000" filter="url(#noise)" />
    </svg>
  );
}
