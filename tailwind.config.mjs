/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'neon-green': '#39ff14',
        'cyber-pink': '#ff00ff',
        'dark-base': '#0d0d0d',
      },
      fontFamily: {
        mono: ['"Share Tech Mono"', '"Courier New"', 'monospace'],
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glitch: {
          '0%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-3px, 3px)' },
          '40%': { transform: 'translate(-3px, -3px)' },
          '60%': { transform: 'translate(3px, 3px)' },
          '80%': { transform: 'translate(3px, -3px)' },
          '100%': { transform: 'translate(0)' },
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
        neonPulse: {
          '0%, 100%': { textShadow: '0 0 4px #39ff14, 0 0 11px #39ff14, 0 0 19px #39ff14' },
          '50%': { textShadow: '0 0 4px #39ff14, 0 0 11px #39ff14, 0 0 19px #39ff14, 0 0 40px #39ff14, 0 0 80px #39ff14' },
        },
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        glitch: 'glitch 0.3s ease-in-out infinite',
        scanline: 'scanline 4s linear infinite',
        'neon-pulse': 'neonPulse 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
