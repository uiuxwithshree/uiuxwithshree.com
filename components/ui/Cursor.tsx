"use client";

import { useEffect, useRef, useState } from "react";

// Drop `data-cursor="Your message"` on ANY element anywhere in the app and
// this cursor will show that message next to the pointer while hovering it.
// e.g. <Avatar ... /> wrapped in <div data-cursor="Hola!">...
export default function Cursor() {
  const [visible, setVisible] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const cursorRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Touch devices have no real pointer to enhance — skip entirely.
    const isCoarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;
    if (isCoarsePointer) return;

    document.documentElement.classList.add("custom-cursor-active");

    const onMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      }
      setVisible(true);

      const target = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-cursor]");
      setLabel(target?.dataset.cursor ?? null);
    };

    const onLeaveWindow = () => setVisible(false);

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeaveWindow);

    return () => {
      document.documentElement.classList.remove("custom-cursor-active");
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeaveWindow);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      aria-hidden="true"
      className={`cursor-follow ${visible ? "cursor-follow-visible" : ""}`}
    >
      <svg
        width="16"
        height="19"
        viewBox="0 0 16 19"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="cursor-arrow"
      >
        <path
          d="M15.0409 9.78823C15 10.0314 14.8892 10.259 14.7209 10.4459C14.5475 10.6299 14.327 10.7678 14.0809 10.8462L9.6009 11.6564L11.8409 15.6882C11.9289 15.8188 11.9909 15.9646 12.0209 16.1171C12.0559 16.2934 12.0559 16.4745 12.0209 16.6509C11.9822 16.8269 11.9037 16.9928 11.7909 17.137C11.6789 17.2866 11.5359 17.4134 11.3709 17.5087L9.6809 18.3475C9.48095 18.4491 9.25751 18.5015 9.0309 18.5C8.8909 18.5 8.75423 18.4809 8.6209 18.4428C8.26968 18.3363 7.97564 18.1039 7.8009 17.7946L5.5509 13.7247L2.3409 16.6604C2.13603 16.8417 1.87891 16.9603 1.60267 17.0011C1.32642 17.0419 1.0437 17.0029 0.790901 16.8892C0.545539 16.7723 0.340606 16.5907 0.200535 16.3659C0.0604637 16.1412 -0.00883464 15.8827 0.00090147 15.6215V1.33385C0.00437564 1.09674 0.069669 0.864186 0.190902 0.657117C0.3182 0.446627 0.505419 0.274789 0.730901 0.161482C0.952291 0.046508 1.20232 -0.008909 1.45422 0.0011649C1.70611 0.0112388 1.95039 0.0864242 2.1609 0.218671L14.4609 8.47289C14.6709 8.61873 14.8369 8.81603 14.9409 9.04478C15.0479 9.2783 15.0819 9.53565 15.0409 9.78823Z"
          fill="#111"
        />
      </svg>
      {label && (
        <span key={label} className="cursor-label">
          {label}
        </span>
      )}
    </div>
  );
}