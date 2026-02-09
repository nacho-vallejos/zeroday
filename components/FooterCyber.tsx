'use client'

export default function FooterCyber() {
  return (
    <footer className="relative border-t border-cyber-purple/20 py-8 bg-cyber-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Disclaimer */}
        <div className="text-center mb-6">
          <p className="text-xs text-gray-500 leading-relaxed max-w-3xl mx-auto font-mono">
            <span className="text-cyber-purple font-bold">DISCLAIMER:</span> Research purposes only. 
            Authorized personnel access required. 
            All tools and techniques presented in VOID LABS are strictly for educational purposes, 
            authorized security testing, and legitimate penetration testing engagements. 
            Unauthorized use is illegal and prohibited.
          </p>
        </div>

        {/* Social Links Placeholder */}
        <div className="text-center text-xs text-gray-600 font-mono">
          <p>Chnau revegan ruort lo dubvd Grunge Mandror crasedon • ResselGal Terrascisónem</p>
        </div>

        {/* Copyright */}
        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-gray-600 gap-2 sm:gap-0 font-mono mt-6 pt-6 border-t border-gray-800">
          <p className="text-cyber-purple/70">© 2026 VOID LABS // Cybersecurity Research</p>
          <p className="text-center sm:text-right text-cyber-cyan/70">
            root@void:~# <span className="text-gray-500">Red Team Operations</span>
          </p>
        </div>
      </div>

      {/* Decorative Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-cyber-purple/50 to-transparent"></div>
    </footer>
  )
}
