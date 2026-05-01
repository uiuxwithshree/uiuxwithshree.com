'use client'

import { ChevronLeft, ChevronRight } from "@mui/icons-material"
import Image from "next/image"
import { useState } from "react"

const CAROUSEL_PHOTOS = [
    
    '/images/carousel/photo3.jpeg',
    '/images/carousel/photo2.jpeg',
    '/images/carousel/photo1.jpeg'
]



function PhotoCarousel() {
    const [idx, setIdx] = useState(0)
    const prev = () => setIdx((i) => (i - 1 + CAROUSEL_PHOTOS.length) % CAROUSEL_PHOTOS.length)
    const next = () => setIdx((i) => (i + 1) % CAROUSEL_PHOTOS.length)

    return (
        <div className="relative h-full w-full overflow-hidden rounded-3xl bg-[#f5f4f0]">


            <Image src={CAROUSEL_PHOTOS[idx]} alt={`Carousel photo ${idx + 1}`} fill className="h-auto w-full object-cover" />


            <button
                onClick={prev}
                className="
                    absolute bottom-1 left-3
                    flex size-10 -translate-y-1/2 items-center justify-center

                    rounded-full
                    bg-linear-to-br from-white/25 to-white/5
                    backdrop-blur-xl

                    border border-white/20
                    shadow-[0_8px_30px_rgba(0,0,0,0.25)]

                    text-white

                    transition-all duration-300
                
                    hover:from-white/35 hover:to-white/10
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]

                    before:absolute before:inset-0
                    before:rounded-full
                    before:bg-white/20
                    before:opacity-20

                    after:absolute after:inset-0
                    after:rounded-full
                    after:bg-linear-to-br
                    after:from-white/60 after:to-transparent
                    after:opacity-25
                "
                aria-label="Previous photo"
            >
                <ChevronLeft fontSize="small" className="text-white" />
            </button>

            <button
                onClick={next}
                className="
                    absolute bottom-1 right-3
                    flex size-10 -translate-y-1/2 items-center justify-center

                    rounded-full
                    bg-linear-to-br from-white/25 to-white/5
                    backdrop-blur-xl

                    border border-white/20
                    shadow-[0_8px_30px_rgba(0,0,0,0.25)]

                    text-white

                    transition-all duration-300
                    hover:from-white/35 hover:to-white/10
                    hover:shadow-[0_12px_40px_rgba(0,0,0,0.35)]

                    before:absolute before:inset-0
                    before:rounded-full
                    before:bg-white/20
                    before:opacity-20

                    after:absolute after:inset-0
                    after:rounded-full
                    after:bg-linear-to-br
                    after:from-white/60 after:to-transparent
                    after:opacity-25
                "
                aria-label="Next photo"
            >
                <ChevronRight fontSize="small" className="text-white" />
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

export default PhotoCarousel
