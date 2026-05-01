'use client'

import { OpenInNewRounded } from "@mui/icons-material"
import Link from "next/link"
import { useState } from "react"

const BOOK = {
  title: 'The Mountain is You',
  author: 'Brianna Wiest',
  coverUrl: 'https://covers.openlibrary.org/b/isbn/9781949759228-L.jpg',
  openLibraryUrl: 'https://openlibrary.org/works/OL25436364W',
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
          className="mb-2 text-[11px] font-semibold tracking-widest uppercase"
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

export default BookCard