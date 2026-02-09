'use client'

import { Shield, Menu, X, Terminal } from 'lucide-react'
import { useState } from 'react'
import TerminalTooltip from './TerminalTooltip'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-matrix-green/20 bg-black/95 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2 sm:space-x-3 group">
            <Terminal className="w-5 h-5 sm:w-6 sm:h-6 text-matrix-green group-hover:animate-glitch" strokeWidth={1.5} />
            <span className="text-lg sm:text-xl font-bold tracking-wider text-matrix-green group-hover:animate-glitch">
              [VOID::LABS]
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <TerminalTooltip text="cd /services && ls -la">
              <a 
                href="#services" 
                className="text-gray-300 hover:text-matrix-green transition-colors text-sm lg:text-base tracking-wide"
              >
                ./services
              </a>
            </TerminalTooltip>
            <TerminalTooltip text="cat arsenal.txt | grep --color">
              <a 
                href="#tools" 
                className="text-gray-300 hover:text-matrix-green transition-colors text-sm lg:text-base tracking-wide"
              >
                ./arsenal
              </a>
            </TerminalTooltip>
            <TerminalTooltip text="ssh training@void.labs">
              <a 
                href="#training" 
                className="text-gray-300 hover:text-matrix-green transition-colors text-sm lg:text-base tracking-wide"
              >
                ./training
              </a>
            </TerminalTooltip>
            <TerminalTooltip text="whoami && uname -a">
              <a 
                href="#team" 
                className="text-gray-300 hover:text-matrix-green transition-colors text-sm lg:text-base tracking-wide"
              >
                ./crew
              </a>
            </TerminalTooltip>
          </div>

          {/* Contact Button */}
          <TerminalTooltip text="nc -lvnp 4444 // connect back">
            <button className="hidden md:block relative px-4 lg:px-6 py-2 text-sm lg:text-base font-medium text-matrix-green overflow-hidden group border border-matrix-green/50 hover:border-matrix-green transition-all">
              <span className="relative z-10 tracking-wider">&gt; CONNECT</span>
            </button>
          </TerminalTooltip>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-gray-400 hover:text-white transition-colors"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3">
            <a 
              href="#services" 
              className="block text-gray-300 hover:text-matrix-green transition-colors text-base tracking-wide py-2 font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              ./services
            </a>
            <a 
              href="#tools" 
              className="block text-gray-300 hover:text-matrix-green transition-colors text-base tracking-wide py-2 font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              ./arsenal
            </a>
            <a 
              href="#training" 
              className="block text-gray-300 hover:text-matrix-green transition-colors text-base tracking-wide py-2 font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              ./training
            </a>
            <a 
              href="#team" 
              className="block text-gray-300 hover:text-matrix-green transition-colors text-base tracking-wide py-2 font-mono"
              onClick={() => setIsMenuOpen(false)}
            >
              ./crew
            </a>
            <button className="w-full relative px-6 py-2 text-sm font-medium text-matrix-green border border-matrix-green/50 hover:border-matrix-green transition-all mt-2">
              <span className="relative z-10 tracking-wider">&gt; CONNECT</span>
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
