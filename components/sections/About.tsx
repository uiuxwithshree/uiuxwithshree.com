'use client'

import { useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ChevronLeft from '@mui/icons-material/ChevronLeft'
import ChevronRight from '@mui/icons-material/ChevronRight'
import OpenInNewRounded from '@mui/icons-material/OpenInNewRounded'
import PauseRounded from '@mui/icons-material/PauseRounded'
import PlayArrowRounded from '@mui/icons-material/PlayArrowRounded'
import SendRounded from '@mui/icons-material/SendRounded'

import figmaicon from "@/public/images/icons/figma.svg"
import notionicon from "@/public/images/icons/notion.svg"
import framericon from "@/public/images/icons/framer.svg"
import openaiicon from "@/public/images/icons/openai.svg"
import mazeicon from "@/public/images/icons/maze.svg"
import claudeicon from "@/public/images/icons/claude.svg"
import miroicon from "@/public/images/icons/miro.svg"
import SpotifyCard from '../ui/SpotifyCard'

interface SpotifyTrack {
  isPlaying: boolean
  title: string
  artist: string
  albumArt: string
  songUrl: string
}

const CAROUSEL_PHOTOS = [
  '/images/carousel/photo1.jpeg',
  '/images/carousel/photo2.jpeg',
]

const TOOLS = [
  { name: 'Figma', Icon: figmaicon },
  { name: 'Notion', Icon: notionicon },
  { name: 'Framer', Icon: framericon },
  { name: 'OpenAI', Icon: openaiicon },
  { name: 'Maze', Icon: mazeicon },
  { name: 'Claude', Icon: claudeicon },
  { name: 'Miro', Icon: miroicon },
]

const BOOK = {
  title: 'The Mountain is You',
  author: 'Brianna Wiest',
  coverUrl: 'https://covers.openlibrary.org/b/isbn/9781949759228-L.jpg',
  openLibraryUrl: 'https://openlibrary.org/works/OL25436364W',
}

const TOOLS_DOUBLED = [...TOOLS, ...TOOLS]

function PhotoCarousel() {
  const [idx, setIdx] = useState(0)
  const prev = () => setIdx((i) => (i - 1 + CAROUSEL_PHOTOS.length) % CAROUSEL_PHOTOS.length)
  const next = () => setIdx((i) => (i + 1) % CAROUSEL_PHOTOS.length)

  return (
    <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#f5f4f0]">
     
       
          <Image src={CAROUSEL_PHOTOS[idx]} alt={`Carousel photo ${idx + 1}`} fill className="h-auto w-full object-cover" />
     

      <button
        onClick={prev}
        className="absolute top-1/2 left-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-sm shadow-md backdrop-blur-sm transition hover:bg-white"
        aria-label="Previous photo"
      >
        <ChevronLeft fontSize="small" aria-hidden />
      </button>
      <button
        onClick={next}
        className="absolute top-1/2 right-3 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 text-sm shadow-md backdrop-blur-sm transition hover:bg-white"
        aria-label="Next photo"
      >
        <ChevronRight fontSize="small" aria-hidden />
      </button>

      <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
        {CAROUSEL_PHOTOS.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            className={`size-1.5 rounded-full transition-all ${i === idx ? 'w-4 bg-white' : 'bg-white/50'}`}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

function ToolsTicker() {
  return (
    <div className="flex h-16 md:h-full items-center overflow-hidden rounded-3xl border border-[#e8e6e0] bg-[#F5F5F5]">
      <div
        className="flex shrink-0 gap-3"
        style={{ animation: 'ticker 18s linear infinite', width: 'max-content' }}
      >
        {TOOLS_DOUBLED.map((tool, i) => (
          <ToolPill key={`${tool.name}-${i}`} name={tool.name} Icon={tool.Icon} />
        ))}
      </div>
      <style jsx>{`
        @keyframes ticker {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}

function ToolPill({ name, Icon }: (typeof TOOLS)[number]) {
  return (
    <div className="flex shrink-0 items-center gap-2 rounded-full border border-[#e8e6e0] bg-white p-5">
      <Image src={Icon} alt={`${name} icon`} width={36} height={36} />
    </div>
  )
}

function ContactCard() {
  const [msg, setMsg] = useState('')
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!msg.trim()) return

    setStatus('sending')

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: '76da9979-038b-4f6a-81d9-c8a55db66815',
          message: msg,
          subject: 'Someone sent a message from your portfolio!',
        }),
      })
      const data = await res.json()

      if (data.success) {
        setStatus('sent')
        setMsg('')
        setTimeout(() => setStatus('idle'), 3000)
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  return (
    <div className="flex h-full flex-col justify-between rounded-3xl border border-[#e8e6e0] bg-white p-7">
      <div>
        <h3 className="font-syne mb-1.5 text-2xl leading-tight font-bold">
          Hi, I&apos;m Shree
        </h3>
        <p className="text-sm leading-[1.6] text-[#5c5a54]">
          Have a project in mind? Want to hire me? Looking for a design partner? Or just want to say hi? I'm all ears.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="mt-4 flex gap-2">
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder={
            status === 'sent'
              ? 'Message sent!'
              : status === 'error'
                ? 'Something went wrong...'
                : 'Send a message'
          }
          disabled={status === 'sending' || status === 'sent'}
          className="min-w-0 flex-1 rounded-full border border-[#e8e6e0] bg-[#f5f4f0] px-4 py-2.5 text-sm text-[#0d0d0d] outline-none transition-colors placeholder:text-[#9e9b93] focus:border-[#0d0d0d] disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === 'sending' || status === 'sent' || !msg.trim()}
          className="flex size-10 shrink-0 items-center justify-center rounded-full bg-[#5A39ED] text-white transition hover:bg-[#4a2fd4] disabled:opacity-50"
        >
          {status === 'sending' ? (
            <span className="size-3 animate-spin rounded-full border-2 border-white border-t-transparent" />
          ) : (
            <SendRounded sx={{ fontSize: 18 }} aria-hidden />
          )}
        </button>
      </form>
    </div>
  )
}

function VideoCard() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const toggle = () => {
    if (!videoRef.current) return

    if (playing) {
      videoRef.current.pause()
    } else {
      videoRef.current.play()
    }

    setPlaying(!playing)
  }

  return (
    <div
      className="relative h-full w-full cursor-pointer overflow-hidden rounded-3xl bg-[#0d0d0d]"
      onClick={toggle}
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="text-center text-sm text-white/30">
          <div className="mb-2 text-4xl">Video</div>
          Add /public/images/intro.mp4
        </div>
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="flex size-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition hover:bg-white/30">
          {playing ? (
            <PauseRounded className="text-white" fontSize="large" aria-hidden />
          ) : (
            <PlayArrowRounded className="text-white" fontSize="large" aria-hidden />
          )}
        </div>
      </div>

      <div className="absolute bottom-4 left-4">
        <span className="rounded-full bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
          Short intro
        </span>
      </div>
    </div>
  )
}

function BookCard() {
  const [colors, setColors] = useState({ dominant: '255,243,196', accent: '186,117,23' })
  const [loaded, setLoaded] = useState(false)

  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    try {
      const canvas = document.createElement('canvas')
      const size = 40
      canvas.width = size
      canvas.height = size
      const ctx = canvas.getContext('2d')!
      ctx.drawImage(e.currentTarget, 0, 0, size, size)
      const data = ctx.getImageData(0, 0, size, size).data

      let r = 0, g = 0, b = 0, count = 0
      for (let i = 0; i < data.length; i += 16) {
        const pr = data[i], pg = data[i + 1], pb = data[i + 2]
        const brightness = (pr + pg + pb) / 3
        if (brightness > 30 && brightness < 220) {
          r += pr; g += pg; b += pb; count++
        }
      }

      if (count === 0) return
      r = Math.round(r / count)
      g = Math.round(g / count)
      b = Math.round(b / count)

      // Light warm tint for bg, deeper for accent/glow
      const dominant = `${Math.min(255, Math.round(r * 1.6 + 60))},${Math.min(255, Math.round(g * 1.6 + 50))},${Math.min(255, Math.round(b * 1.4 + 40))}`
      const accent = `${Math.round(r * 0.7)},${Math.round(g * 0.7)},${Math.round(b * 0.7)}`

      setColors({ dominant, accent })
    } catch {
      // canvas tainted — keep fallback
    }
    setLoaded(true)
  }

  const bgStyle = {
    background: `
      radial-gradient(ellipse at top right, rgba(${colors.accent}, 0.22) 0%, transparent 60%),
      radial-gradient(ellipse at bottom left, rgba(${colors.accent}, 0.14) 0%, transparent 55%),
      rgb(${colors.dominant})
    `,
    transition: 'background 1.2s ease',
  }

  return (
    <div
      className="relative flex h-full flex-col justify-between gap-5 overflow-hidden rounded-3xl p-7"
      style={bgStyle}
    >
      {/* Drifting ambient blob */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: '160px',
          height: '160px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${colors.accent}, 0.2) 0%, transparent 70%)`,
          top: '-40px',
          right: '-30px',
          animation: 'bookBlob 9s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />

      {/* Book cover */}
      <div
        className="relative shrink-0 overflow-hidden rounded-lg"
        style={{
          width: '126px',
          height: '190px',
          transform: loaded ? 'rotate(-3deg)' : 'rotate(-3deg)',
          boxShadow: `4px 8px 24px rgba(${colors.accent}, 0.45), 2px 4px 8px rgba(0,0,0,0.2)`,
          transition: 'box-shadow 1.2s ease',
        }}
      >
        <img
          src={BOOK.coverUrl}
          alt={BOOK.title}
          crossOrigin="anonymous"
          onLoad={handleImageLoad}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
          className="h-full w-full object-cover"
        />
        {/* Spine shadow */}
        <div className="absolute inset-y-0 left-0 w-2 bg-black/10" />
        {/* Cover sheen */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(135deg, rgba(255,255,255,0.15) 0%, transparent 50%)',
            pointerEvents: 'none',
          }}
        />
      </div>

      {/* Text */}
      <div className="relative min-w-0">
        <div
          className="mb-2 text-[11px] font-semibold tracking-[0.1em] uppercase"
          style={{ color: `rgba(${colors.accent}, 0.7)` }}
        >
          Currently reading
        </div>
        <div
          className="font-syne mb-1 text-[20px] font-bold leading-[1.1]"
          style={{ color: `rgb(${colors.accent.split(',').map((v) => Math.round(Number(v) * 0.5)).join(',')})` }}
        >
          {BOOK.title}
        </div>
        <div
          className="mb-3 text-[13px]"
          style={{ color: `rgba(${colors.accent}, 0.65)` }}
        >
          {BOOK.author}
        </div>
        <Link
          href={BOOK.openLibraryUrl}
          target="_blank"
          className="inline-flex items-center gap-1 text-[12px] font-semibold no-underline hover:underline"
          style={{ color: `rgb(${colors.accent})` }}
        >
          View on Open Library
          <OpenInNewRounded sx={{ fontSize: 13 }} aria-hidden />
        </Link>
      </div>

      <style>{`
        @keyframes bookBlob {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(-12px, 14px) scale(1.1); }
        }
      `}</style>
    </div>
  )
}

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
        <h2 className="font-playfair italic mb-12 text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]">
          About Me
        </h2>
      </div>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-[220px_160px_220px] p-10 shadow-2xl rounded-4xl max-w-6xl mx-auto">
        <div className="min-h-[420px] overflow-hidden rounded-3xl lg:row-span-2 lg:min-h-0">
          <PhotoCarousel />
        </div>

        <div className="min-h-[220px] lg:col-span-2 lg:min-h-0">
          <ContactCard />
        </div>

        <div className="h-16 lg:h-full">
          <ToolsTicker />
        </div>

        <div className="min-h-[380px] lg:row-span-2 lg:min-h-0">
          <BookCard />
        </div>

        <div className="min-h-[220px] lg:min-h-0">
          <SpotifyCard />
        </div>

        <div className="min-h-[220px] lg:min-h-0">
          <VideoCard />
        </div>
      </div>
    </section>
  )
}
