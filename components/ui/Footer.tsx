'use client'

import Link from 'next/link'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/yourusername' },
  { label: 'Twitter', href: 'https://x.com/yourusername' },
  { label: 'Dribbble', href: 'https://dribbble.com/yourusername' },
  { label: 'Resume', href: '/resume.pdf' },
]

const tickerItems = [
  'Product Designer',
  'UX Researcher',
  'Interaction Designer',
  'Visual Designer',
  'Systems Thinker',
  'Problem Solver',
]

const tickerDoubled = [...tickerItems, ...tickerItems]

export default function Footer() {
  return (
    <footer
      id="footer"
      className="sticky bottom-0 z-0 overflow-hidden bg-[#5A39ED] px-[clamp(24px,6vw,80px)] pt-[clamp(60px,10vw,80px)] pb-10 text-white"
    >
      {/* <div
        aria-hidden
        className="font-yatraone pointer-events-none absolute right-[30px] top-[60px] select-none text-[clamp(260px,12vw,280px)] leading-none font-extrabold  text-white/4"
      >
        श्री
      </div> */}

      <div className="mb-10 grid grid-cols-1 items-center gap-10 border-b border-white/8 pb-[60px] lg:grid-cols-2">
        <div>
          <h2 className="font-syne mb-7 text-[clamp(48px,7vw,96px)] leading-[0.9] font-extrabold tracking-[-0.04em]">
            Let&apos;s
            <br />
            <span className="text-[#ffffff]">Connect</span>
          </h2>
          <Link
            href="mailto:uiuxwithshree@gmail.com"
            className="block text-[25px] text-white/45 no-underline transition-colors hover:text-white mb-5"
          >
            uiuxwithshree@gmail.com ↗
          </Link>
          <div className="flex flex-wrap gap-2.5">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target={s.href.startsWith('http') ? '_blank' : undefined}
                rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="inline-block rounded-full border border-white/15 px-[18px] py-2 text-xs font-semibold tracking-[0.04em] text-white/65 no-underline transition-all hover:border-white hover:bg-white hover:text-[#0d0d0d]"
              >
                {s.label}
              </Link>
            ))}
          </div>
        </div>
        <div
        aria-hidden
        className="font-yatraone pointer-events-none absolute right-40 top-30 select-none text-[clamp(260px,12vw,280px)] leading-none font-extrabold  text-white/10"
      >
        श्री
      </div> 
      </div>

      <div className="mb-10 overflow-hidden">
        <div className="animate-ticker flex w-max gap-8">
          {tickerDoubled.map((item, idx) => (
            <span
              key={`${item}-${idx}`}
              className="flex items-center gap-8 whitespace-nowrap text-xs font-semibold tracking-[0.1em] text-white/18 uppercase"
            >
              {item}
              <span className="text-white/8">✦</span>
            </span>
          ))}
        </div>
      </div>

      <div className="relative z-[1] flex flex-wrap items-center justify-between gap-3 text-xs text-white/25">
        <span>© 2026 Shree Chaurasia. All rights reserved.</span>
        <span>Made with love in India 🫶</span>
      </div>
    </footer>
  )
}
