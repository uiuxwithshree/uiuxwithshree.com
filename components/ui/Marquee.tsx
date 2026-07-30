interface MarqueeProps {
  items: string[];
  className?: string;
  separator?: string;
  ariaLabel: string;
}

// Decorative, auto-scrolling strip. The full item list is also rendered
// once, statically, inside a visually-hidden node so screen readers get
// the content without the duplicated/animated marquee copy.
export default function Marquee({ items, className = "", separator = "✦", ariaLabel }: MarqueeProps) {
  const loop = [...items, ...items];

  return (
    <div className={`marquee-track ${className}`}>
      <span className="sr-only">{ariaLabel}: {items.join(", ")}</span>
      <div className="marquee" aria-hidden="true">
        {loop.map((item, i) => (
          <span key={`${item}-${i}`} className="flex items-center gap-3 whitespace-nowrap px-3">
            <span>{item}</span>
            <span className="text-accent">{separator}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
