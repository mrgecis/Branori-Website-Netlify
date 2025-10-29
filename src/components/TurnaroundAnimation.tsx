import { useEffect, useRef } from 'react'

export function TurnaroundAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number
    let time = 0

    const nodes = [
      { x: 0.2, y: 0.25, label: 'Deal', size: 1 },
      { x: 0.5, y: 0.2, label: 'AI', size: 1.2 },
      { x: 0.8, y: 0.25, label: 'Value', size: 1 },
      { x: 0.35, y: 0.5, label: 'DD', size: 0.9 },
      { x: 0.65, y: 0.5, label: 'M&A', size: 0.9 },
      { x: 0.2, y: 0.75, label: 'Plan', size: 0.85 },
      { x: 0.5, y: 0.8, label: 'PMI', size: 0.85 },
      { x: 0.8, y: 0.75, label: 'Exit', size: 0.85 },
    ]

    const connections = [
      [0, 1], [1, 2], [1, 3], [1, 4], [3, 5], [4, 2], [5, 6], [6, 7], [4, 7]
    ]

    const draw = () => {
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

      ctx.clearRect(0, 0, size, size)

      connections.forEach(([from, to], idx) => {
        const n1 = nodes[from]
        const n2 = nodes[to]
        const x1 = n1.x * size
        const y1 = n1.y * size
        const x2 = n2.x * size
        const y2 = n2.y * size

        const offset = (time + idx * 20) % 100 / 100
        const particleX = x1 + (x2 - x1) * offset
        const particleY = y1 + (y2 - y1) * offset

        ctx.beginPath()
        ctx.moveTo(x1, y1)
        ctx.lineTo(x2, y2)
        ctx.strokeStyle = 'rgba(177,200,255,0.15)'
        ctx.lineWidth = 1.5
        ctx.stroke()

        ctx.beginPath()
        ctx.arc(particleX, particleY, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(177,200,255,${0.6 + Math.sin(time * 0.05 + idx) * 0.3})`
        ctx.fill()
      })

      nodes.forEach((node, idx) => {
        const x = node.x * size
        const y = node.y * size
        const baseRadius = 18 * node.size
        const pulse = Math.sin(time * 0.03 + idx * 0.5) * 2

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, baseRadius + pulse)
        gradient.addColorStop(0, 'rgba(177,200,255,0.4)')
        gradient.addColorStop(0.7, 'rgba(177,200,255,0.2)')
        gradient.addColorStop(1, 'rgba(177,200,255,0)')

        ctx.beginPath()
        ctx.arc(x, y, baseRadius + pulse + 8, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()

        ctx.beginPath()
        ctx.arc(x, y, baseRadius + pulse, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(177,200,255,0.12)'
        ctx.strokeStyle = 'rgba(177,200,255,0.5)'
        ctx.lineWidth = 1.5
        ctx.fill()
        ctx.stroke()

        ctx.fillStyle = 'rgba(177,200,255,0.9)'
        ctx.font = `600 ${10 * node.size}px Inter, system-ui, Arial`
        ctx.textAlign = 'center'
        ctx.textBaseline = 'middle'
        ctx.fillText(node.label, x, y)
      })

      time += 1
      animationId = requestAnimationFrame(draw)
    }

    draw()

    const handleResize = () => {
      draw()
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
