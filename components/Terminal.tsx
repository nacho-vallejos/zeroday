'use client'

import { useState, useEffect } from 'react'
import { Terminal as TerminalIcon, ChevronRight } from 'lucide-react'

export default function Terminal() {
  const [lines, setLines] = useState<string[]>([])
  
  const commands = [
    'void_labs --initialize --target stealth_mode',
    'Checking kernel vulnerabilities...',
    'Bypassing sandboxes... [OK]',
    'Executing zero-day-ghost.sh',
    'ACCESS GRANTED: Root privileges acquired.',
    '------------------------------------------',
    'WARNING: Research purposes only.',
    'Authorized auditing strictly required.'
  ]

  useEffect(() => {
    commands.forEach((cmd, i) => {
      setTimeout(() => {
        setLines(prev => [...prev, cmd])
      }, i * 800)
    })
  }, [])

  return (
    <div className="w-full max-w-3xl mx-auto mt-12 font-mono text-sm bg-black/80 border border-cyber-purple/30 rounded-lg overflow-hidden shadow-[0_0_20px_rgba(168,85,247,0.15)]">
      {/* Barra superior de la terminal */}
      <div className="bg-cyber-surface px-4 py-2 border-b border-cyber-purple/20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <TerminalIcon size={14} className="text-cyber-purple" />
          <span className="text-gray-400 text-xs">void-labs@research: ~</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20" />
        </div>
      </div>

      {/* Contenido de la terminal */}
      <div className="p-4 min-h-[300px] flex flex-col gap-1">
        {lines.map((line, index) => (
          <div key={index} className="flex gap-2 animate-fade-in">
            <span className="text-cyber-purple font-bold shrink-0">
              <ChevronRight size={16} className="inline" />
            </span>
            <span className={line.includes('GRANTED') ? 'text-cyber-cyan drop-shadow-[0_0_5px_#22D3EE]' : line.includes('WARNING') ? 'text-red-400' : 'text-gray-300'}>
              {line}
            </span>
          </div>
        ))}
        <div className="flex gap-2 items-center animate-fade-in">
          <span className="text-cyber-purple font-bold">
            <ChevronRight size={16} />
          </span>
          <span className="w-2 h-4 bg-cyber-purple animate-pulse" />
        </div>
      </div>
    </div>
  )
}
