/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "fade-in": "fade-in 0.3s ease-out",
        glow: "glow 2.5s ease-in-out infinite",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(-8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glow: {
          "0%, 100%": {
            textShadow: "0 0 5px #00ffcc, 0 0 10px #00ffcc, 0 0 15px #00ffcc",
          },
          "50%": {
            textShadow: "0 0 10px #00ffcc, 0 0 20px #00ffcc, 0 0 30px #00ffcc",
          },
        },
      },
    },
  },
  plugins: [],
};
