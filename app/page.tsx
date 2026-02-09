import NavbarCyber from '@/components/NavbarCyber'
import HeroCyber from '@/components/HeroCyber'
import A8P0DAY from '@/components/A8P0DAY'
import Terminal from '@/components/Terminal'
import FooterCyber from '@/components/FooterCyber'
import AnimatedBackgroundCyber from '@/components/AnimatedBackgroundCyber'

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <AnimatedBackgroundCyber />
      <div className="relative z-10">
        <NavbarCyber />
        <HeroCyber />
        <A8P0DAY />
        <Terminal />
        <FooterCyber />
      </div>
    </main>
  )
}
