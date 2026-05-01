import SpotifyCard from '../ui/SpotifyCard'
import VideoCard from '../ui/VideoCard'
import BookCard from '../ui/BookCard'
import ContactCard from '../ui/ContactCard'
import ToolsTicker from '../ui/ToolsTicker'
import PhotoCarousel from '../ui/PhotoCarousel'

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

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-[220px_160px_220px] p-5 md:p-10 shadow-2xl rounded-4xl max-w-6xl mx-auto">
        <div className="min-h-105 overflow-hidden rounded-3xl lg:row-span-2 lg:min-h-0">
          <PhotoCarousel />
        </div>

        <div className="min-h-55 lg:col-span-2 lg:min-h-0">
          <ContactCard />
        </div>

        <div className="h-16 lg:h-full">
          <ToolsTicker />
        </div>

        <div className="min-h-95 lg:row-span-2 lg:min-h-0">
          <BookCard />
        </div>

        <div className="min-h-55 lg:min-h-0">
          <SpotifyCard />
        </div>

        <div className="min-h-55 lg:min-h-0">
          <VideoCard />
        </div>
      </div>
    </section>
  )
}
