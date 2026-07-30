import type { Metadata } from "next";
import { profile } from "@/lib/site";
import "./globals.css";
import Cursor from "@/components/ui/Cursor";

export const metadata: Metadata = {
  title: `${profile.name} · ${profile.role}`,
  description: `${profile.role} ${profile.tagline}. Portfolio and case studies.`,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <a href="#top" className="skip-link">
          Skip to content
        </a>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
