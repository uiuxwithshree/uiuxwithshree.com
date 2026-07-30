"use client";

import { useEffect, useRef } from "react";

interface CountUpProps {
  value: string;
  className?: string;
}

export default function CountUp({
  value,
  className = "",
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Match values like:
    // 62%
    // +24%
    // -8%
    // 5×
    // 3.5
    // 0
    const match = value.match(/^([+-]?)(\d+(?:\.\d+)?)(%|×|x)?$/);

    // Static text (e.g. "1 day", "2 weeks")
    if (!match) {
      node.textContent = value;
      return;
    }

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      node.textContent = value;
      return;
    }

    const [, sign, number, suffix = ""] = match;

    const target = Number(number);
    const decimals = number.includes(".")
      ? number.split(".")[1].length
      : 0;

    let raf = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        observer.disconnect();

        const duration = 900;
        const start = performance.now();

        const animate = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);

          // easeOutCubic
          const eased = 1 - Math.pow(1 - progress, 3);

          const current = target * eased;

          node.textContent = `${sign}${current.toFixed(
            decimals
          )}${suffix}`;

          if (progress < 1) {
            raf = requestAnimationFrame(animate);
          } else {
            node.textContent = value;
          }
        };

        raf = requestAnimationFrame(animate);
      },
      {
        threshold: 0.35,
      }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [value]);

  return (
    <span ref={ref} className={className}>
      {value}
    </span>
  );
}