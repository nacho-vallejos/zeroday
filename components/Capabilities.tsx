'use client'

import { Shield, Eye, Zap, Lock, Network } from 'lucide-react'
import TerminalTooltip from './TerminalTooltip'

export default function Capabilities() {
  const capabilities = [
    { icon: Shield, label: 'Payload Obfuscation', tooltip: './obfuscate.py --level=extreme' },
    { icon: Eye, label: 'Dark Web Intel', tooltip: 'tor --proxy search_onion.php' },
    { icon: Zap, label: 'Instant Deploy', tooltip: 'ansible-playbook deploy_c2.yml' },
    { icon: Lock, label: 'AES-256 Crypto', tooltip: 'openssl enc -aes-256-cbc -pbkdf2' },
    { icon: Network, label: 'Botnet C&C', tooltip: 'nc -lvp 1337 | tee bot_commands.log' },
  ]

  return (
    <section className="relative py-12 sm:py-16 lg:py-20 border-t border-matrix-green/20" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <h2 className="text-center text-lg sm:text-xl lg:text-2xl font-bold tracking-[0.2em] sm:tracking-[0.3em] text-matrix-green mb-12 sm:mb-16 animate-glitch">
          [CAPABILITIES::ACTIVE]
        </h2>

        {/* Hexagon Pipeline - Responsive */}
        <div className="relative flex items-center justify-center overflow-x-auto pb-8">
          {/* Connection Line */}
          <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-matrix-green/50 to-transparent"></div>

          {/* Hexagons */}
          <div className="relative flex items-center justify-between w-full max-w-5xl gap-4 sm:gap-8 lg:gap-12 px-4">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon
              return (
                <TerminalTooltip key={index} text={capability.tooltip}>
                  <div className="flex flex-col items-center group flex-shrink-0 cursor-pointer">
                    {/* Hexagon Container */}
                    <div className="relative">
                      {/* Glow Effect */}
                      <div className="absolute inset-0 blur-xl bg-matrix-green/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      
                      {/* Hexagon */}
                      <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 flex items-center justify-center">
                        <svg
                          viewBox="0 0 100 100"
                          className="absolute inset-0 w-full h-full"
                        >
                          <polygon
                            points="50 1 95 25 95 75 50 99 5 75 5 25"
                            fill="rgba(0, 0, 0, 0.8)"
                            stroke="rgba(0, 255, 65, 0.5)"
                            strokeWidth="1"
                            className="transition-all duration-300 group-hover:fill-[rgba(0,255,65,0.1)] group-hover:stroke-[rgba(0,255,65,0.9)]"
                          />
                        </svg>
                        <Icon 
                          className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-gray-400 group-hover:text-matrix-green transition-colors duration-300 relative z-10" 
                          strokeWidth={1.5} 
                        />
                      </div>
                    </div>

                    {/* Label */}
                    <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-300 group-hover:text-matrix-green transition-colors text-center max-w-[80px] sm:max-w-[100px] tracking-wider font-medium">
                      {capability.label}
                    </p>
                  </div>
                </TerminalTooltip>
              )
            })}
          </div>
        </div>

        {/* Service Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mt-12 sm:mt-16">
          {/* Zero-Day Intelligence */}
          <TerminalTooltip text="curl -X GET https://nullptr.onion/api/research">
            <div className="glass-card p-6 sm:p-8 rounded-lg text-center hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 cursor-pointer border border-matrix-green/20 hover:border-matrix-green">
              <h3 className="text-sm sm:text-base font-semibold tracking-wider text-matrix-green mb-3">[ZERO::DAY::INTEL]</h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-mono">
                Vulnerability research, CVE discovery, and exploit proof-of-concepts. Kernel-level privilege escalation techniques.
              </p>
            </div>
          </TerminalTooltip>

          {/* Kernel Exploitation */}
          <TerminalTooltip text="./exploit.sh --target=kernel --ring=0 --stealth">
            <div className="glass-card p-6 sm:p-8 rounded-lg text-center hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 cursor-pointer border border-matrix-green/20 hover:border-matrix-green">
              <h3 className="text-sm sm:text-base font-semibold tracking-wider text-matrix-green mb-3">[KERNEL::EXPLOIT]</h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-mono">
                Ring-0 exploitation techniques, KASLR bypass, SMEP/SMAP evasion. Advanced kernel debugging and rootkit development.
              </p>
            </div>
          </TerminalTooltip>

          {/* Red Team Training */}
          <TerminalTooltip text="ssh research@nullptr.labs -p 31337">
            <div className="glass-card p-6 sm:p-8 rounded-lg text-center hover:shadow-[0_0_20px_rgba(0,255,65,0.5)] transition-all duration-300 cursor-pointer border border-matrix-green/20 hover:border-matrix-green">
              <h3 className="text-sm sm:text-base font-semibold tracking-wider text-matrix-green mb-3">[RESEARCH::TRAINING]</h3>
              <p className="text-xs sm:text-sm text-gray-200 leading-relaxed font-mono">
                Advanced exploit development, reverse engineering, and APT simulation. Private mentorship from kernel researchers.
              </p>
            </div>
          </TerminalTooltip>
        </div>

        {/* Team Info Section */}
        <div className="mt-12 sm:mt-16 glass-card p-6 sm:p-8 rounded-lg max-w-4xl mx-auto text-center border border-matrix-green/20" id="team">
          <h3 className="text-base sm:text-lg font-bold tracking-wider text-matrix-green mb-4 animate-glitch">[RESEARCH::TEAM]</h3>
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 font-mono">
            Our collective includes <span className="text-matrix-green font-semibold">Kernel Security Researchers</span>, 
            former APT analysts, <span className="text-matrix-green font-semibold">Exploit Developers</span>, 
            <span className="text-matrix-green font-semibold">Vulnerability Researchers</span>, 
            and <span className="text-matrix-green font-semibold">Red Team Operators</span>. 
            Operating since 2015. Ring-0 operations worldwide.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-gray-300 font-mono">
            <span className="px-3 py-1 glass-card rounded border border-matrix-green/20">C/C++/ASM</span>
            <span className="px-3 py-1 glass-card rounded border border-matrix-green/20">Kernel Debug</span>
            <span className="px-3 py-1 glass-card rounded border border-matrix-green/20">0day Research</span>
            <span className="px-3 py-1 glass-card rounded border border-matrix-green/20">Ring-0 Ops</span>
            <span className="px-3 py-1 glass-card rounded border border-matrix-green/20">APT Intel</span>
          </div>
        </div>
      </div>
    </section>
  )
}
