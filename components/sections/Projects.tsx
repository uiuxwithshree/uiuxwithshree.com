'use client'

import Link from 'next/link'
import { motion } from 'motion/react'
import Folder, { vibeProjects } from '@/components/ui/Folder'
import Image from 'next/image'
import emberthumbnail from '@/public/images/projects/ember.jpeg'

const caseStudies = [
  {
    id: 'ember',
    tags: ['Ember', 'Product Design', 'Web App'],
    title: 'GitHub-Based AI Workspace for Dev Teams',
    desc: 'Designed a GitHub-integrated LLM workspace that enables dev teams to collaborate, switch between AI models, and get project-aware answers in one unified environment.',
    link: 'https://app.notion.com/p/uiuxwithshree/EMBER-Case-Study-3521f6b475fb81bcb4c7c5dd8b190662',
    accent: '#FF8040',
    thumbnail: emberthumbnail,
    index: 0,
    background: '#89D4FF',
  },
  {
    id: 'stride',
    tags: ['AI Enabled', '0-1 Product', 'Mobile App'],
    title: 'Exploring a Unified Fitness Platform',
    desc: 'Exploring and designing an AI-enabled fitness platform to help users and trainers track workouts, understand progress, and improve outcomes through a shared, evolving system. Currently focused on defining the right problem space and core user needs.',
    link: 'null',
    accent: '#FF4081',
    thumbnail: '/images/projects/stride.jpeg',
    index: 1,
    background: '#B5E18B',
  },
]

function StickyCard({ cs }: { cs: typeof caseStudies[0] }) {
  return (
    <section
      className="sticky top-0 flex min-h-screen items-center justify-center py-10"
      style={{ zIndex: cs.index + 1 }}
    >
      <motion.div
        initial={{ y: 60 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className='w-full max-w-6xl'
      >
        <div
          style={{ background: cs.background }}
          className="grid min-h-[min(720px,calc(100vh-80px))] cursor-pointer items-center md:gap-8 rounded-3xl md:rounded-[60px] border-4 border-white p-[clamp(24px,5vw,56px)] shadow-[0_22px_40px_rgba(0,0,0,0.10)] transition-shadow duration-300 hover:shadow-[0_28px_90px_rgba(0,0,0,0.14)] lg:grid-cols-2"
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
            {cs.link !== 'null' ? (
              <Link
                href={cs.link}
                className="inline-flex items-center gap-1.5 border-b-[1.5px] border-[#0d0d0d] pb-0.5 text-[13px] font-semibold text-[#0d0d0d] no-underline transition-opacity hover:opacity-60"
              >
                Read case study -&gt;
              </Link>
            ) : (
              <span className="inline-flex items-center gap-1.5 border-b-[1.5px] border-[#0d0d0d] pb-0.5 text-[13px] font-semibold text-[#0d0d0d] transition-opacity opacity-70">
                Coming Soon, Be Right Back -&gt;
              </span>
            )}
          </div>

          <div
            className="flex min-h-65 items-center justify-center rounded-lg text-[13px] "

          >
            <Image src={cs.thumbnail} alt={cs.title} width={600} height={400} className="rounded-4xl object-cover" />
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

      <div className="flex flex-col justify-between items-center pt-[clamp(80px,12vw,140px)] pb-[clamp(40px, 8vw, 100px)] text-center">
        <div>
          <span className="mb-3 block text-[11px] font-semibold tracking-[0.12em] text-[#9e9b93] uppercase">
            Vibe Coded
          </span>
          <h2 className="font-playfair italic mb-6 text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]">
            Vibe Coded Projects
          </h2>
          <p className="mb-20 text-sm text-[#9e9b93]">
            Click the folder to reveal projects
          </p>
        </div>
        <Folder projects={vibeProjects} />
      </div>
    </section>
  )
}
