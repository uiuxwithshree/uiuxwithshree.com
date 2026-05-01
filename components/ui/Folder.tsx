'use client'

import {
  useState,
  type CSSProperties,
  type KeyboardEvent,
  type MouseEvent,
  type ReactNode,
} from 'react'
import { motion } from 'motion/react'

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
  {
    emoji: '01',
    title: 'Aircanvas Draw',
    desc: 'Built a gesture-based drawing canvas exploring contactless interaction using AI, mapping hand movements to draw, erase, and navigate without touch.',
    link: 'https://www.linkedin.com/posts/shree-chaurasia_productdesign-uxdesign-interactiondesign-ugcPost-7440350242849501184-9-4m?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfePKgBGfvtF-X_r03xJ3D6iiWzeYKqTyE',
    color: '#fff3c4'
  },
  {
    emoji: '02',
    title: 'Personal Bookshelf',
    desc: 'Designed and built a simple digital bookshelf to track reading across “read”, “reading”, and “to-read” with drag-and-drop interactions and clean utility-focused UI.',
    link: 'https://www.linkedin.com/posts/shree-chaurasia_buildinpublic-sideproject-designandcode-share-7452416053902712832-ne2Y?utm_source=share&utm_medium=member_desktop&rcm=ACoAADfePKgBGfvtF-X_r03xJ3D6iiWzeYKqTyE',
    color: '#d6f5e8'
  }
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
  size,
  items = [],
  className = '',
}: ReactBitsFolderProps) {
  const maxItems = 3
  const papers = items.slice(0, maxItems)

  const [open, setOpen] = useState(false)
  const [paperOffsets, setPaperOffsets] = useState(
    Array.from({ length: maxItems }, () => ({ x: 0, y: 0 }))
  )
  const [paperLift, setPaperLift] = useState(
    Array.from({ length: maxItems }, () => 0)
  )

  const folderBackColor = darkenColor(color, 0.08)
  const paperColors = [darkenColor('#ffffff', 0.1), darkenColor('#ffffff', 0.05), '#ffffff']

  const toggleOpen = () => {
    setOpen((prev) => !prev)

    if (open) {
      setPaperLift(Array.from({ length: maxItems }, () => 0))
      setPaperOffsets(Array.from({ length: maxItems }, () => ({ x: 0, y: 0 })))
    }
  }

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== 'Enter' && e.key !== ' ') return

    e.preventDefault()
    toggleOpen()
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
    if (papers.length === 1) return 'translate(-50%, -112%) rotate(0deg)'
    if (papers.length === 2) {
      return index === 0
        ? 'translate(-112%, -80%) rotate(-10deg)'
        : 'translate(12%, -80%) rotate(10deg)'
    }

    if (index === 0) return 'translate(-128%, -54%) rotate(-12deg)'
    if (index === 1) return 'translate(-50%, -120%) rotate(0deg)'
    return 'translate(28%, -54%) rotate(12deg)'
  }

  const scaleStyle = size
    ? ({ '--folder-scale': size } as CSSProperties)
    : undefined

  return (
    <div
      style={scaleStyle}
      className={`transform-[scale(var(--folder-scale,1))] ${className}`}
    >
      <div
        role="button"
        tabIndex={0}
        aria-expanded={open}
        aria-label={open ? 'Close vibe project folder' : 'Open vibe project folder'}
        onClick={toggleOpen}
        onKeyDown={handleKeyDown}
        className={`group relative border-0 bg-transparent p-0 transition-all duration-200 ease-in ${!open ? 'hover:-translate-y-2' : ''
          }`}
        style={{ transform: open ? 'translateY(-8px)' : undefined }}
      >
        <div
          className="relative h-33 w-42.5 rounded-[0_14px_14px_14px]"
          style={{ backgroundColor: folderBackColor }}
        >
          <span
            className="absolute bottom-[98%] left-0 z-0 h-4.5 w-14 rounded-[9px_9px_0_0]"
            style={{ backgroundColor: folderBackColor }}
          />

          {papers.map((item, index) => {
            const sizeClasses = [
              open ? 'h-[178px] w-[148px]' : 'h-[80%] w-[70%]',
              open ? 'h-[178px] w-[148px]' : 'h-[70%] w-[80%]',
              open ? 'h-[178px] w-[148px]' : 'h-[60%] w-[90%]',
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
                className={`absolute bottom-[10%] left-1/2 overflow-hidden rounded-[10px] transition-all duration-500 ease-out ${open
                  ? ''
                  : '-translate-x-1/2 translate-y-[10%] group-hover:translate-y-0'
                  } ${open ? 'pointer-events-auto shadow-none' : 'pointer-events-none shadow-[0_8px_24px_rgba(0,0,0,0.12)]'} ${sizeClasses}`}
                style={{
                  ...(open ? { transform } : {}),
                  zIndex: open ? 20 + index + Math.round(paperLift[index] * 20) : 20,
                  backgroundColor: open ? 'transparent' : paperColors[index],
                }}
              >
                {item}
              </div>
            )
          })}

          <div
            className={`absolute z-30 h-full w-full origin-bottom rounded-[7px_14px_14px_14px] transition-all duration-300 ease-in-out ${!open ? 'group-hover:transform-[skew(15deg)_scaleY(0.6)]' : ''
              }`}
            style={{
              backgroundColor: color,
              ...(open ? { transform: 'skew(15deg) scaleY(0.6)' } : {}),
            }}
          />
          <div
            className={`absolute z-30 h-full w-full origin-bottom rounded-[7px_14px_14px_14px] transition-all duration-300 ease-in-out ${!open ? 'group-hover:transform-[skew(-15deg)_scaleY(0.6)]' : ''
              }`}
            style={{
              backgroundColor: color,
              ...(open ? { transform: 'skew(-15deg) scaleY(0.6)' } : {}),
            }}
          />
        </div>
      </div>
    </div>
  )
}

function ProjectCard({ project, index }: { project: VibeProject; index: number }) {
  const [flipped, setFlipped] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: index * 0.05, type: 'spring', stiffness: 300, damping: 24 }}
      className="h-full perspective-[1000px]"
    >
      <div
        onClick={(e) => {
          e.stopPropagation()
          setFlipped((p) => !p)
        }}
        className="relative h-full cursor-pointer"
      >
        <motion.div
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.5 }}
          className="relative h-full w-full"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* FRONT */}
          <div
            className="absolute inset-0 rounded-lg border border-black/5 p-4 text-left"
            style={{
              background: project.color,
              transform: 'translateZ(1px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <div className="mb-3 text-[11px] font-bold text-[#0d0d0d]">
              {project.emoji}
            </div>
            <div className="font-syne text-[14px] leading-tight font-bold text-[#0d0d0d]">
              {project.title}
            </div>
          </div>

          {/* BACK */}
          <div
            className="absolute inset-0 flex min-h-0 flex-col rounded-lg border border-black/5 p-4 text-left"
            style={{
              background: project.color,
              transform: 'rotateY(180deg) translateZ(1px)',
              backfaceVisibility: 'hidden',
              WebkitBackfaceVisibility: 'hidden',
            }}
          >
            <p className="line-clamp-6 min-h-0 flex-1 text-[10px] leading-[1.35] text-[#5c5a54]">
              {project.desc}
            </p>

            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="mt-3 shrink-0 text-[10px] font-semibold leading-none text-[#0d0d0d] underline underline-offset-2"
            >
              View Project →
            </a>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

function Folder({ projects }: { projects: VibeProject[] }) {
  const previewItems = projects.slice(0, 3).map((project, index) => (
    <ProjectCard key={project.title} project={project} index={index} />
  ))

  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex h-90 w-full items-end justify-center overflow-visible sm:h-100 ">
        <ReactBitsFolder
          color="#c8f135"
          items={previewItems}
          className="[--folder-scale:.78] min-[420px]:[--folder-scale:.9] sm:[--folder-scale:1.08] md:[--folder-scale:1.35]"
        />
      </div>
    </div>
  )
}

export default Folder
export { vibeProjects }
