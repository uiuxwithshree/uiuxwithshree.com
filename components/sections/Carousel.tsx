'use client'

import { useState } from 'react'

interface CarouselItem {
  id: string
  label: string
  gradient: string
  src?: string
}

const items: CarouselItem[] = [
  { id: 'delhi', label: 'Delhi', gradient: 'linear-gradient(160deg, #c9d6e3, #f3a683)' },
  { id: 'agra', label: 'Agra', gradient: 'linear-gradient(160deg, #f8b4d9, #f6d860)' },
  { id: 'ladakh', label: 'Ladakh', gradient: 'linear-gradient(160deg, #a8edea, #fed6e3)' },
  { id: 'goa', label: 'Goa', gradient: 'linear-gradient(160deg, #43c6ac, #f8ffae)' },
  { id: 'pondi', label: 'Pondicherry', gradient: 'linear-gradient(160deg, #667eea, #764ba2)' },
  { id: 'vrindavan', label: 'Vrindavan', gradient: 'linear-gradient(160deg, #ffecd2, #fcb69f)' },
  { id: 'ui1', label: 'UI Redesign #1', gradient: '#f0f0f0' },
  { id: 'ui2', label: 'UI Redesign #2', gradient: '#f0f4ff' },
  { id: 'ui3', label: 'UI Exploration', gradient: '#f5f4f0' },
]

const doubled = [...items, ...items]

export default function Carousel() {
  const [lightbox, setLightbox] = useState<CarouselItem | null>(null)

  return (
    <section
      id="carousel"
      className="overflow-hidden bg-[#ffffff] py-[clamp(60px,10vw,100px)] rounded-b-4xl"
    >
      <div className="mb-10 px-[clamp(24px,6vw,80px)] text-center">
        <span className="mb-3 block text-[11px] font-semibold tracking-[0.12em] text-[#9e9b93] uppercase">
          Through the lens
        </span>
        <h2 className="font-syne text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]">
          Glimpses of life &<br />UI explorations
        </h2>
      </div>

      <div className="w-full overflow-hidden">
        <div className="carousel-track animate-scroll-left flex w-max gap-4 pl-6">
          {doubled.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              onClick={() => setLightbox(item)}
              className="relative h-80 w-[260px] shrink-0 cursor-pointer overflow-hidden rounded-[20px] transition-transform duration-300 hover:scale-[1.02]"
              style={{ background: item.gradient }}
            >
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <span className="whitespace-nowrap rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] font-semibold text-[#0d0d0d] backdrop-blur">
                  {item.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/85 backdrop-blur-xl"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative flex h-[min(80vh,520px)] w-[min(90vw,700px)] items-center justify-center rounded-3xl"
            style={{ background: lightbox.gradient }}
          >
            <div className="text-center text-sm text-black/40">
              <div className="mb-2 text-[40px]">🖼️</div>
              {lightbox.label}
              <br />
              <span className="text-xs">Add your image to /public/images/</span>
            </div>

            <button
              onClick={() => setLightbox(null)}
              className="absolute top-4 right-4 flex size-9 cursor-pointer items-center justify-center rounded-full border-0 bg-black/20 text-lg text-white backdrop-blur"
            >
              ✕
            </button>

            <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
              <span className="whitespace-nowrap rounded-full bg-white/90 px-4 py-1.5 text-[13px] font-semibold text-[#0d0d0d]">
                {lightbox.label}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
