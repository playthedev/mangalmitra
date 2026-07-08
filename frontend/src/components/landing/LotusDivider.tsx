export function LotusDivider() {
  return (
    <div aria-hidden className="flex justify-center py-6 bg-inherit">
      <svg width="56" height="32" viewBox="0 0 56 32" fill="none">
        <g fill="var(--color-gold-500)">
          <path d="M28 32 C 20 24 20 12 28 4 C 36 12 36 24 28 32 Z" opacity={0.9} />
          <path d="M28 32 C 14 26 6 16 10 6 C 20 8 26 18 28 32 Z" opacity={0.7} />
          <path d="M28 32 C 42 26 50 16 46 6 C 36 8 30 18 28 32 Z" opacity={0.7} />
          <path d="M28 32 C 10 30 2 22 4 14 C 16 14 24 22 28 32 Z" opacity={0.5} />
          <path d="M28 32 C 46 30 54 22 52 14 C 40 14 32 22 28 32 Z" opacity={0.5} />
        </g>
      </svg>
    </div>
  );
}
