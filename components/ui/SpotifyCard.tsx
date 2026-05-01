'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { MusicNoteRounded, OpenInNewRounded } from '@mui/icons-material'

interface SpotifyTrack {
  isPlaying: boolean
  title: string
  artist: string
  albumArt: string
  songUrl: string
}

// Extracts the dominant + accent color from album art using a canvas pixel sample
function extractColors(imgEl: HTMLImageElement): { dominant: string; accent: string } {
  try {
    const canvas = document.createElement('canvas')
    const size = 40
    canvas.width = size
    canvas.height = size
    const ctx = canvas.getContext('2d')!
    ctx.drawImage(imgEl, 0, 0, size, size)

    const data = ctx.getImageData(0, 0, size, size).data
    let r = 0, g = 0, b = 0, count = 0

    // Sample every 4th pixel, skip near-black and near-white
    for (let i = 0; i < data.length; i += 16) {
      const pr = data[i], pg = data[i + 1], pb = data[i + 2]
      const brightness = (pr + pg + pb) / 3
      if (brightness > 30 && brightness < 220) {
        r += pr; g += pg; b += pb; count++
      }
    }

    if (count === 0) return { dominant: '30,30,30', accent: '29,185,84' }
    r = Math.round(r / count)
    g = Math.round(g / count)
    b = Math.round(b / count)

    // Deepen dominant for bg use
    const dominant = `${Math.round(r * 0.35)},${Math.round(g * 0.35)},${Math.round(b * 0.35)}`
    // Brighten accent for glow
    const accent = `${Math.min(255, Math.round(r * 1.2))},${Math.min(255, Math.round(g * 1.2))},${Math.min(255, Math.round(b * 1.2))}`

    return { dominant, accent }
  } catch {
    return { dominant: '30,30,30', accent: '29,185,84' }
  }
}

function EqBars({ playing }: { playing: boolean }) {
  return (
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: '2px', height: '14px' }}>
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          style={{
            width: '3px',
            borderRadius: '2px',
            background: '#1DB954',
            height: playing ? `${5 + i * 3}px` : '4px',
            animation: playing ? `eq-bar-${i} ${0.4 + i * 0.1}s ease-in-out infinite alternate` : 'none',
            transition: 'height 0.4s ease',
          }}
        />
      ))}
      <style>{`
        @keyframes eq-bar-1 { from { height: 4px } to { height: 12px } }
        @keyframes eq-bar-2 { from { height: 6px } to { height: 14px } }
        @keyframes eq-bar-3 { from { height: 8px } to { height: 10px } }
        @keyframes eq-bar-4 { from { height: 5px } to { height: 13px } }
      `}</style>
    </div>
  )
}

export default function SpotifyCard() {
  const [track, setTrack] = useState<SpotifyTrack | null>(null)
  const [loading, setLoading] = useState(true)
  const [colors, setColors] = useState({ dominant: '18,18,18', accent: '29,185,84' })
  const imgRef = useRef<HTMLImageElement | null>(null)

  // auto refresh every 30s
  
  useEffect(() => {
    const interval = setInterval(() => {
      fetch('/api/spotify')
        .then((r) => r.json())
        .then((d) => { setTrack(d); setLoading(false) })
        .catch(() => setLoading(false))
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  

  // When album art loads, extract its colors
  const handleImageLoad = (e: React.SyntheticEvent<HTMLImageElement>) => {
    imgRef.current = e.currentTarget
    const extracted = extractColors(e.currentTarget)
    setColors(extracted)
  }

  const t = track ?? {
    isPlaying: false,
    title: loading ? 'Loading...' : 'Save Your Tears (Remix)',
    artist: loading ? '' : 'The Weeknd, Ariana Grande',
    albumArt: '',
    songUrl: '#',
  }

  const bgStyle = {
    background: `
      radial-gradient(ellipse at top left, rgba(${colors.accent}, 0.35) 0%, transparent 60%),
      radial-gradient(ellipse at bottom right, rgba(${colors.accent}, 0.2) 0%, transparent 55%),
      rgb(${colors.dominant})
    `,
    transition: 'background 1.2s ease',
  }

  return (
    <div
      className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl p-5 text-white"
      style={bgStyle}
    >
      {/* Ambient blob — drifts slowly in bg */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: '180px',
          height: '180px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${colors.accent}, 0.25) 0%, transparent 70%)`,
          top: '-40px',
          right: '-40px',
          animation: 'blobDrift 8s ease-in-out infinite alternate',
          pointerEvents: 'none',
        }}
      />
      <div
        aria-hidden
        style={{
          position: 'absolute',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background: `radial-gradient(circle, rgba(${colors.accent}, 0.15) 0%, transparent 70%)`,
          bottom: '-20px',
          left: '-20px',
          animation: 'blobDrift 10s ease-in-out infinite alternate-reverse',
          pointerEvents: 'none',
        }}
      />

      {/* Header */}
      <div className="relative flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="#1DB954" aria-hidden>
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <span className="text-[11px] font-semibold tracking-wider uppercase" style={{ color: 'rgba(255,255,255,0.5)' }}>
            {t.isPlaying ? 'Now playing' : 'Last played'}
          </span>
        </div>
        <EqBars playing={t.isPlaying} />
      </div>

      {/* Track row */}
      <div className="relative flex items-center gap-4">
        {/* Album art with glow ring */}
        <div
          style={{
            position: 'relative',
            flexShrink: 0,
            width: '100px',
            height: '100px',
            borderRadius: '12px',
            boxShadow: `0 0 0 2px rgba(${colors.accent},0.3), 0 8px 24px rgba(0,0,0,0.5)`,
            overflow: 'hidden',
            background: '#333',
            animation: t.isPlaying ? 'albumPulse 3s ease-in-out infinite' : 'none',
            transition: 'box-shadow 1.2s ease',
          }}
        >
          {t.albumArt ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={t.albumArt}
              alt={t.title}
              onLoad={handleImageLoad}
              crossOrigin="anonymous"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          ) : (
            <div className="flex h-full items-center justify-center" style={{ color: 'rgba(255,255,255,0.3)' }}>
              <MusicNoteRounded fontSize="small" aria-hidden />
            </div>
          )}
        </div>

        {/* Track info */}
        <div style={{ minWidth: 0 }}>
          <div
            className="truncate text-base font-bold leading-tight"
            style={{ letterSpacing: '-0.01em' }}
          >
            {t.title}
          </div>
          <div className="mt-1 truncate text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
            {t.artist}
          </div>
          <Link
            href={t.songUrl || '#'}
            target="_blank"
            className="mt-2 inline-flex items-center gap-1 no-underline hover:underline"
            style={{ fontSize: '11px', color: '#1DB954' }}
          >
            Save on Spotify
            <OpenInNewRounded sx={{ fontSize: 11 }} aria-hidden />
          </Link>
        </div>
      </div>

      <style>{`
        @keyframes blobDrift {
          from { transform: translate(0, 0) scale(1); }
          to   { transform: translate(10px, 12px) scale(1.08); }
        }
        @keyframes albumPulse {
          0%, 100% { box-shadow: 0 0 0 2px rgba(${colors.accent},0.3), 0 8px 24px rgba(0,0,0,0.5); }
          50%       { box-shadow: 0 0 0 4px rgba(${colors.accent},0.5), 0 8px 32px rgba(0,0,0,0.6); }
        }
      `}</style>
    </div>
  )
}