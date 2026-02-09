'use client'

import { useEffect, useState } from 'react'

interface TypingEffectProps {
  text: string
  speed?: number
  className?: string
  showCursor?: boolean
}

export default function TypingEffect({ 
  text, 
  speed = 100, 
  className = '',
  showCursor = true 
}: TypingEffectProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex])
        setCurrentIndex(prev => prev + 1)
      }, speed)

      return () => clearTimeout(timeout)
    }
  }, [currentIndex, text, speed])

  return (
    <span className={className}>
      {displayedText}
      {showCursor && currentIndex < text.length && (
        <span className="inline-block w-2 h-6 sm:h-8 md:h-12 bg-matrix-green ml-1 animate-pulse"></span>
      )}
    </span>
  )
}
