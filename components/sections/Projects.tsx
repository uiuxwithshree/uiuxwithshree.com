'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import Folder, { vibeProjects } from '@/components/ui/Folder'

const caseStudies = [
  {
    id: 'quizrr',
    tags: ['Quizrr', 'Product Revamp', 'Web App'],
    title: 'Increasing Total Test Completion Rate',
    desc: 'Redesigned the core test-taking experience to reduce drop-offs and improve core product KPIs by 34%. Focused on reducing cognitive load and surfacing the right nudges.',
    link: '/case/quizrr',
    accent: '#ED3F27',
    mockupBg: 'linear-gradient(135deg, #1a1a2e, #16213e)',
    mockupText: 'Quizrr mockup',
    mockupTextColor: 'rgba(255,255,255,0.25)',
    index: 0,
    background: '#FFEF9F',
  },
  {
    id: 'marks',
    tags: ['MARKS', '0-1 Product', 'Mobile App'],
    title: 'Building a Unified Preparation Platform',
    desc: 'Designed end-to-end for a student platform consolidating notes, tests, and performance tracking into a single coherent experience from zero.',
    link: '/case/marks',
    accent: '#B4E50D',
    mockupBg: 'linear-gradient(135deg, #f0f4ff, #dce8ff)',
    mockupText: 'MARKS mockup',
    mockupTextColor: '#9e9b93',
    index: 1,
    background: '#F7A5A5',
  },
  {
    id: 'parking',
    tags: ['PARKING', '0-1 Product', 'Mobile App'],
    title: 'Product design for a Parking Management System',
    desc: 'Designed end-to-end for a parking management system consolidating spot discovery, booking, and payment tracking into a single coherent experience from zero.',
    link: '/case/parking',
    accent: '#FF8040',
    mockupBg: 'linear-gradient(135deg, #f0f4ff, #dce8ff)',
    mockupText: 'PARKING mockup',
    mockupTextColor: '#9e9b93',
    index: 2,
    background: '#89D4FF',
  },
]

function StickyCard({ cs }: { cs: typeof caseStudies[0] }) {
  return (
    <section
      className="sticky top-0 flex min-h-screen items-center justify-center py-10"
      style={{ zIndex: cs.index + 1 }}
    >
      <motion.div
        initial={{ y: 36, opacity: 0.92 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.45, once: false }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: 'transform' }}
        className="w-full max-w-6xl"
      >
        <div
          style={{ background: cs.background }}
          className="grid min-h-[min(720px,calc(100vh-80px))] cursor-pointer items-center gap-8 rounded-[60px] border-4 border-white p-[clamp(24px,5vw,56px)] shadow-[0_22px_40px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_28px_90px_rgba(0,0,0,0.14)] lg:grid-cols-2"
        >
          <div>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              <span
                className="size-2.5 rounded-full"
                style={{ background: cs.accent }}
              />
              {cs.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black px-3 py-1 text-[11px] font-semibold tracking-[0.04em] text-[#000000]"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h3 className="font-syne mb-3 text-[clamp(26px,4vw,48px)] leading-[1.05] font-bold tracking-[-0.02em]">
              {cs.title}
            </h3>
            <p className="mb-6 max-w-xl text-sm leading-[1.7] text-[#5c5a54]">{cs.desc}</p>

            <Link
              href={cs.link}
              className="inline-flex items-center gap-1.5 border-b-[1.5px] border-[#0d0d0d] pb-0.5 text-[13px] font-semibold text-[#0d0d0d] no-underline transition-opacity hover:opacity-60"
            >
              Read case study -&gt;
            </Link>
          </div>

          <div
            className="flex min-h-65 items-center justify-center rounded-lg text-[13px] "
            style={{
              background: cs.mockupBg,
              color: cs.mockupTextColor,
            }}
          >
            {cs.mockupText}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default function Projects() {
  return (
    <section
      id="projects"
      className="bg-[#ffffff] px-[clamp(24px,6vw,80px)] py-[clamp(60px,10vw,100px)]"
    >
      <div className="text-center">
        <span className="mb-3 block text-[11px] font-semibold tracking-[0.12em] text-[#9e9b93] uppercase">
          Selected Work
        </span>
        <h2 className="font-playfair italic mb-10 text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]">
          Case Studies
        </h2>
      </div>

      <div className="-mx-[clamp(24px,6vw,80px)] bg-[#ffffff] px-[clamp(24px,6vw,80px)]">
        {caseStudies.map((cs) => (
          <StickyCard key={cs.id} cs={cs} />
        ))}
      </div>

      <div className="flex flex-col items-center py-[clamp(80px,12vw,140px)] text-center">
        <span className="mb-3 block text-[11px] font-semibold tracking-[0.12em] text-[#9e9b93] uppercase">
          Vibe Coded
        </span>
        <h2 className="font-playfair italic mb-6 text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]">
          Vibe Coded Projects
        </h2>
        <p className="mb-20 text-sm text-[#9e9b93]">
          Click the folder to reveal projects
        </p>
        <Folder projects={vibeProjects} />
      </div>
    </section>
  )
}
