import { useEffect, useState } from 'react'
import { useIsMobile } from '@/hooks/use-mobile'

export function BackgroundOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const isMobile = useIsMobile()

  useEffect(() => {
    // Disable mouse tracking on mobile for performance
    if (isMobile) return

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      setMousePos({ x, y })
    }

    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', handleMouseMove, { passive: true })
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [isMobile])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div
        className={`orb-a absolute rounded-full opacity-45 mix-blend-screen ${
          isMobile ? 'w-[300px] h-[300px] left-[-80px] top-[-100px]' : 'w-[560px] h-[560px] left-[-140px] top-[-160px]'
        }`}
        style={{
          background: 'radial-gradient(60% 60% at 50% 50%, oklch(0.78 0.12 250), oklch(0.78 0.12 250 / 0))',
          filter: isMobile ? 'blur(40px)' : 'blur(70px)',
          transform: isMobile ? 'none' : `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`,
          transition: isMobile ? 'none' : 'transform 0.3s ease-out',
          willChange: isMobile ? 'auto' : 'transform',
        }}
      />
      <div
        className={`orb-b absolute rounded-full opacity-45 mix-blend-screen ${
          isMobile ? 'w-[350px] h-[350px] right-[-100px] bottom-[-80px]' : 'w-[620px] h-[620px] right-[-180px] bottom-[-120px]'
        }`}
        style={{
          background: 'radial-gradient(60% 60% at 50% 50%, #ff8db3, rgba(255,141,179,0))',
          filter: isMobile ? 'blur(40px)' : 'blur(70px)',
          transform: isMobile ? 'none' : `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: isMobile ? 'none' : 'transform 0.3s ease-out',
          willChange: isMobile ? 'auto' : 'transform',
        }}
      />
      <div
        className={`orb-c absolute rounded-full opacity-28 mix-blend-screen left-1/2 top-[45%] -translate-x-1/2 -translate-y-[45%] ${
          isMobile ? 'w-[400px] h-[400px]' : 'w-[720px] h-[720px]'
        }`}
        style={{
          background: 'radial-gradient(60% 60% at 50% 50%, oklch(0.75 0.10 290), oklch(0.75 0.10 290 / 0))',
          filter: isMobile ? 'blur(40px)' : 'blur(70px)',
        }}
      />
    </div>
  )
}
