type StickerKind = "sparkle" | "cursor" | "diamond" | "squiggle";

interface StickerProps {
  kind: StickerKind;
  className?: string;
  color?: "coral" | "sky" | "mint" | "lilac";
  rotate?: number;
  delay?: number;
}

const colorVar: Record<NonNullable<StickerProps["color"]>, string> = {
  coral: "var(--color-coral)",
  sky: "var(--color-sky)",
  mint: "var(--color-mint)",
  lilac: "var(--color-lilac)",
};

// Purely decorative marks — hidden from assistive tech so they never
// compete with the real content for a screen-reader user's attention.
export default function Sticker({
  kind,
  className = "",
  color = "coral",
  rotate = -8,
  delay = 0,
}: StickerProps) {
  const fill = colorVar[color];

  const icon = () => {
    switch (kind) {
      case "sparkle":
        return (
          <svg viewBox="0 0 40 40" width="34" height="34" fill="none">
            <path
              d="M20 2 L24 16 L38 20 L24 24 L20 38 L16 24 L2 20 L16 16 Z"
              fill={fill}
              stroke="var(--color-ink)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "cursor":
        return (
          <svg viewBox="0 0 40 40" width="30" height="30" fill="none">
            <path
              d="M9 5 L32 20 L21 22 L26 33 L20 35 L15 24 L9 30 Z"
              fill={fill}
              stroke="var(--color-ink)"
              strokeWidth="1.4"
              strokeLinejoin="round"
            />
          </svg>
        );
      case "diamond":
        return (
          <svg viewBox="0 0 40 40" width="28" height="28" fill="none">
            <rect
              x="8"
              y="8"
              width="24"
              height="24"
              rx="6"
              fill={fill}
              stroke="var(--color-ink)"
              strokeWidth="1.4"
              transform="rotate(15 20 20)"
            />
          </svg>
        );
      case "squiggle":
        return (
          <svg viewBox="0 0 60 24" width="48" height="44" fill="none">
            <path
              d="M2 18c4-14 10-14 14 0s10 14 14 0 10-14 14 0 10 14 14 0"
              stroke={fill}
              strokeWidth="4"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        );
    }
  };

  return (
    <span
      aria-hidden="true"
      className={`sticker ${className}`}
      style={
        {
          "--sticker-rot": `${rotate}deg`,
          animationDelay: `${delay}ms`,
        } as React.CSSProperties
      }
    >
      {icon()}
    </span>
  );
}
