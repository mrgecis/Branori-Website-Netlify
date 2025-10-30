import { useEffect } from 'react'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Services } from '@/components/Services'
import { RestructuringFlow } from '@/components/RestructuringFlow'
import { Momentum } from '@/components/Momentum'
import { GlobalReach } from '@/components/GlobalReach'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'
import { BackgroundOrbs } from '@/components/BackgroundOrbs'
import { useScrollReveal } from '@/hooks/use-scroll-reveal'

function App() {
  useScrollReveal()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden">
      <BackgroundOrbs />
      <Header />
      <main className="w-full overflow-x-hidden">
        <Hero />
        <Services />
        <RestructuringFlow />
        <Momentum />
        <GlobalReach />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
