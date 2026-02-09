'use client'

import { useState, useEffect } from 'react'

interface TerminalTooltipProps {
  text: string
  children: React.ReactNode
  delay?: number
}

export default function TerminalTooltip({ text, children, delay = 30 }: TerminalTooltipProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (isHovered) {
      setDisplayedText('')
      setCurrentIndex(0)
    }
  }, [isHovered])

  useEffect(() => {
    if (isHovered && currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[currentIndex])
        setCurrentIndex((prev) => prev + 1)
      }, delay)

      return () => clearTimeout(timeout)
    }
  }, [isHovered, currentIndex, text, delay])

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
      {isHovered && (
        <div className="absolute left-0 top-full mt-2 z-50 min-w-[200px] animate-fade-in">
          <div className="bg-black/95 border border-void-purple/50 p-3 rounded shadow-purple-glow">
            <div className="flex items-start gap-2">
              <span className="text-void-purple text-xs flex-shrink-0">root@void:~$</span>
              <span className="text-green-400 text-xs font-mono break-words">
                {displayedText}
                {currentIndex < text.length && (
                  <span className="inline-block w-1.5 h-3 bg-green-400 ml-0.5 animate-pulse"></span>
                )}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
