/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Fredoka One", "sans-serif"],
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#5A92B1",
        
"secondary": "#14b8a6",
        
"accent": "#ca8a04",
        
"neutral": "#111827",
        
"base-100": "#f3f4f6",
        
"info": "#7dd3fc",
        
"success": "#10b981",
        
"warning": "#facc15",
        
"error": "#f43f5e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
