module.exports = {
  purge: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "media", // or 'media' or 'class'
  mode: "jit",
  enabled: process.env.NODE_ENV === "production",
  theme: {
    fontFamily: {
      deFont: ['"Inter"', "sans-serif"],
    },
    scale: {
      0: "0",
      25: ".25",
      50: ".5",
      75: ".75",
      90: ".9",
      95: ".95",
      100: "1",
      105: "1.05",
      110: "1.1",
      125: "1.25",
      150: "1.5",
      200: "2",
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "900px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      typography: {
        DEFAULT: {
          css: {
            color: "#FFF",
            a: {
              color: "#4798C5",
              "&:hover": {
                color: "#2c5282",
              },
            },
            h1: {
              color: "#FFF",
            },
            h2: {
              color: "#FFF",
            },
            h3: {
              color: "#FFF",
            },
            h4: { color: "#FFF" },
            em: { color: "#FFF" },
            strong: { color: "#FFF" },
            blockquote: { color: "#FFF" },
            code: { backgroundColor: "#1A1E22", color: "#FFF" },
          },
        },
      },
      colors: {
        cardColorDark: "#18181B",
        cardPTextDark: "rgba(255, 255, 255, 0.6)",
        linkColorDark: "rgb(169, 197, 234)",
        linkColorDarkHover: "#97acc7",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
