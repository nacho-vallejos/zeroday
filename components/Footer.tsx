'use client'

import { Terminal, Github, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-8 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Top Section - Links - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Column 1 - Brand */}
          <div>
            <h4 className="text-xs sm:text-sm font-bold tracking-wider text-matrix-green mb-3 sm:mb-4">[VOID::LABS]</h4>
            <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-mono">
              Underground exploit marketplace and custom offensive tool development. Trusted since 2015.
            </p>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-gray-300 mb-3 sm:mb-4">./PRODUCTS</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-matrix-green transition-colors">0day Exploit Kits</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-matrix-green transition-colors">Custom Malware/RATs</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-matrix-green transition-colors">FUD Crypters</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-matrix-green transition-colors">Ransomware Builders</a></li>
            </ul>
          </div>

          {/* Column 3 - Tools & Training */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-gray-300 mb-3 sm:mb-4">./SERVICES</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-matrix-green transition-colors">Botnet Infrastructure</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-matrix-green transition-colors">C2 Server Setup</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-matrix-green transition-colors">Private Training</a></li>
              <li><a href="#" className="text-xs sm:text-sm text-gray-300 hover:text-matrix-green transition-colors">Custom Development</a></li>
            </ul>
          </div>

          {/* Column 4 - Connect */}
          <div>
            <h4 className="text-xs sm:text-sm font-semibold tracking-wider text-gray-300 mb-3 sm:mb-4">./CONNECT</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-matrix-green transition-colors" aria-label="Github">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-500 hover:text-matrix-green transition-colors" aria-label="Twitter">
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-500 hover:text-matrix-green transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </a>
              <a href="#" className="text-gray-500 hover:text-matrix-green transition-colors" aria-label="Terminal">
                <Terminal className="w-4 h-4 sm:w-5 sm:h-5" strokeWidth={1.5} />
              </a>
            </div>
            <p className="mt-3 text-[10px] sm:text-xs text-gray-400 font-mono">PGP: 0xDEADBEEF</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 mb-6 sm:mb-8"></div>

        {/* Legal Disclaimer */}
        <div className="glass-card p-4 sm:p-6 rounded-lg mb-6 sm:mb-8 border border-matrix-green/20">
          <h5 className="text-xs sm:text-sm font-bold tracking-wider text-matrix-green mb-2 sm:mb-3 animate-glitch">⚠️ [DISCLAIMER::LEGAL]</h5>
          <p className="text-[10px] sm:text-xs leading-relaxed text-gray-200 font-mono">
            &gt; VOID LABS operates in the underground offensive security market. All exploits, malware, RATs, and payloads 
            provided are intended <span className="text-matrix-green font-semibold">EXCLUSIVELY for authorized penetration testing</span>, 
            security research, and <span className="text-matrix-green font-semibold">legitimate red team operations</span> with proper authorization. 
            We are not responsible for illegal use, unauthorized access, or malicious deployment. 
            By accessing our marketplace, you acknowledge full responsibility and agree to comply with all applicable laws. 
            All transactions are <span className="text-matrix-green font-semibold">anonymous and encrypted</span>. 
            Misuse will result in permanent blacklist. <span className="text-red-500 font-semibold">[USE AT YOUR OWN RISK]</span>
          </p>
        </div>

        {/* Bottom Bar - Responsive */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs sm:text-sm text-gray-400 gap-2 sm:gap-0 font-mono">
          <p className="text-matrix-green/70">© 2026 [VOID::LABS] // All exploits reserved</p>
          <p className="text-center sm:text-right text-matrix-green/70">
            root@void:~# <span className="text-gray-300">Trusted by APT groups worldwide</span>
          </p>
        </div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-matrix-green/50 to-transparent"></div>
    </footer>
  )
}
