'use client'

import { Terminal, Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function NavbarCyber() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-cyber-bg/80 border-b border-cyber-purple/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with Glitch Effect */}
          <div className="flex items-center space-x-3 group cursor-pointer">
            <Terminal className="w-6 h-6 text-cyber-purple animate-pulse" strokeWidth={1.5} />
            <span className="text-xl font-bold tracking-wider text-white group-hover:animate-glitch">
              VOID LABS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#fortand" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide">
              Fortand
            </a>
            <a href="#ralces" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide">
              Ralces
            </a>
            <a href="#pecstaces" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide">
              Pecstaces
            </a>
            <a href="#cantara" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide">
              Cantara
            </a>
            <a href="#donate" className="text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide">
              Donate
            </a>
          </div>

          {/* Hacker Access Button */}
          <button className="hidden md:block relative px-6 py-2 text-sm font-bold text-cyber-purple border-2 border-cyber-purple rounded hover:bg-cyber-purple hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.3)] hover:shadow-[0_0_20px_rgba(168,85,247,0.6)] overflow-hidden group">
            <span className="relative z-10">DORE US</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyber-purple via-cyber-cyan to-cyber-purple opacity-0 group-hover:opacity-20 transition-opacity"></div>
          </button>

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
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-cyber-purple/20 pt-4">
            <a 
              href="#fortand" 
              className="block text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Fortand
            </a>
            <a 
              href="#ralces" 
              className="block text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Ralces
            </a>
            <a 
              href="#pecstaces" 
              className="block text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Pecstaces
            </a>
            <a 
              href="#cantara" 
              className="block text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Cantara
            </a>
            <a 
              href="#donate" 
              className="block text-gray-400 hover:text-cyber-cyan transition-colors text-sm tracking-wide py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Donate
            </a>
            <button className="w-full mt-4 px-6 py-2 text-sm font-bold text-cyber-purple border-2 border-cyber-purple rounded hover:bg-cyber-purple hover:text-white transition-all duration-300">
              DORE US
            </button>
          </div>
        )}
      </div>
    </nav>
  )
}
