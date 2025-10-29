import { useEffect, useState } from 'react'

export function BackgroundOrbs() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10
      const y = (e.clientY / window.innerHeight - 0.5) * 10
      setMousePos({ x, y })
    }

    if (window.matchMedia('(hover: hover)').matches) {
      window.addEventListener('mousemove', handleMouseMove)
      return () => window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden">
      <div
        className="orb-a absolute w-[560px] h-[560px] left-[-140px] top-[-160px] rounded-full opacity-45 mix-blend-screen"
        style={{
          background: 'radial-gradient(60% 60% at 50% 50%, oklch(0.78 0.12 250), oklch(0.78 0.12 250 / 0))',
          filter: 'blur(70px)',
          transform: `translate(${mousePos.x * -1}px, ${mousePos.y * -1}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="orb-b absolute w-[620px] h-[620px] right-[-180px] bottom-[-120px] rounded-full opacity-45 mix-blend-screen"
        style={{
          background: 'radial-gradient(60% 60% at 50% 50%, #ff8db3, rgba(255,141,179,0))',
          filter: 'blur(70px)',
          transform: `translate(${mousePos.x}px, ${mousePos.y}px)`,
          transition: 'transform 0.3s ease-out',
        }}
      />
      <div
        className="orb-c absolute w-[720px] h-[720px] left-1/2 top-[45%] -translate-x-1/2 -translate-y-[45%] rounded-full opacity-28 mix-blend-screen"
        style={{
          background: 'radial-gradient(60% 60% at 50% 50%, oklch(0.75 0.10 290), oklch(0.75 0.10 290 / 0))',
          filter: 'blur(70px)',
        }}
      />
    </div>
  )
}
