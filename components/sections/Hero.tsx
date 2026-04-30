'use client'

import Image from 'next/image'
import { useRef, useCallback } from 'react'

const stickers = [
  {
    alt: 'Sushi sticker',
    src: '/images/sushi.png',
    // depth: how strongly this sticker reacts (higher = more movement)
    depth: 18,
    className: 'bottom-[1%] left-[8%] rotate-[8deg] w-32 h-32 md:w-48 md:h-48',
  },
  {
    alt: 'Suitcase sticker',
    src: '/images/suitcase.png',
    depth: 10,
    className: 'right-[46%] top-[12%] -rotate-[10deg] w-16 h-16 md:w-30 md:h-30',
  },
  {
    alt: 'Figma sticker',
    src: '/images/figma.png',
    depth: 14,
    className: 'bottom-[18%] right-[8%] -rotate-[6deg] w-20 h-20 md:w-28 md:h-28',
  },
  {
    alt: 'Book sticker',
    src: '/images/book.png',
    depth: 22,
    className: 'top-[18%] left-[5%] rotate-[7deg] w-24 h-24 md:w-40 md:h-40',
  },
]

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null)
  // Hold refs to each sticker wrapper DOM node
  const stickerRefs = useRef<(HTMLDivElement | null)[]>([])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    const rect = sectionRef.current?.getBoundingClientRect()
    if (!rect) return

    // Normalised -0.5 → 0.5 relative to section center
    const cx = (e.clientX - rect.left) / rect.width - 0.5
    const cy = (e.clientY - rect.top) / rect.height - 0.5

    stickerRefs.current.forEach((el, i) => {
      if (!el) return
      const d = stickers[i].depth
      // Translate opposite to cursor for parallax feel
      el.style.transform = `translate(${cx * d * -1}px, ${cy * d * -1}px)`
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    stickerRefs.current.forEach((el) => {
      if (!el) return
      el.style.transform = 'translate(0px, 0px)'
    })
  }, [])

  return (
    <section
      id="hero"
      ref={sectionRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col min-h-screen items-center justify-center overflow-hidden bg-white
                 px-6 sm:px-10 md:px-16 lg:px-[clamp(24px,6vw,80px)]
                 pt-[clamp(100px,12vw,140px)] pb-20"
    >
      {/* Radial grid background */}
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-40
          bg-[image:radial-gradient(circle_at_center,transparent_30%,white_100%),linear-gradient(#e8e6e0_1px,transparent_1px),linear-gradient(90deg,#e8e6e0_1px,transparent_1px)]
          bg-[size:100%_100%,40px_40px,40px_40px]"
      />

      {/* Content wrapper */}
      <div className="relative z-10 flex w-full max-w-6xl flex-col items-center gap-12 md:flex-row md:items-center md:justify-center md:gap-10">

        {/* Left — Text */}
        <div className="flex flex-col items-center text-center md:items-start md:text-left">
          {/* Status badge */}
          <div className="animate-fade-up delay-100 mb-7 inline-flex w-fit items-center gap-2 rounded-full border border-[#e8e6e0] bg-white px-3.5 py-1.5 text-xs text-[#5c5a54]">
            <span className="animate-pulse-dot inline-block size-1.75 rounded-full bg-[#2d9e2d]" />
            Available for freelance & full-time
          </div>

          <h1 className="animate-fade-up delay-200 mb-6">
            <span className="font-handwriting text-2xl text-[#5A39ED] sm:text-3xl">
              Hey there. I am
            </span>
            <br />
            <span className="font-playfair text-6xl font-bold italic leading-[1.05] sm:text-7xl md:text-8xl">
              Shree <br /> Chaurasia
            </span>
          </h1>

          <p className="animate-fade-up delay-300 max-w-md text-base leading-[1.7] text-[#5c5a54] sm:text-lg md:max-w-xl md:text-xl">
            A 24-year-old Product Designer. I design things that feel{' '}
            <strong className="text-[#0d0d0d]">
              simple, even when they&apos;re not.
            </strong>
          </p>
        </div>

        {/* Right — Polaroid photo */}
        <div className="animate-fade-up delay-500 flex shrink-0 items-center justify-center">
          <div className="relative rotate-3 transition-transform duration-300 hover:rotate-1 hover:scale-[1.02]">
            <div className="relative w-64 bg-white p-4 py-8 shadow-[0_20px_40px_rgba(0,0,0,0.2)] sm:w-72 md:w-80 lg:w-90">
              <div className="relative h-64 w-full overflow-hidden bg-black sm:h-72 md:h-80 lg:h-90">
                <Image
                  src="/images/photo.jpeg"
                  alt="Profile picture"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <p className="mt-3 text-center text-xs text-gray-600">me.jpeg</p>
            </div>
          </div>
        </div>
      </div>

      {/* Stickers — absolute positioned, parallax via inline transform */}
      {stickers.map((s, i) => (
        <div
          key={s.src}
          ref={(el) => { stickerRefs.current[i] = el }}
          // transition gives the smooth spring-like lag
          style={{ transition: 'transform 0.12s cubic-bezier(0.23, 1, 0.32, 1)' }}
          className={`absolute z-10 ${s.className}`}
        >
          {/* Extra rotation wrapper so rotate class isn't overridden by style transform */}
          <div className="relative h-full w-full">
            <Image src={s.src} alt={s.alt} fill className="object-contain" />
          </div>
        </div>
      ))}

      {/* Grain overlay */}
      <div className="grain-overlay pointer-events-none absolute inset-0 z-20 opacity-40" />
      
    </section>
  )
}