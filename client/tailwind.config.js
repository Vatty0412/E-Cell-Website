/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
   theme: {
    extend: {
      fontFamily: {
        asset: ["Asset", "cursive"],
        garamond: ["EB Garamond", "serif"],
        suse: ["SUSE Mono", "monospace"],
      },
      colors: {
        'dark': {
          900: '#0a0a0a',
          800: '#1a1a1a',
          700: '#2a2a2a',
          600: '#3a3a3a',
        }
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(135deg, #111827 0%, #1e293b 50%, #000000 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { 
            transform: 'translateY(0px)',
            opacity: '0.1'
          },
          '50%': { 
            transform: 'translateY(-15px)',
            opacity: '0.3'
          }
        }
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
