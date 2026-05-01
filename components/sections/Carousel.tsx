import Image from "next/image"

interface CarouselItem {
  id: string
  label: string
  gradient?: string
  src: string
}

const items: CarouselItem[] = [
  { id: 'Design Samvaad', label: 'Gurugram', src: '/images/carousel/photo7.jpeg' },
  { id: 'Nainital', label: 'Nainital', src: '/images/carousel/photo5.jpeg' },
  { id: 'India AI Summit', label: 'Delhi', src: '/images/carousel/photo6.jpeg' },
  { id: 'Vrindavan', label: 'Vrindavan', src: '/images/carousel/photo8.jpeg' }
]

const doubled = [...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items, ...items]

export default function Carousel() {

  return (
    <section
      id="carousel"
      className="overflow-hidden bg-[#ffffff] py-[clamp(60px,10vw,100px)] rounded-b-4xl"
    >
      <div className="mb-20 px-[clamp(24px,6vw,80px)] text-center">
        <span className="mb-3 block text-[11px] font-semibold tracking-[0.12em] text-[#9e9b93] uppercase">
          Through the lens
        </span>
        <h2 className="font-playfair italic text-[clamp(36px,5vw,64px)] leading-none font-extrabold tracking-[-0.03em]">
          Glimpses of life &<br />UI explorations
        </h2>
      </div>

      <div className="w-full">
        <div className="carousel-track animate-scroll-left flex w-max gap-10 pl-6">
          {doubled.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className={`
                relative h-80 w-65 shrink-0 cursor-pointer overflow-hidden rounded-4xl
                transition-all duration-300 border-8 border-white shadow-xl
                ${idx % 2 === 0 ? 'rotate-[-4deg] translate-y-3' : 'rotate-[4deg] -translate-y-3'}
                hover:rotate-0 hover:translate-y-0
              `}
            >
              <Image src={item.src} alt={item.label} fill className="object-cover rounded-4xl" />
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2">
                <span className="whitespace-nowrap rounded-full bg-white/90 px-3.5 py-1.5 text-[13px] font-semibold text-[#0d0d0d] backdrop-blur">
                  {item.id}
                </span>
              </div>
            </div>
          ))} 
        </div>
      </div>
    </section>
  )
}
