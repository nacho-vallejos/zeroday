'use client'

import { Ghost, Shield, Brain } from 'lucide-react'
import TypingEffect from './TypingEffect'
import TerminalTooltip from './TerminalTooltip'

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-24 sm:pb-32 px-4">
      {/* Title */}
      <div className="absolute top-24 sm:top-32 left-0 right-0 text-center px-4">
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[0.15em] sm:tracking-[0.2em] text-matrix-green text-shadow-glow mb-2">
          <TypingEffect text="[VOID SECURITY LABS]" speed={80} />
        </h1>
        <p className="mt-3 sm:mt-4 text-xs sm:text-sm md:text-base text-gray-400 tracking-[0.15em] sm:tracking-[0.2em] font-light px-4">
          <TypingEffect text="> Underground Exploit Market & Custom Payload Development" speed={40} showCursor={false} />
        </p>
        <p className="mt-2 text-[10px] sm:text-xs text-matrix-green/60 tracking-wider">
          [ TRUSTED BY BLACK HATS • GHOST OPS • ANONYMOUS COLLECTIVES ]
        </p>
      </div>

      {/* Three Orbs Layout - Responsive */}
      <div className="relative flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 scale-75 sm:scale-90 lg:scale-100 mt-12 sm:mt-0">
        {/* Left Orb - Exploit Kits */}
        <TerminalTooltip text="echo 'Access 0day exploits, ransomware builders, crypters...'">
          <div className="group relative cursor-pointer">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full glass-orb flex flex-col items-center justify-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] hover:scale-105 hover:animate-glitch">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-matrix-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Ghost className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 group-hover:text-matrix-green mb-3 sm:mb-4 relative z-10 transition-colors" strokeWidth={1.5} />
              <div className="text-center relative z-10 px-4">
                <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-matrix-green">EXPLOIT</h3>
                <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-matrix-green">ARSENAL</h3>
              </div>
            </div>
          </div>
        </TerminalTooltip>

        {/* Center Orb - Void Security (Main Focus) */}
        <TerminalTooltip text="cat ./services.txt | grep 'premium'">
          <div className="group relative sm:-mx-12 lg:-mx-16 z-10 cursor-pointer">
            <div className="absolute inset-0 rounded-full bg-matrix-green/20 blur-3xl animate-pulse-slow"></div>
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full glass-orb flex flex-col items-center justify-center transition-all duration-500 shadow-[0_0_20px_rgba(0,255,65,0.5)] hover:shadow-[0_0_40px_rgba(0,255,65,0.8)] hover:scale-105 border-matrix-green/30">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-matrix-green/20 to-transparent"></div>
              <div className="text-center relative z-10">
                <h2 className="text-xl sm:text-2xl font-bold tracking-[0.3em] text-matrix-green mb-2 group-hover:animate-glitch">[VOID]</h2>
                <h2 className="text-xl sm:text-2xl font-bold tracking-[0.3em] text-matrix-green group-hover:animate-glitch">LABS</h2>
              </div>
            </div>
          </div>
        </TerminalTooltip>

        {/* Right Orb - Custom Malware */}
        <TerminalTooltip text="ls -la ./malware/ | wc -l # 500+ tools">
          <div className="group relative cursor-pointer">
            <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full glass-orb flex flex-col items-center justify-center transition-all duration-500 hover:shadow-[0_0_30px_rgba(0,255,65,0.5)] hover:scale-105 hover:animate-glitch">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-matrix-green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <Brain className="w-12 h-12 sm:w-16 sm:h-16 text-gray-300 group-hover:text-matrix-green mb-3 sm:mb-4 relative z-10 transition-colors" strokeWidth={1.5} />
              <div className="text-center relative z-10 px-4">
                <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-matrix-green">CUSTOM</h3>
                <h3 className="text-xs sm:text-sm font-semibold tracking-wider text-matrix-green">MALWARE</h3>
              </div>
            </div>
          </div>
        </TerminalTooltip>
      </div>

      {/* Bottom Services Grid - Responsive */}
      <div className="absolute bottom-8 sm:bottom-20 left-0 right-0 max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 lg:gap-6">
          {/* Card 1 */}
          <TerminalTooltip text="./crypter.sh --bypass-av --edr-evasion">
            <div className="glass-card p-4 sm:p-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 group cursor-pointer hover:border-matrix-green">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-3 group-hover:text-matrix-green transition-colors" strokeWidth={1.5} />
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-wider text-white mb-1">FUD Crypters</h4>
              <p className="text-[9px] sm:text-xs text-gray-500">Bypass AV/EDR</p>
            </div>
          </TerminalTooltip>

          {/* Card 2 */}
          <TerminalTooltip text="python3 ransomware_builder.py --encryption=AES256">
            <div className="glass-card p-4 sm:p-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 group cursor-pointer hover:border-matrix-green">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-3 group-hover:text-matrix-green transition-colors" strokeWidth={1.5} />
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-wider text-white mb-1">Ransomware Kits</h4>
              <p className="text-[9px] sm:text-xs text-gray-500">Custom Crypto</p>
            </div>
          </TerminalTooltip>

          {/* Card 3 */}
          <TerminalTooltip text="nmap --script=vuln target.com | grep 0day">
            <div className="glass-card p-4 sm:p-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 group cursor-pointer hover:border-matrix-green">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-3 group-hover:text-matrix-green transition-colors" strokeWidth={1.5} />
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-wider text-white mb-1">0day Exploits</h4>
              <p className="text-[9px] sm:text-xs text-gray-500">Private CVEs</p>
            </div>
          </TerminalTooltip>

          {/* Card 4 */}
          <TerminalTooltip text="./rat --persistence --keylogger --screenshot">
            <div className="glass-card p-4 sm:p-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 group cursor-pointer hover:border-matrix-green">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-3 group-hover:text-matrix-green transition-colors" strokeWidth={1.5} />
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-wider text-white mb-1">RAT Frameworks</h4>
              <p className="text-[9px] sm:text-xs text-gray-500">Full Control</p>
            </div>
          </TerminalTooltip>

          {/* Card 5 */}
          <TerminalTooltip text="ssh root@botnet -p 9001">
            <div className="glass-card p-4 sm:p-6 rounded-lg hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 group cursor-pointer col-span-2 sm:col-span-1 hover:border-matrix-green">
              <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-gray-400 mb-2 sm:mb-3 group-hover:text-matrix-green transition-colors" strokeWidth={1.5} />
              <h4 className="text-[10px] sm:text-xs font-semibold tracking-wider text-white mb-1">Botnet C2</h4>
              <p className="text-[9px] sm:text-xs text-gray-500">100K+ Bots</p>
            </div>
          </TerminalTooltip>
        </div>
      </div>
    </section>
  )
}
