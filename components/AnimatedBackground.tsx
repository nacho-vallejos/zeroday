'use client'

import { useEffect, useRef } from 'react'

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const resizeCanvas = () => {
      if (!canvas) return
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Matrix rain
    const fontSize = 14
    const columns = Math.floor(canvas.width / fontSize)
    const drops: number[] = []
    
    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100
    }
    
    const matrixChars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン'
    
    const drawMatrix = () => {
      if (!canvas || !ctx) return
      
      ctx.fillStyle = 'rgba(0, 255, 65, 0.05)'
      ctx.font = `${fontSize}px monospace`
      
      for (let i = 0; i < drops.length; i++) {
        const char = matrixChars[Math.floor(Math.random() * matrixChars.length)]
        const x = i * fontSize
        const y = drops[i] * fontSize
        
        ctx.fillText(char, x, y)
        
        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        drops[i]++
      }
    }

    // Nodes
    class Node {
      x: number
      y: number
      vx: number
      vy: number
      radius: number
      opacity: number

      constructor(width: number, height: number) {
        this.x = Math.random() * width
        this.y = Math.random() * height
        this.vx = (Math.random() - 0.5) * 0.5
        this.vy = (Math.random() - 0.5) * 0.5
        this.radius = Math.random() * 2 + 1
        this.opacity = Math.random() * 0.5 + 0.3
      }

      update(width: number, height: number) {
        this.x += this.vx
        this.y += this.vy
        if (this.x < 0 || this.x > width) this.vx *= -1
        if (this.y < 0 || this.y > height) this.vy *= -1
      }

      draw(context: CanvasRenderingContext2D) {
        context.beginPath()
        context.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        context.fillStyle = `rgba(0, 255, 65, ${this.opacity})`
        context.fill()
      }
    }

    const nodes: Node[] = []
    for (let i = 0; i < 80; i++) {
      nodes.push(new Node(canvas.width, canvas.height))
    }

    const animate = () => {
      if (!canvas || !ctx) return
      
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)'
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      drawMatrix()

      nodes.forEach((node) => {
        node.update(canvas.width, canvas.height)
        node.draw(ctx)
      })

      requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ background: '#0a0a0a' }}
    />
  )
}
