import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Capabilities from '@/components/Capabilities'
import Footer from '@/components/Footer'
import AnimatedBackground from '@/components/AnimatedBackground'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackground />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Capabilities />
        <Footer />
      </div>
    </main>
  )
}
