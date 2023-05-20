/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}",
    "./containers/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      gilroy: ['"Gilroy-Regular"', '"sans-serif"'],
      "gilroy-med": ['"Gilroy-Medium"', '"sans-serif"'],
      "gilroy-semi": ['"Gilroy-Semibold"', '"sans-serif"'],
      "gilroy-bold": ['"Gilroy-Bold"', '"sans-serif"'],
    },
    extend: {
      backgroundImage: {
        footer: "url('/public/images/footerbg.svg')",
      },
      colors: {
        "grey-100": "#FAFBFD",
        "grey-200": "#0f0518",
        "grey-500": "#FBFBFC",
        dark: "#0e061a",
      },
    },
  },
  plugins: [],
};
