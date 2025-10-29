import { useEffect, useRef } from 'react'

interface IconData {
  orbit: number
  angle: number
  color: string
  bgColor: string
  label: string
}

export function OrbitAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let rotation = 0
    let animationId: number

    const iconData: IconData[] = [
      {
        orbit: 0.1,
        angle: 0,
        color: 'rgba(177,200,255,0.9)',
        bgColor: 'rgba(177,200,255,0.2)',
        label: '⚙',
      },
      {
        orbit: 0.1,
        angle: 120,
        color: 'rgba(202,189,255,0.9)',
        bgColor: 'rgba(202,189,255,0.2)',
        label: '◻',
      },
      {
        orbit: 0.1,
        angle: 240,
        color: 'rgba(177,200,255,0.9)',
        bgColor: 'rgba(177,200,255,0.2)',
        label: '◆',
      },
      {
        orbit: 0.16,
        angle: 0,
        color: 'rgba(202,189,255,0.9)',
        bgColor: 'rgba(202,189,255,0.2)',
        label: '◯',
      },
      {
        orbit: 0.16,
        angle: 120,
        color: 'rgba(255,201,163,0.9)',
        bgColor: 'rgba(255,201,163,0.2)',
        label: '∧',
      },
      {
        orbit: 0.16,
        angle: 240,
        color: 'rgba(126,240,181,0.9)',
        bgColor: 'rgba(126,240,181,0.2)',
        label: '✓',
      },
      {
        orbit: 0.22,
        angle: 0,
        color: 'rgba(255,201,163,0.9)',
        bgColor: 'rgba(255,201,163,0.2)',
        label: '→',
      },
      {
        orbit: 0.22,
        angle: 120,
        color: 'rgba(126,240,181,0.9)',
        bgColor: 'rgba(126,240,181,0.2)',
        label: '$',
      },
      {
        orbit: 0.22,
        angle: 240,
        color: 'rgba(177,200,255,0.9)',
        bgColor: 'rgba(177,200,255,0.2)',
        label: '●',
      },
    ]

    function drawOrbit() {
      if (!canvas || !ctx) return

      const rect = canvas.getBoundingClientRect()
      const dpr = window.devicePixelRatio || 1
      const size = Math.min(rect.width, rect.height)

      if (canvas.width !== size * dpr || canvas.height !== size * dpr) {
        canvas.width = size * dpr
        canvas.height = size * dpr
        canvas.style.width = size + 'px'
        canvas.style.height = size + 'px'
        ctx.scale(dpr, dpr)
      }

      const centerX = size / 2
      const centerY = size / 2

      ctx.clearRect(0, 0, size, size)

      ctx.strokeStyle = 'rgba(177,200,255,0.1)'
      ctx.lineWidth = 0.6
      ctx.beginPath()
      ctx.arc(centerX, centerY, size * 0.1, 0, Math.PI * 2)
      ctx.stroke()

      ctx.strokeStyle = 'rgba(202,189,255,0.08)'
      ctx.beginPath()
      ctx.arc(centerX, centerY, size * 0.16, 0, Math.PI * 2)
      ctx.stroke()

      ctx.strokeStyle = 'rgba(255,201,163,0.05)'
      ctx.beginPath()
      ctx.arc(centerX, centerY, size * 0.22, 0, Math.PI * 2)
      ctx.stroke()

      ctx.fillStyle = 'rgba(177,200,255,0.5)'
      ctx.beginPath()
      ctx.arc(centerX, centerY, size * 0.012, 0, Math.PI * 2)
      ctx.fill()

      iconData.forEach((item, index) => {
        let currentAngle
        if (item.orbit === 0.1) {
          currentAngle = ((rotation + item.angle) * Math.PI) / 180
        } else if (item.orbit === 0.16) {
          currentAngle = ((-rotation * 1.2 + item.angle) * Math.PI) / 180
        } else {
          currentAngle = ((rotation * 0.8 + item.angle) * Math.PI) / 180
        }

        const x = centerX + Math.cos(currentAngle) * size * item.orbit
        const y = centerY + Math.sin(currentAngle) * size * item.orbit
        const iconSize = size * 0.018

        ctx.fillStyle = item.bgColor
        ctx.beginPath()
        ctx.arc(x, y, iconSize * 2, 0, Math.PI * 2)
        ctx.fill()

        ctx.fillStyle = item.bgColor
        ctx.beginPath()
        ctx.arc(x, y, iconSize * 1.2, 0, Math.PI * 2)
        ctx.fill()

        ctx.strokeStyle = item.color
        ctx.lineWidth = 1
        ctx.beginPath()
        ctx.arc(x, y, iconSize * 1.2, 0, Math.PI * 2)
        ctx.stroke()

        ctx.fillStyle = item.color
        ctx.font = `bold ${iconSize * 1.5}px Arial, sans-serif`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(item.label, x, y)
      })

      rotation += 0.8
      animationId = requestAnimationFrame(drawOrbit)
    }

    drawOrbit()

    const handleResize = () => {
      drawOrbit()
    }

    window.addEventListener('resize', handleResize)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <div className="relative w-full aspect-square max-w-[280px] md:max-w-[300px] mx-auto rounded-[20px] md:rounded-[26px] bg-[oklch(1_0_0_/_0.06)] border border-[oklch(1_0_0_/_0.14)] grid place-items-center overflow-hidden backdrop-blur-[16px]">
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  )
}
