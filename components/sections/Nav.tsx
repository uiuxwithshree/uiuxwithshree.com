"use client";

import { nav, profile } from "@/lib/site";
import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  // On the homepage, section links are same-page hashes. Anywhere else
  // (e.g. a case study page), they need to point back to "/#section" so
  // the browser navigates home first, then jumps to the section.
  const hrefFor = (hash: string) => (isHome ? hash : `/${hash}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 bg-paper/90 backdrop-blur transition-shadow ${
        scrolled ? "shadow-[0_1px_0_0_var(--color-line)]" : ""
      }`}
    >
      <nav className="wrap flex items-center justify-between py-4">
        <Link href={isHome ? "#top" : "/"} className="min-w-0 truncate font-display text-[1.05rem] font-medium tracking-tight text-ink">
          {profile.name}
        </Link>

        <ul className="hidden gap-7 md:flex">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={hrefFor(item.href)}
                className="eyebrow relative normal-case text-[0.85rem] tracking-normal text-ink-soft transition-colors after:absolute after:-bottom-1 after:left-0 after:h-[1.5px] after:w-0 after:bg-accent after:transition-[width] after:duration-300 hover:text-ink hover:after:w-full"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <Link href={hrefFor("#contact")} className="btn btn-solid hidden sm:inline-flex">
            Say hello
          </Link>
          <button
            type="button"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 rounded-full border border-line-strong md:hidden"
          >
            <span
              aria-hidden="true"
              className={`block h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                open ? "translate-y-[3.5px] rotate-45" : ""
              }`}
            />
            <span
              aria-hidden="true"
              className={`block h-[1.5px] w-5 bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[3.5px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        id="mobile-nav"
        className={`md:hidden ${open ? "block" : "hidden"} hairline bg-paper`}
      >
        <ul className="wrap flex flex-col gap-1 py-3">
          {nav.map((item) => (
            <li key={item.href}>
              <Link
                href={hrefFor(item.href)}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 font-display text-lg font-medium text-ink transition-colors hover:bg-panel"
              >
                {item.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href={hrefFor("#contact")}
              onClick={() => setOpen(false)}
              className="mt-1 block rounded-lg bg-ink px-2 py-3 text-center font-display text-lg font-medium text-paper"
            >
              Say hello
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
