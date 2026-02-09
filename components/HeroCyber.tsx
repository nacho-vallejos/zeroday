'use client'

import { Ghost, Shield, Lock } from 'lucide-react'

export default function HeroCyber() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-16 px-4">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(168,85,247,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(168,85,247,0.05)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

      {/* Hero Content */}
      <div className="relative z-10 text-center mb-16">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-wider text-white mb-4">
          <span className="inline-block animate-glitch">VOID</span>
          <span className="text-cyber-purple"> </span>
          <span className="inline-block animate-glitch" style={{ animationDelay: '0.1s' }}>LABS</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-400 tracking-wide font-mono">
          HACKER PENTESTER
        </p>
        <p className="text-sm sm:text-base text-gray-500 mt-4 max-w-xl mx-auto leading-relaxed">
          Lictra pea dolors cora colorís de pelequatla oes st ale ele poctera. DOavOal effrats da mís Izquirro el aqeastíe stícle nssíonaes sue de colore panca qui íla aunrt. Deque desar velque bes laíres pocler-de peroday.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mt-8">
          <button className="px-8 py-3 bg-cyber-purple hover:bg-cyber-purple/80 text-white font-bold rounded transition-all duration-300 shadow-[0_0_20px_#A855F7] hover:shadow-[0_0_40px_#A855F7]">
            HIRE US
          </button>
          <button className="px-8 py-3 border border-gray-600 hover:border-cyber-cyan text-white font-bold rounded transition-all duration-300 hover:shadow-[0_0_20px_#22D3EE]">
            HIRE US
          </button>
        </div>
      </div>

      {/* Ghost/Skull Icon Central */}
      <div className="relative mb-24">
        <div className="absolute inset-0 bg-cyber-purple/30 blur-3xl rounded-full"></div>
        <div className="relative w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
          <Ghost className="w-48 h-48 sm:w-64 sm:h-64 text-cyber-purple drop-shadow-[0_0_30px_#A855F7]" strokeWidth={1.5} />
        </div>
      </div>

      {/* Feature Cards */}
      <div className="grid md:grid-cols-2 gap-6 w-full max-w-6xl mt-8">
        {/* Card 1 - Decker la Tarla General */}
        <div className="group relative bg-cyber-surface/50 border border-cyber-cyan/40 rounded-lg p-6 backdrop-blur-sm hover:border-cyber-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Shield className="w-6 h-6 text-cyber-cyan mb-2" />
              <h3 className="text-xl font-bold text-white tracking-wider">Decker la Tarla General</h3>
            </div>
            <Lock className="w-5 h-5 text-gray-600" />
          </div>
          <div className="space-y-2 text-sm text-gray-400 font-mono leading-relaxed">
            <p>Haberea voca un curbado glore que mucevere domande orimamos ed probacer en mo sude macule que aladom nulla haber. Contaque prsent macatre es verus un ímpendere que era arque el un domage...</p>
            <p className="text-xs text-gray-500 mt-4">Dolor macule antaque procatera el un aquet verana domera et un...</p>
          </div>
        </div>

        {/* Card 2 - Assena Dverlis Domsul */}
        <div className="group relative bg-cyber-surface/50 border border-cyber-cyan/40 rounded-lg p-6 backdrop-blur-sm hover:border-cyber-cyan transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)]">
          <div className="flex items-start justify-between mb-4">
            <div>
              <Shield className="w-6 h-6 text-cyber-cyan mb-2" />
              <h3 className="text-xl font-bold text-white tracking-wider">Assena Dverlis Domsul</h3>
            </div>
            <Lock className="w-5 h-5 text-gray-600" />
          </div>
          <div className="space-y-2 text-sm text-gray-400 font-mono leading-relaxed">
            <p>Lorem ipsum dolor sit amet consectetur. Facilisis lacet et elementum...</p>
            <ul className="list-disc list-inside space-y-1 text-xs mt-2">
              <li>Vestbulm rhoncus</li>
              <li>Probacer verana domage</li>
              <li>Quera domande macule</li>
              <li>Antaque haberea contaque</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
