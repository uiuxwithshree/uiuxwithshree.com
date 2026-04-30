'use client'

import Link from 'next/link'

const socialLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com', iconBg: '#e8f4ff', iconColor: '#0066cc', iconText: 'in' },
  { label: 'Twitter / X', href: 'https://x.com', iconBg: '#f0f0f0', iconColor: '#000000', iconText: '𝕏' },
  { label: 'Dribbble', href: 'https://dribbble.com', iconBg: '#ffe8f5', iconColor: '#c0006e', iconText: 'Dr' },
]

export default function About() {
  return (
    <section
      id="about"
      className="bg-white px-[clamp(24px,6vw,80px)] py-[clamp(60px,10vw,100px)]"
    >
      <div className="text-center">
        <span className="mb-3 block text-[11px] font-semibold tracking-[0.12em] text-[#9e9b93] uppercase">
          The Human Behind the Pixels
        </span>
        <h2 className="font-syne mb-12 text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
        <div className="rounded-3xl border border-[#e8e6e0] bg-[#0d0d0d] p-8 text-white lg:col-span-5">
          <div className="mb-4 text-[11px] font-semibold tracking-[0.1em] text-[#c8f135] uppercase">
            Who I am
          </div>
          <p className="text-base leading-[1.7] text-white/80">
            I&apos;m a product designer who sits at the intersection of research,
            systems thinking, and craft. I care deeply about making things feel
            effortless.
          </p>
        </div>

        <div className="relative flex min-h-[220px] items-center justify-center overflow-hidden rounded-3xl border border-[#e8e6e0] bg-[#f5f4f0] lg:col-span-4">
          <div className="p-5 text-center text-[13px] text-[#9e9b93]">
            <div className="mb-2 text-[32px]">📸</div>
            Your photo here
          </div>
        </div>

        <div className="rounded-3xl border border-[#e8e6e0] bg-[#ece6ff] p-8 lg:col-span-3">
          <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] text-[#7c5cbf]/60 uppercase">
            Based in
          </div>
          <div className="font-syne text-[22px] leading-[1.1] font-bold">
            Bengaluru
            <br />
            India 🇮🇳
          </div>
        </div>

        <div className="rounded-3xl border border-[#e8e6e0] bg-[#c8f135] p-8 lg:col-span-3">
          <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] text-[#0d0d0d]/50 uppercase">
            Experience
          </div>
          <div className="font-syne text-7xl leading-none font-extrabold tracking-[-0.04em]">
            4+
          </div>
          <div className="mt-1.5 text-[13px] text-[#0d0d0d]/60">
            Years designing products
          </div>
        </div>

        <div className="rounded-3xl border border-[#e8e6e0] bg-[#d4e9ff] p-8 lg:col-span-4">
          <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] text-[#185fa5]/60 uppercase">
            Education
          </div>
          <div className="font-syne mb-1.5 text-xl leading-[1.2] font-bold">
            Bachelors in Interaction Design
          </div>
          <div className="text-[13px] text-[#185fa5]/70">
            Equilibrium Institute, Bengaluru
          </div>
        </div>

        <div className="flex flex-col justify-between rounded-3xl border border-[#e8e6e0] bg-[#ffe4d6] p-8 lg:col-span-5">
          <div>
            <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] text-[#b04a10]/60 uppercase">
              Download
            </div>
            <div className="font-syne mb-1.5 text-2xl font-bold">My Resume</div>
            <div className="text-[13px] text-[#b04a10]/65">Updated April 2025</div>
          </div>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="mt-5 inline-block w-fit rounded-full bg-[#0d0d0d] px-6 py-3 font-sans text-sm font-semibold text-white no-underline transition-colors hover:bg-[#333]"
          >
            View Resume ↗
          </Link>
        </div>

        <div className="rounded-3xl border border-[#e8e6e0] bg-white p-8 lg:col-span-4">
          <div className="mb-4 text-[11px] font-semibold tracking-[0.1em] text-[#9e9b93] uppercase">
            Find me online
          </div>
          <div className="flex flex-col gap-2.5">
            {socialLinks.map((s) => (
              <Link
                key={s.label}
                href={s.href}
                target="_blank"
                className="flex items-center gap-2.5 rounded-[10px] bg-[#f5f4f0] px-3 py-2 text-[13px] font-medium text-[#0d0d0d] no-underline transition-colors hover:bg-[#e8e6e0]"
              >
                <div
                  className="flex size-6 shrink-0 items-center justify-center rounded-md text-[11px] font-bold"
                  style={{ background: s.iconBg, color: s.iconColor }}
                >
                  {s.iconText}
                </div>
                {s.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-[#e8e6e0] bg-[#d6f5e8] p-8 lg:col-span-4">
          <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] text-[#0f6e56]/60 uppercase">
            Currently obsessed with
          </div>
          <div className="font-syne mb-2 text-[22px] font-bold">Motion Design</div>
          <p className="text-[13px] leading-[1.5] text-[#0f6e56]/70">
            Always building small animations and interactions in my free time.
          </p>
        </div>

        <div className="rounded-3xl border border-[#e8e6e0] bg-[#fff3c4] p-8 lg:col-span-4">
          <div className="mb-2 text-[11px] font-semibold tracking-[0.1em] text-[#ba7517]/60 uppercase">
            Currently reading
          </div>
          <div className="font-syne mb-1.5 text-xl leading-[1.2] font-bold">
            The Design of Everyday Things
          </div>
          <div className="text-[13px] text-[#ba7517]/70">
            Don Norman, a timeless classic.
          </div>
        </div>
      </div>
    </section>
  )
}
