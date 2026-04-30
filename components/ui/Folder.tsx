'use client'

import { useState, type MouseEvent, type ReactNode } from 'react'
import Link from 'next/link'
import { AnimatePresence, motion } from 'motion/react'

interface VibeProject {
  emoji: string
  title: string
  desc: string
  link: string
  color: string
}

interface ReactBitsFolderProps {
  color?: string
  size?: number
  items?: ReactNode[]
  className?: string
}

const vibeProjects: VibeProject[] = [
  { emoji: '01', title: 'Micro Interaction Kit', desc: 'Delightful UI animations built in Framer.', link: '#', color: '#fff3c4' },
  { emoji: '02', title: 'Scroll Parallax Page', desc: 'Depth and layers using pure CSS scroll.', link: '#', color: '#d6f5e8' },
  { emoji: '03', title: 'Design Tokens UI', desc: 'Live token explorer for a design system.', link: '#', color: '#d4e9ff' },
//   { emoji: '04', title: '3D Card Hover', desc: 'CSS perspective tilt-on-hover cards.', link: '#', color: '#ece6ff' },
//   { emoji: '05', title: 'Liquid Button', desc: 'SVG morphing satisfying button states.', link: '#', color: '#ffe4d6' },
//   { emoji: '06', title: 'Grid Builder', desc: 'Drag-and-drop bento grid playground.', link: '#', color: '#d6f5e8' },
]

const darkenColor = (hex: string, percent: number): string => {
  let color = hex.startsWith('#') ? hex.slice(1) : hex

  if (color.length === 3) {
    color = color
      .split('')
      .map((c) => c + c)
      .join('')
  }

  const num = parseInt(color, 16)
  const r = Math.max(0, Math.min(255, Math.floor(((num >> 16) & 0xff) * (1 - percent))))
  const g = Math.max(0, Math.min(255, Math.floor(((num >> 8) & 0xff) * (1 - percent))))
  const b = Math.max(0, Math.min(255, Math.floor((num & 0xff) * (1 - percent))))

  return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`
}

function ReactBitsFolder({
  color = '#c8f135',
  size = 1,
  items = [],
  className = '',
}: ReactBitsFolderProps) {
  const maxItems = 3
  const papers = items.slice(0, maxItems)

  while (papers.length < maxItems) {
    papers.push(null)
  }

  const [open, setOpen] = useState(false)
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  )
  const [paperLift, setPaperLift] = useState(
    Array.from({ length: maxItems }, () => 0)
  )

  const folderBackColor = darkenColor(color, 0.08)
  const paperColors = [darkenColor('#ffffff', 0.1), darkenColor('#ffffff', 0.05), '#ffffff']

  const handleClick = () => {
    setOpen((prev) => !prev)

    if (open) {
      setPaperLift(Array.from({ length: maxItems }, () => 0))
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })))
    }
  }

  const handlePaperMouseMove = (
    e: MouseEvent<HTMLDivElement>,
    index: number
  ) => {
    if (!open) return

    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2

    setPaperOffsets((prev) => {
      const next = [...prev]
      next[index] = {
        x: (e.clientX - centerX) * 0.06,
        y: (e.clientY - centerY) * 0.06,
      }
      return next
    })
  }

  const handlePaperMouseEnter = (index: number) => {
    setPaperLift((prev) => {
      const next = [...prev]
      next[index] = 1
      return next
    })
  }

  const handlePaperMouseLeave = (index: number) => {
    setPaperLift((prev) => {
      const next = [...prev]
      next[index] = 0
      return next
    })
    setPaperOffsets((prev) => {
      const next = [...prev]
      next[index] = { x: 0, y: 0 }
      return next
    })
  }

  const getOpenTransform = (index: number) => {
    if (index === 0) return 'translate(-145%, -62%) rotate(-12deg)'
    if (index === 1) return 'translate(-50%, -112%) rotate(0deg)'
    return 'translate(45%, -62%) rotate(12deg)'
  }

  return (
    <div style={{ transform: `scale(${size})` }} className={className}>
      <button
        type="button"
        aria-expanded={open}
        aria-label={open ? 'Close vibe project folder' : 'Open vibe project folder'}
        onClick={handleClick}
        className={`group relative border-0 bg-transparent p-0 transition-all duration-200 ease-in ${
          !open ? 'hover:-translate-y-2' : ''
        }`}
        style={{ transform: open ? 'translateY(-8px)' : undefined }}
      >
        <div
          className="relative h-[80px] w-[100px] rounded-[0_10px_10px_10px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute bottom-[98%] left-0 z-0 h-[10px] w-[30px] rounded-[5px_5px_0_0]"
            style={{ backgroundColor: folderBackColor }}
          />

          {papers.map((item, index) => {
            const sizeClasses = [
              'h-[80%] w-[70%]',
              open ? 'h-[80%] w-[80%]' : 'h-[70%] w-[80%]',
              open ? 'h-[80%] w-[90%]' : 'h-[60%] w-[90%]',
            ][index]

            const transform = open
              ? `${getOpenTransform(index)} translate(${paperOffsets[index].x}px, ${paperOffsets[index].y - paperLift[index] * 10}px) scale(${1 + paperLift[index] * 0.08})`
              : undefined

            return (
              <div
                key={index}
                onMouseEnter={() => handlePaperMouseEnter(index)}
                onMouseMove={(e) => handlePaperMouseMove(e, index)}
                onMouseLeave={() => handlePaperMouseLeave(index)}
                className={`absolute bottom-[10%] left-1/2 overflow-hidden rounded-[10px] shadow-[0_8px_24px_rgba(0,0,0,0.12)] transition-all duration-500 ease-out ${
                  open
                    ? ''
                    : '-translate-x-1/2 translate-y-[10%] group-hover:translate-y-0'
                } ${sizeClasses}`}
                style={{
                  ...(open ? { transform } : {}),
                  zIndex: open ? 20 + index + Math.round(paperLift[index] * 20) : 20,
                  backgroundColor: paperColors[index],
                }}
              >
                {item}
              </div>
            )
          })}

          <div
            className={`absolute z-30 h-full w-full origin-bottom rounded-[5px_10px_10px_10px] transition-all duration-300 ease-in-out ${
              !open ? 'group-hover:[transform:skew(15deg)_scaleY(0.6)]' : ''
            }`}
            style={{
              backgroundColor: color,
              ...(open ? { transform: 'skew(15deg) scaleY(0.6)' } : {}),
            }}
          />
          <div
            className={`absolute z-30 h-full w-full origin-bottom rounded-[5px_10px_10px_10px] transition-all duration-300 ease-in-out ${
              !open ? 'group-hover:[transform:skew(-15deg)_scaleY(0.6)]' : ''
            }`}
            style={{
              backgroundColor: color,
              ...(open ? { transform: 'skew(-15deg) scaleY(0.6)' } : {}),
            }}
          />
        </div>
      </button>
    </div>
  )
}

function Folder({ projects }: { projects: VibeProject[] }) {
  const [open, setOpen] = useState(false)
  const showProjectCards = projects.length > 3
  const previewItems = projects.slice(0, 3).map((project) => (
    <div
      key={project.title}
      className="flex h-full flex-col justify-end p-2 text-left"
      style={{ background: project.color }}
    >
      <span className="text-[10px] font-bold text-[#0d0d0d]">{project.emoji}</span>
      <span className="line-clamp-2 text-[8px] leading-tight font-semibold text-[#5c5a54]">
        {project.title}
      </span>
    </div>
  ))

  return (
    <div className="flex w-full flex-col items-center">
      <div
        className="flex h-[340px] w-full items-end justify-center pb-10"
        onClick={() => setOpen((prev) => !prev)}
      >
        <ReactBitsFolder color="#c8f135" size={2.1} items={previewItems} />
      </div>

      {showProjectCards && (
        <div className="relative min-h-[360px] w-full">
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 12 }}
                transition={{ duration: 0.28 }}
                className="absolute inset-x-0 top-0 grid w-full grid-cols-[repeat(auto-fit,minmax(210px,1fr))] gap-4"
              >
                {projects.map((project, index) => (
                  <motion.div
                    key={project.title}
                    initial={{ opacity: 0, y: 16, scale: 0.96 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ delay: index * 0.05, type: 'spring', stiffness: 300, damping: 24 }}
                  >
                    <Link href={project.link} className="block h-full text-inherit no-underline">
                      <div
                        className="h-full rounded-lg border border-black/5 p-6 transition duration-200 hover:-translate-y-1 hover:shadow-[0_14px_38px_rgba(0,0,0,0.09)]"
                        style={{ background: project.color }}
                      >
                        <div className="mb-4 text-[13px] font-bold text-[#0d0d0d]">{project.emoji}</div>
                        <div className="font-syne mb-2 text-[16px] leading-tight font-bold">
                          {project.title}
                        </div>
                        <p className="text-[13px] leading-[1.55] text-[#5c5a54]">{project.desc}</p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      )}
    </div>
  )
}

export default Folder
export { vibeProjects }
