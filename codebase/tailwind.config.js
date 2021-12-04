module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
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
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
