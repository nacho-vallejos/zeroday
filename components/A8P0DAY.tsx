'use client'

export default function A8P0DAY() {
  return (
    <section className="relative py-20 px-4" id="a8p0day">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-white tracking-wider">
              <span className="text-cyber-purple">#</span>A8P0DAY
            </h2>
            <p className="text-gray-400 leading-relaxed">
              Lorem dsa e liacle ove nescterpreten les. Uís oná nst nón pebrícipe re n plen de participae rande cantaras sociedod ad de piccarecy-i de la el consividart.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-cyber-purple to-cyber-cyan"></div>
            
            <div className="pt-8">
              <button className="px-6 py-3 border border-cyber-cyan text-cyber-cyan hover:bg-cyber-cyan hover:text-black font-bold rounded transition-all duration-300">
                DRAFT CARGOS
              </button>
            </div>
          </div>

          {/* Right Column - Descct Injeojer */}
          <div className="bg-cyber-surface/50 border border-gray-800 rounded-lg p-6 backdrop-blur-sm">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-xl font-bold text-white">Descct Injeojer</h3>
              <Lock className="w-5 h-5 text-gray-600" />
            </div>
            <div className="space-y-3 text-sm text-gray-400 font-mono leading-relaxed">
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              
              <div className="space-y-2 text-xs">
                <p className="text-gray-500">• Excepteur sint occaecat cupidatat non proident</p>
                <p className="text-gray-500">• Sunt in culpa qui officia deserunt mollit anim</p>
                <p className="text-gray-500">• Sed do eiusmod tempor incididunt ut labore</p>
                <p className="text-gray-500">• Dolore magna aliqua veniam nostrud</p>
              </div>

              <div className="pt-4 border-t border-gray-800">
                <p className="text-xs text-gray-600">
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper eget nulla facilisi etiam dignissim diam.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Lock({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="5" y="11" width="14" height="10" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}
