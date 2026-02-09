/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'cyber-bg': '#050505',
        'cyber-surface': '#111111',
        'cyber-purple': '#A855F7',
        'cyber-cyan': '#22D3EE',
        'void-purple': '#7c3aed',
        'void-purple-light': '#8b5cf6',
        'void-cyan': '#06b6d4',
        'void-bg': '#0a0a0a',
        'matrix-green': '#00ff41',
        'matrix-dark': '#003b00',
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
        sans: ['JetBrains Mono', 'Fira Code', 'Courier New', 'monospace'],
      },
      boxShadow: {
        'purple-glow': '0 0 20px rgba(124, 58, 237, 0.5), 0 0 40px rgba(124, 58, 237, 0.3)',
        'purple-glow-intense': '0 0 30px rgba(124, 58, 237, 0.8), 0 0 60px rgba(124, 58, 237, 0.5), 0 0 90px rgba(124, 58, 237, 0.3)',
        'cyber-purple-glow': '0 0 20px #A855F7, 0 0 40px #A855F7',
        'cyber-cyan-glow': '0 0 20px #22D3EE, 0 0 40px #22D3EE',
        'cyan-glow': '0 0 20px rgba(6, 182, 212, 0.5), 0 0 40px rgba(6, 182, 212, 0.3)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glitch': 'glitch 1s infinite',
        'fade-in': 'fadeIn 0.2s ease-in',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-2px, 2px)' },
          '40%': { transform: 'translate(-2px, -2px)' },
          '60%': { transform: 'translate(2px, 2px)' },
          '80%': { transform: 'translate(2px, -2px)' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
