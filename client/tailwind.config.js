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
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
