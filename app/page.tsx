import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/sections/Hero'
import Projects from '@/components/sections/Projects'
import About from '@/components/sections/About'
import Carousel from '@/components/sections/Carousel'
import Footer from '@/components/ui/Footer'

export default function Home() {
  return (
    <main className="relative bg-[#5A39ED]">
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Projects />
        <About />
        <Carousel />
      </div>
      <Footer />
    </main>
  )
}
