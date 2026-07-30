"use client";

import { profile } from "@/lib/site";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <footer className="hairline wrap flex flex-col gap-4 py-8 text-sm text-ink-faint sm:flex-row sm:items-center sm:justify-between">
      <p>© {new Date().getFullYear()} {profile.name}</p>
      <div className="flex flex-wrap gap-5">
        {profile.socials.map((s) => (
          <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-ink">
            {s.label}
          </a>
        ))}
        <Link href={isHome ? "#top" : "/"} className="transition-colors hover:text-ink">
          Back to top ↑
        </Link>
      </div>
    </footer>
  );
}
